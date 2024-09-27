export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ?? '';
};

export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};