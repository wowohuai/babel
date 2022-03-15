const timeResolve = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

timeResolve(2000).then(() => {
  console.log("1331");
});

class People {
  constructor(name, age) {
    this.name = name;
    this.age = 18;
  }
}

console.log(new People("wowoshuai", 30).age);

console.log([1, 2, [3, 4, [5, 6]]].flat());
