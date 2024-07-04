const func1 = <T extends string>(array: T[], searchElement: T) => {
  return array.indexOf(searchElement);
};

const func2 = <T extends string>(array: T[], searchElement: NoInfer<T>) => {
  return array.indexOf(searchElement);
};

console.log(func1(["a", "b", "c"], "d"));
//   console.log(func2(["a","b","c"],"d"))// error happened. Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'
