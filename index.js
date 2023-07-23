'use strict';

const e = React.createElement;

// move to components
// const LikeButton = () => {
//   const [count, setCount] = React.useState(0);

//   return React.createElement(
//     'button',
//     { onClick: () => setCount(count + 1) },
//     `Like ${count}`
//   );
// };

// move to App.js
// const App = () =>
//   React.createElement(
//     'div',
//     null,
//     React.createElement('p', null, 'Hello World'),
//     React.createElement(LikeButton) //use LikeButton component
//   );

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// // root.render(React.createElement(LikeButton))
// root.render(React.createElement(App()));

// re-write above component with plain javascript
// render function for element rerender
const render = (target, children) => {
  //render target and its children
  target.rerender = () => {
    target.innerHTML = ''; //clear target element
    // target.append(children);
    target.append(children()); 

    console.log('rerendering function')
  };

  target.rerender();
};

const root = document.querySelector('#root');
// root.append(App())

// 这样也不行，点击button，count也不会刷新。因为 render 执行的时候，App()已经执行完毕了。
// 知识点：App()和()=>App()的区别
// render(root, App())只会在页面加载时执行App一次。后面再点击调用 render() 不会每次都重新执行 App()。原因是在render()执行之前，App()就已经执行完毕了，这时render()里的App()是一个值，而不是一个函数。等于是 App() 文件已经添加给HTML了，不会再次编译。
// 如果要让函数每次都重新执行，要使用回调函数的形式。
// render(root, App());  
render(root, () => App()); //once page load, render root element
