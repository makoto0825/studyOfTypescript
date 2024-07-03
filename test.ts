// generic interface
interface Interface1 {
  value1: string;
  value2: string;
}

interface Interface2 {
  value1: number;
  value2: number;
}

// const test1: Interface1 = {
//   value1: "John",
//   value2: "ABC",
// };

// const test2: Interface2 = {
//   value1: 123,
//   value2: 456,
// };

// interface Interface3<T> {
//   value1: T;
//   value2: T;
// }

// const test3: Interface3<number> = {
//   value1: 123,
//   value2: 456,
// };

interface Interface4<T extends string | number> {
  value1: T;
  value2: T;
}

const test1: Interface4<string> = {
  value1: "John",
  value2: "ABC",
};

const test2: Interface4<number> = {
  value1: 123,
  value2: 456,
};

// const test3: Interface4<boolean> = {
//   value1: true,
//   value2: false,
// };//error happened

//same function
// const func2 = <T extends string|boolean>(value: T): T => {
//   return value;
// };
function func1<T extends string | boolean>(value: T): T {
  return value;
}
func1<string>("John");
func1<number>(100); //error happened
func1<boolean>(true);
