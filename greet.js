//pure function
export function greet(name = "stranger") {
  if (name === "Ernst") {
    return "Hello coach!";
  }
  //without side effects
  return `Hello ${name}!`;
}