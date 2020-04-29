export const truncateString = (str, count, replacement) => {
    return str.length > count ? str.substring(0, count) + replacement : str;
};
