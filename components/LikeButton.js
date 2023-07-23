// const LikeButton = () => {
//   const [count, setCount] = React.useState(0);

//   return React.createElement(
//     'button',
//     { onClick: () => setCount(count + 1) },
//     `Like ${count}`
//   );
// };

// 为什么更改状态要通过 setState
// 因为直接更改状态不会触发UI更新，通过setState来触发UI更新

// re-write above component with plain javascript
// let count = 0;  // mimic useState() hook - abstract this as useState function

const LikeButton = () => {
  // useState hook with plain javascript
  //   const setCount = (value) => {  // abstract this as useState function
  //     count = value;
  //     root.rerender()
  //   };

  // const [count, setCount] = useState('count', 0);
  const [count, setCount] = useState(0);  // index 1 次渲染 useState 函数

  console.log('render Like Button Function');

  const button = document.createElement('button');
  button.onclick = () => {
    setCount(count + 1);
    console.log(count); //print correctly on each click
  };
  button.append(document.createTextNode('Like ' + count)); //this doesn't refresh，数据在页面加载时就已经固定，需要有功能来触发更新

  return button;
};
