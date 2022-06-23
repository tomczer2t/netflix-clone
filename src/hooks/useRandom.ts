export const useRandom = () => {
  return function (min?: number, max?: number) {
    if (min === undefined || max === undefined) return Math.floor(Math.random() + 1);
    return Math.floor(Math.random() * ((max + 1) - min) + min);
  };
};