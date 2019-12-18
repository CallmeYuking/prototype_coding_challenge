// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1999,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1999, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired'); 

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1999;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: '1999'},
        job: {value: 'designer'}
    });
*/

// Closures
/*
function retirement(retirementAge) {
    var a = ' years left untill retirement.';
    return function(yearOfBirth) {
        var age = 2020 -  yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS =  retirement(66);
retirementUS(1990);

function interviewQuestion(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(`${name}, can you please explain what UX design is?`);
        }else if (job === 'teacher') {
            console.log(`What subject do you teach, ${name}?`);
        }else {
            console.log(`${name}, what do you do?`);
        }
    }
}

interviewQuestion('teacher')('John')
*/

////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. 
A question should include:
a) question itself
b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, 
together with the possible answers (each question should have a number) 
(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).
*/

// var question, answer, number

var Question = function(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
};

var question1 = new Question("Is Tiffany the most beatiful girl in the world? (Type 'Yes' or 'No' answear the question" ,
                              ['Yes', 'No'],
                              0);

var question2 = new Question("Who is the name of Tiffany's girlfriend down blow?",
                              ['Little Erica', 'Lovely Erica', 'Dorky Erica'],
                              2);

var question3 = new Question("What does best describe Tiffany?",
                              ['Charming', 'Dorable', 'Lovely', 'All'],
                              3);        

                              