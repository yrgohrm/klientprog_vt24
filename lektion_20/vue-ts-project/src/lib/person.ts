interface Person {
    name: string
    age: number
  }
  
  function sayHello(person: Person): void {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`)
  }
  
  const john: Person = {
    name: "John",
    age: 30
  }

  const lena = {
    name: "Lena",
    age: 35
  }
  
  sayHello(john)
  sayHello(lena)