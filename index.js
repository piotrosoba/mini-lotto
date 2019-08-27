let numbers = []

for (let i = 1; i <= 42; i++) {
  numbers.push(i)
}

const winning = []

for (let i = 0; i < 5; i++) {
  const number = Math.floor(Math.random() * numbers.length)
  winning.push(numbers[number])
  numbers = numbers.filter((el, index) => index !== number)
}

console.log(winning)

