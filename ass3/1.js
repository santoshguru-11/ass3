const n= parseInt(prompt('Enter a positive integer: '));
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += i;
  }
  string += "\n";
}
console.log(string);