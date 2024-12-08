"use strict";
// { *Type Guards* TypeScript mein aise functions hote hain 
// jo type ko narrow karte hain, yaani kisi variable ke type ko 
// specific karne ke liye conditions ka use karte hain. }
// ```typescript
// function isString(value: any): value is string {
//   return typeof value === 'string';
// }
// let data: any = "Hello";
// if (isString(data)) {
//   console.log(data.toUpperCase()); // Safe to use string methods
// }
// ```
// Yahaan, `isString` ek type guard hai jo `data` ki type ko check karta hai
//  aur agar string hai to usko narrow karta hai.
