// 프록시 객체에 대한 이해
const handler = {
  get: function (target, name) {
    return name === "name" ? `${target.a} ${target.b}` : target[name];
  },
};
const proxyObject = new Proxy({ a: "나는", b: "프록시입니다." }, handler);
console.log(proxyObject.name); // 나는 프록시입니다.

const createReactiveObject = (target, callback) => {
  const proxy = new Proxy(target, {
    set(obj, prop, current) {
      if (current !== obj[prop]) {
        const prev = obj[prop];
        obj[prop] = current;
        callback(
          `${prop}이 [${prev}]등급에서 >> [${current}]등급으로 변경되었습니다.`
        );
      }
      return true;
    },
  });
  return proxy;
};

const a = {
  등급: "B",
};

const b = createReactiveObject(a, console.log);
b.등급 = "B";
b.등급 = "A";
