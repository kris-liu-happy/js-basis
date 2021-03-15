函数的柯里化  

```js

// 1.基础
// 完整
const add = (x, y) => {
  return x + y;
};
//   console.log(add(1, 2)); // 3
// 拆分为函数的柯里化
const curryAdd = (x) => {
  return (y) => {
    return x + y;
  };
};

let addNumOne = curryAdd(2);
let addNumTwo = curryAdd(2);
//   console.log(addNumOne(1)); // 3
//   console.log(addNumTwo(2)); // 4

// 2.通过函数的柯里化来测试三个点
// 三个点变数组
const curryThreePoints = (...rest) => {
  let arr = rest;
  return (...list) => {
    return arr.push(list);
  };
};
let testReturnArray = curryThreePoints(3);
//   console.log(testReturnArray(2));

// 柯里化封装一个promise
const curryPromise = (fn, context) => {
  return (config) => {
    return new Promise((resolve, reject) => {
      console.log(fn, "fn");
      let obj = {
        ...config,
        resolve,
        reject,
      };
      console.log(obj, "obj")
      fn.apply(context || window, obj);
    });
  };
};

const fnPromise = (...obj) => {
  console.log(obj, "obj");
};

let testFnPromise = curryPromise(fnPromise);
console.log(testFnPromise({ a: 1, b: 2 }));
```

