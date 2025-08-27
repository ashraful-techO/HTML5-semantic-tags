var learnedLan = ["HTML", "CSS", "Javascript"];
var onGoingLan = ["React", ...learnedLan, "Nest", "Python"];
console.log("Spread in Javascript");
console.log(onGoingLan);


console.log("Spread in Javascript by forEach");
onGoingLan.forEach((element) => {
  console.log(element);
});

console.log("Spread in Javascript by For loop");
for (let index = 0; index < onGoingLan.length; index++) {
  const element = onGoingLan[index];

  console.log(`${index + 1} ${element}`);
}


function addThreeVar(x,y,z){
    return x+y+z;
}

var argz = [1,2,3];
console.log('Addition of three varibale x+y+z by spread: ',addThreeVar(...argz));


console.log('Rest in JavaScript');

function multiply(multiplier,...theargs){
    return theargs.map(function(element){
        return multiplier*element;
    });
}

const arr = multiply(2,1,2,3);
console.log(arr);


