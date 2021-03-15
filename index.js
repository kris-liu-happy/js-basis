// 一 .基础-函数的柯里化
// （1）添加
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
  
  // （2）通过函数的柯里化来测试三个点
  // 三个点变数组
  const curryThreePoints = (...rest) => {
    let arr = rest;
    return (...list) => {
      return arr.push(list);
    };
  };
  let testReturnArray = curryThreePoints(3);
  //   console.log(testReturnArray(2));
  
  // （3）柯里化封装一个promise
  const curryPromise = (fn, context) => {
    return (config) => {
      return new Promise((resolve, reject) => {
        let obj = {
          ...config,
          resolve,
          reject,
        };
        fn.call(context || window, obj);
      });
    };
  };
  
  const fnPromise = (obj) => {
    let num = obj.a + obj.b
    obj.resolve(num)
  };
  
  let testFnPromise = curryPromise(fnPromise);
  testFnPromise({ a: 1, b: 2 }).then(res => {
      console.log(res, "res")
  })