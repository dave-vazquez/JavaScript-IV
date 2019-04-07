class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    randomlyGrade(student) {
        
        if(!student.graduated) {
        
            let points = Math.floor(Math.random() * 30) + 1; 

            points *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
            
            student.grade += points;

            if(student.grade < 0) {
                student.grade = 0;
            }
            else if(student.grade > 100){
                student.grade = 100;
            }

            console.log(`${this.name} applied ${points} to ${student.name}'s grade.`);
            console.log(`What a ${points <= 0 ? 'jerk...' : 'totally awesome instructor!'}`);
            console.log(`${student.name}'s grade is now ${student.grade}`);
            console.log(`${student.name} is ${student.grade <= 70 ? 'sad...' : 'elated!'}\n\n`);
        }

    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = props.grade;
        this.graduated = props.graduated;
    }

    listSubjects() {
        this.favSubjects.forEach((subject) => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }

    graduate() {
        if(!this.graduated) {
            if(this.grade > 70) {
                console.log(`Graduated: ${this.name} HAS GRADUATED!!!`);
                this.graduated = true;
            }
            else
                console.log(`Graduated: ${this.name} still has some ways to go.`);
        }
        else {
            console.log(`${this.name} already graduated...`)
        }
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const cam = new Instructor({
    name: 'Cam',
    location: 'Utah',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `catchphrase` // does cam have a catchphrase?? i don't know...
});

// my first cs professor, I never would have pursued software
// engineering if it wasn't for her, forever in debt to her
const darcy = new Instructor({
    name: 'Darcy',
    location: 'New York',
    age: 47,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Java',
    catchPhrase: `catchphrase` // sorry, she never really had one
});

const dave = new Student({
    name: 'Dave',
    location: 'New York',
    age: 31,
    gender: 'male',
    previousBackground: 'CS Student/Purchasing Agent',
    className: 'WEBPT5',
    favSubjects: [
        'Software Engineering',
        'Javascript',
        'Java',
        'English',
        'Mathematics'
    ],
    grade: 1,
    graduated: false
});

// my brother (not actually in lambda school, he recently graduated from CodeSmith)
const ryan = new Student({
    name: 'Ryan',
    location: 'New York',
    age: 35,
    gender: 'male',
    previousBackground: 'Punk Rock historian/connoisseur',
    className: 'WEBPT5',
    favSubjects: [
        'Music History',
        'Software Engineering',
        'Javascript',
        'React',
        'Politics'
    ],
    grade: 1,
    graduated: false
});

const ron = new ProjectManager({
    name: 'Ron',
    location: 'California',
    age: 30, // no idea how old you are
    gender: 'male',
    previousBackground: 'Multi-Linguist',
    className: 'WEBPT5',
    favSubjects: [
        'Software Engineering',
        'Japanese',
        'React'
    ],
    catchphrase: 'catchphrase', 
    gradClassName: 'WEB12',
    favInstructor: 'Cam'
});

// made up person
const penelope = new ProjectManager({
    name: 'Penelope',
    location: 'New York',
    age: 28,
    gender: 'female',
    previousBackground: 'Bar Tender',
    className: 'WEBPT5',
    favSubjects: [
        'Software Engineering',
        'Mixology'
    ],
    catchphrase: 'blah blah', // ehh... not feeling creative today
    gradClassName: 'WEB13',
    favInstructor: 'Josh'
});

/****************************************************************
*                             MVP                               *
*****************************************************************/ 
logHeader('MVP'); 

console.log('cam.speak();');
cam.speak();

console.log('\ndarcy.speak();');
darcy.speak();

console.log('\ncam.demo(\'Preprocessing\');');
cam.demo('Preprocessing');

console.log('\ndarcy.demo(\'Java\');');
darcy.demo('Java');

console.log('\ncam.grade(ryan, \'Javascript\');');
cam.grade(ryan, 'Javascript');

console.log('\ndarcy.grade(dave, \'Java\');');
darcy.grade(dave, 'Java');

console.log('\nDave\'s Favorite Subjects:');
dave.listSubjects();

console.log('\nryan.listSubjects();');
ryan.listSubjects();

console.log('\ndave.listSubjects();');
dave.listSubjects();

console.log('\ndave.PRAssignment(\'Prototypal Inheritance\');');
dave.PRAssignment('Prototypal Inheritance');

console.log('\nryan.PRAssignment(\'React Life-Cycle\');');
ryan.PRAssignment('React Life-Cycle');

console.log('\ndave.sprintChallenge((\'ES6 Classes\');');
dave.sprintChallenge('ES6 Classes');

console.log('\nryan.sprintChallenge((\'Array Methods\');');
ryan.sprintChallenge('Array Methods');

console.log('\nron.standUp(\'#webpt5_ronald\');');
ron.standUp('#webpt5_ronald');

console.log('\nron.standUp(\'#webpt5_penelope\');');
penelope.standUp('#webpt5_penelope');

console.log('\nron.debugsCode(dave, \'Javascript-4\');');
ron.debugsCode(dave, 'Javascript-4');

console.log('\npenelope.debugsCode(ryan, \'Javascript-3\');');
penelope.debugsCode(ryan, 'Javascript-3');

/****************************************************************
*                          STRETCH                              *
*****************************************************************/ 
logHeader('STRETCH'); 

let sprintWeek = 0;
let sprint = setInterval(() => {
    
    console.log(`Sprint Week: ${++sprintWeek}\n\n`);
    
    ron.randomlyGrade(dave);
    cam.randomlyGrade(ryan);

    ryan.graduate();
    dave.graduate();

    console.log('\n*****************************************************\n\n');

    if(dave.graduated && ryan.graduated) {
        console.log(`\n\n${dave.name} and ${ryan.name} both graduated!!!\n\n`)
        clearInterval(sprint);
    }

}, 2000);



/*********************************************************************************
*                                   Log Header                                   *
**********************************************************************************/ 
function logHeader(messageHeader) {

    (function assembleMessageHeader() {
        let top    = '\n/*********************************************************************************\n';
        let middle = `*                                                                                *\n`;
        let bottom = `**********************************************************************************/\n`;

        let messageStart = (middle.length/2) - (messageHeader.length/2)
        let messageEnd = (middle.length/2) + (messageHeader.length/2);
      
        middle = middle.slice(0,messageStart) + messageHeader + middle.slice(messageEnd, middle.length);

        messageHeader = top + middle + bottom;
    })();
    
    console.log(messageHeader);
}









