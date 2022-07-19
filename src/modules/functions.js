function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
function max2(a, b) {
  return a > b ? a : b;
}
function min2(a, b) {
  return a > b ? b : a;
}

export { min, max, min2, max2 };
