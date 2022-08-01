const activeParams = (param) => {
  if(param) {
    const element = document.getElementById(param);
    element.checked = true;
  }
};

const initActivedParams = () => {
  const params = new URLSearchParams(location.search);
  
  params.forEach(activeParams);
};

export default initActivedParams;