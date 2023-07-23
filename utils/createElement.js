const createElement = (tag, attribute, ...children) => {
  const element = document.createElement(tag);

  Object.keys(attribute).forEach((key) => (element[key] = attribute[key]));

  children.forEach((child) => element.append(child));
};
