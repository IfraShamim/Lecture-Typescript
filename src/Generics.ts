// { *Generics* TypeScript mein aise feature hote hain 
// jo aapko ek function, class, ya interface ko reusable 
// banane ki suvidha dete hain, jisme data types ko dynamically 
// specify kiya ja sakta hai. }

// ```typescript
// function identity<T>(value: T): T {
//   return value;
// }

// let num = identity(42); // T is inferred as number
// let str = identity("Hello"); // T is inferred as string
// ```

// Yahaan, `T` ek generic type hai jo function ko different types 
// ke values ke saath reusable banaata hai.