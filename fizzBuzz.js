var output = [];
var count = 1;

function fizzBuzz(){
  if (count % 2 === 0 && count % 5 === 0){
    output.push("FizzBuzz");
  } else if (count % 2 === 0){
    output.push("Fizz");
  } else if (count % 5 === 0){
    output.push("Buzz")
  }

count++;
}
