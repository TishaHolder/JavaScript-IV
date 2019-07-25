// CODE here for your Lambda Classes

/*
====================Person===================================
First we need a Person class. This will be our base-class
Person receives name age location all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own 
props
*/
class Person {
    constructor (personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;

    }

    speak() {
        console.log(`Hello my name is ${this.name}. I am from ${this.location}`);
    }

}//end class Person

/*
Instructor
Instructor uses the same attributes that have been set up by Person
Instructor has the following unique props:
specialty what the Instructor is good at i.e. 'redux'
favLanguage i.e. 'JavaScript, Python, Elm etc.'
catchPhrase i.e. Don't forget the homies
Instructor has the following methods:
demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

*/

class Instructor extends Person {
    constructor (instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;        
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log (`${this.name} says: ${student.name} receives a perfect score on ${subject}`);
    }

    calculateGrade(student) {
        let points = Math.ceil(Math.random() * 10);
        
        if (student.grade < 70) {
            student.grade += points;
            console.log(`${student.name} received ${points} extra points.  ${student.name}'s grade is now ${student.grade}`);
        } else {
            student.grade -= points;
            console.log(`${student.name} lost ${points} points.  ${student.name}'s grade is now ${student.grade}`);
        }
    }


}//end class Instructor

/*
Student
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e. what the Student used to do before Lambda School
className i.e. CS132
favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

*/

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    listSubjects() {
        console.log(`${this.name}'s favorite subjects are:`)
        this.favSubjects.forEach( function (favoriteSubject) {
            console.log(favoriteSubject);
        });
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a pull request for ${subject}`);
        
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    graduate(instructor) {
        if(this.grade > 70) {
            console.log(`Congratulations ${this.name} on successfully completing the program with ${this.grade}%!`);
        }
        else {
            console.log(`I am sorry ${this.name} but you haven't met the graduation requirements. Keep working hard!`)
            instructor.calculateGrade(this);
        }
    }

}//end class Student

/*
Project Manager
ProjectManagers are extensions of Instructors
ProjectManagers have the following unique props:
gradClassName: i.e. CS1
favInstructor: i.e. Sean
ProjectManagers have the following Methods:
standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}*/

class ProjectManager extends Instructor{
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;     

    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel its standup time!`);

    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);

    }

}//end class ProjectManager


//=========================OBJECTS===================================
const instructorOne = new Instructor({
    name: 'Fred-Instructor',
    location: 'Instructorville',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const instructorTwo = new Instructor({
    name: 'Jack-Instructor',
    location: 'Whoo Ville',
    age: 26,
    favLanguage: 'Python',
    specialty: 'UX',
    catchPhrase: `Who let the Dogs Out`
  });

  const studentOne = new Student({
    name: 'Aspen-Student',
    location: 'CT',
    age: 18,
    previousBackground: 'Teacher',
    className: 'CS132',
    favSubjects: [
        'HTML',
        'CSS'
    ],
    grade: 50
    
  });

  const studentTwo = new Student({
    name: 'CoCo-Student',
    location: 'MA',
    age: 28,
    previousBackground: 'Dancer',
    className: 'Web18',
    favSubjects: [
        'JavaScript',
        'Java'
    ],
    grade: 100
    
  });

  const projectManagerOne = new ProjectManager({
    name: 'Polly-Project Manager',
    location: 'WI',
    age: 31,
    favLanguage: 'C++',
    specialty: 'Design',
    catchPhrase: `You can do it!`,
    gradClassName: 'Web22',
    favInstructor: 'Brit'
    
  });

  const projectManagerTwo = new ProjectManager({
    name: 'Ezra-Project Manager',
    location: 'NY',
    age: 40,
    favLanguage: 'Java',
    specialty: 'Data Science',
    catchPhrase: `Don't Give Up!`,
    gradClassName: 'Web8',
    favInstructor: 'Josh'
    
  });

  //===================================Testing================================
  //Person Class Method
  instructorOne.speak();
  instructorTwo.speak();
  studentOne.speak();
  studentTwo.speak();
  projectManagerOne.speak();
  projectManagerTwo.speak();

  console.log("**************************************************************************************");

  //Instructor Class Methods
  instructorOne.demo('JavaScript');
  instructorTwo.demo('Data Science');
  instructorOne.grade(studentOne, 'HTML');
  instructorTwo.grade(studentTwo, 'CSS');

  console.log("**************************************************************************************");

  //Student Class Methods
  studentOne.listSubjects();
  studentOne.PRAssignment('Design');
  studentOne.sprintChallenge('HTML');
  studentTwo.listSubjects();
  studentTwo.PRAssignment('Data Science');
  studentTwo.sprintChallenge('Python');

  console.log("**************************************************************************************");

  //Project Manager Methods
  projectManagerOne.standUp('Channel 1');
  projectManagerTwo.standUp('Channel 2');
  projectManagerOne.debugsCode(studentOne, 'LESS');
  projectManagerTwo.debugsCode(studentTwo, 'CSS');

  console.log("**************************************************************************************");

  //STRETCH TASKS
  instructorOne.calculateGrade(studentOne);  
  projectManagerTwo.calculateGrade(studentTwo);

  console.log("**************************************************************************************");

  studentOne.graduate(instructorTwo);
  studentTwo.graduate(instructorOne);





  








