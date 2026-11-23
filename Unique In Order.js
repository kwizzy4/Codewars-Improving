var uniqueInOrder = function(iterable){
  return [...iterable].filter((item, index, arr) => {
    return item !== arr[index - 1];
  });
};
