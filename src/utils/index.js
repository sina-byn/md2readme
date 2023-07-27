const debounce = (callback, delay = 350) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, delay);
  };
};

export { debounce };
