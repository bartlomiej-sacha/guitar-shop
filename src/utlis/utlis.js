export const calculateDiscount = (price, oldPrice) => {
  return Math.floor(100 - (price / oldPrice) * 100);
};
