防抖 触发就会等一段时间

// 如模糊查询

(1) 闭包 time 不会被清除保留下来

(2) apply this 的指向

```
function debounce(fun, wait) {
    let time = null
  return function () {
    let context = this;
    let args = arguments;
    if (time) clearTimeout(time)
        time = setTimeout(() => {
        fun.apply(context, args)
      }, wait)
  }
}
```

// 节流 2 个时间差 大于 wait 才能被处罚

```
function throttle(fun, wait) {
  let preTime = 0
  return function () {
  let context = this;
  let args = arguments;
  let now = new Date().getTime()
  if (now - preTime > wait) {
        fun.apply(context, args)
        preTime = now
    }
  }
}
```
