/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T, U>(objA: T extends object, objB: U extends object): T & U {
  return { ...objA, ...objB };
}

export {};
