// const App = () =>
//   React.createElement(
//     'div',
//     null,
//     React.createElement('p', null, 'Hello World'),
//     React.createElement(LikeButton) //use LikeButton component
//   );

// re-write above component with plain javascript
// let message = 'Hello World';

const App = () => {
  //mimic of useState() - abstract this as useState function
  // const setMessage = (value) => {
  //   message = value;

  //   root.rerender();
  // };

  // const [message, setMessage] = useState('message', 'Hello World');
  const [message, setMessage] = useState('Hello World');  // index 0 次渲染 useState 函数

  const div = document.createElement('div');
  const p = document.createElement('p');

  p.append(document.createTextNode('Hello World!'));

  console.log('render App function');

  const input = document.createElement('input');
  input.value = message;
  input.onchange = (e) => setMessage(e.target.value);

  div.append(p);
  div.append(input);
  div.append(LikeButton()); //利用 LikeButton() 会优先执行的特性，每次App()重新执行的时候，LikeButton 不会每次都重新执行，这样 LikeButton 里的 count 就不会重置

  return div;
};
