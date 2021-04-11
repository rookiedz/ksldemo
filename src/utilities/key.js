function genKey(pre) {
  return `${pre}_${new Date().getTime()}`;
}
export { genKey };
