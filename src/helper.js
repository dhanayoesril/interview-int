export const reverseNumber = (data) => {
  const result = Number(data.toString().split("").reverse().join("")) || null;
  return result;
};
