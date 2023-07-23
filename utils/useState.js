// define a global state object
// const state = {};

// 已经实现了 useState() 钩子，但是存在一个问题，原版的 useState() 只需要传入 defaultValue，不需要 key
// const useState = (key, defaultValue) => {
//   if (!state[key]) {  //判断state是否有值，避免每次 rerender 都重置 state[key] 为 defaultValue
//     state[key] = defaultValue;
//   }
//   const setState = (value) => {
//     state[key] = value;

//     root.rerender();
//   };

//   return [state[key], setState];
// };

let i = 0; //记录 useState 渲染的顺序
const states = []; //每个 useState 渲染都对应数组中的一个数据。这样的话，states[0]就是对应 App()的useState，states[1]就是对应 LikeButton()的useState

const useState = (defaultValue) => {
  if (states.length <= i) {
    states[i] = defaultValue;
  }

  const key = i; //每次 useState 被执行，都会定义一个常量 key，记录当前 useState 被执行的顺序

  const setState = (value) => {
    states[key] = value; //把更新的值赋值给当前执行顺序下的 useState

    i = 0; //这一步很重要。要在每次 rerender App() 之前把 i 重置为 0，这样才能确保页面重新加载的时候，useState的渲染顺序 i 依然是从 0开始

    root.rerender();

    console.log(states);
    console.log(i);
  };

  const state = states[i];

  i++; //每次执行完 useState，i+1

  return [state, setState];
};
