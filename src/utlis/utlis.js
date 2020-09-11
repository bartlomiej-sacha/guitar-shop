export const calculateDiscount = (num, num2) => {
    return Math.floor(100 - (num / num2) * 100);
}