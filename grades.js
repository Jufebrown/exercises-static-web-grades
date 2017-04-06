// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?



// array with sample scores
const scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// initialize hi and lo scores
let hi = 0;
let lo = 0;

// initialize object with grades
let grades = {
	a : 0,
	b : 0,
	c : 0,
	d : 0,
	f : 0,
}

// function that increments grades based on range score falls into
const gradeCounter = (currentScore) => {
	if (currentScore <= 100 && currentScore >= 91) {
		grades.a++;
	} else if (currentScore <= 90 && currentScore >= 81) {
		grades.b++;
	} else if (currentScore <= 80 && currentScore >= 71) {
		grades.c++;
	} else if (currentScore <= 70 && currentScore >= 61) {
		grades.d++;
	} else if (currentScore <= 60) {
		grades.f++;
	}
}

// sets hi and lo scores
const hiLo = (thisScore) => {
	if (thisScore > hi) {
		hi = thisScore;
	} else if (thisScore < lo) {
		lo = thisScore;
	}
}

// loops over scores
for (var i = scores.length - 1; i >= 0; i--) {
	gradeCounter(scores[i]);
	hiLo(scores[i]);
}

// outputs results to console
console.log(grades, hi, lo);
