// ### **Union & Intersection Types in TypeScript**  
// - **Union Types** allow a value to be of multiple types.  
// - **Intersection Types** combine multiple types into one, 
// requiring a value to satisfy all types simultaneously.

// #### **Union Type Example**  
// A variable can be either `string` or `number`:  
// ```typescript
// function printId(id: string | number) {
//   console.log(`Your ID is: ${id}`);
// }

// printId(101);        // Valid
// printId("A123");     // Valid
// ```

// ---

// #### **Intersection Type Example**  
// A variable must satisfy both `Person` and `Employee` types:  
// ```typescript
// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }

// type Worker = Person & Employee;

// const worker: Worker = {
//   name: "John Doe",
//   age: 30,
//   employeeId: 101,
//   department: "Engineering",
// };
// ```

// In this example, the `worker` object must fulfill all properties 
// from both `Person` and `Employee`.