function charCount(str) {
  const obj = {};
  for (const i of str) {
    const cha = i;
    // if (!obj[cha]) {
    //   obj[cha] = 0;
    // }
    // obj[cha]++;

    obj[cha] = (obj[cha] || 0) + 1;
  }
  return obj;
}

console.log(charCount("shubham sanap"));
