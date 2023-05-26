let num = 7;
let divisoes = 0;

for (let i = 1; i <= num; i++) {

  if(num % i == 0) {
    divisoes++;
  }
}

if(divisoes == 2) {
  console.log(`O numero ${num} é primo!`);
} else {
  console.log(`O numero ${num} não é primo`);
}