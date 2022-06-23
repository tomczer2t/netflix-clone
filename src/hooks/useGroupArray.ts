export const useGroupArray = () => {
  return function (items: any[], groupSize: number) {
    const arrayWithGroup = [];
    for (let i = 0; i < items.length; i += groupSize) {
      const group = items.slice(i, i + groupSize);
      arrayWithGroup.push(group);
    }
    return arrayWithGroup;
  }
}