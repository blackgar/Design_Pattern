const rmp = (() => {
  const a = 1;
  const b = () => 2;
  const public = {
    c: 2,
    d: () => 3,
  };
  return public;
})();
console.log(rmp);
console.log(rmp.a);
