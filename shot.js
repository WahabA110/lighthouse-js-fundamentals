function chooseStations (stations) {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }

  return goodStations;
}

console.log(chooseStations(stations));

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
  const spot = [];
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === 'north') {
      x += 1;
    } else if (move === 'south') {
      x -= 1;
    } else if (move === 'east') {
      y += 1;
    } else if (move === 'west') {
      y -= 1;
    }
  } 
  spot.push(x);
  spot.push(y);
  return spot
}

console.log(finalPosition(moves))

function ageCalculator (name, yearOfBirth, currentYear) {
  const sumOfYear = currentYear - yearOfBirth;
  let bio = name + " is " + sumOfYear + " years old.";
  return bio
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));


function howManyHundreds (num) {
  let output = 0;
  for (let x = 100; x <= num; x += 100) {
    if (x % 100 === 0) {
      output += 1;
    }
  }
  return output
}

console.log(howManyHundreds(894))


function calculateRectangleArea(length, width) {
  sum = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return sum;
  }
}

function calculateTriangleArea(base, height) {
  sum = (base * height)/2;
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return sum;
  }
}

function calculateCircleArea(radius) {
  sum = Math.PI * (radius ** 2)
  if (radius < 0) {
    return undefined;
  } else {
    return sum;
  }
}