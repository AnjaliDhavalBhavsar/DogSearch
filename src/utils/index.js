export const debounce = (searchFunc, delay = 1000) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      searchFunc.apply(context, args);
    }, delay);
  };
};

export const sortStringAscendingOrder = (array, key) =>
  [...array].sort((a, b) => (a[key] > b[key] ? 1 : -1));

export const sortStringDescendingOrder = (array, key) =>
  [...array].sort((a, b) => (a[key] > b[key] ? -1 : 1));

export const sortNumberRangeAscendingOrder = (array, key) => {
  return [...array].sort((a, b) => {
    let rangeA = a[key].split(/[\s-]+/);

    let rangeB = b[key].split(/[\s-]+/);
    console.log(key, rangeA, rangeB);
    return rangeA[0] - rangeB[0] || rangeA[1] - rangeB[1];
  });
};

export const sortNumberRangeDecendingOrder = (array, key) => {
  return [...array].sort((a, b) => {
    let rangeA = a[key].split(/[\s-]+/);
    let rangeB = b[key].split(/[\s-]+/);
    console.log(key, rangeA, rangeB);
    return rangeB[0] - rangeA[0] || rangeB[1] - rangeA[1];
  });
};

export const normalizeResponse = (data) => {
  return data.map(
    ({
      id,
      name,
      height,
      life_span,
      description,
      temperament,
      breed_group,
    }) => ({
      name,
      id,
      lifespan: life_span,
      height: height.metric,
      imperial: height.imperial,
      description,
      temperament,
      group: breed_group,
    })
  );
};
