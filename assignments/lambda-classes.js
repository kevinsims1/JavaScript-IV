// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.location = attributes.location;
        this.name = attributes.name;
        this.age = attributes.age;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  };
}

class Instructor extends Person { 
    constructor(InstructorAtrrs) {
        super(InstructorAtrrs);
        this.specialty = InstructorAtrrs.specialty;
        this.favLanguage = InstructorAtrrs.favLanguage;
        this.catchPhrase = InstructorAtrrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`
  };
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

class student extends Person {
    constructor(StudentAtrrs) {
        super(StudentAtrrs);
        this.previousBackground = StudentAtrrs.previousBackground;
        this.className = StudentAtrrs.className;
        this.favsubjects = StudentAtrrs.favsubjects;
    }
    listssubjects() {
        return this.favsubjects;
    }
    PRAssignment(subject) {
        return`${this.name} has submitted a PR for ${subject}`
    }
    SpringChallenge(subject) {
        return `${student.name} has begun spring challenge on ${subject}`
    }
}

class ProjectManager extends Person {
    constructor({gradClassName,favInstructor,favLanguage,specialty,catchPhrase}) {
        super({gradClassName,favInstructor,favLanguage,specialty,catchPhrase});
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

     standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

     debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

 const ned = new Instructor({
    name: "Ned",
    location: "Philadelphia",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    specialty: "Front-end",
    catchPhrase: `Sup`
});

 const steve = new Instructor({
    name: "Steve",
    location: "San Diego",
    age: 38,
    gender: "male",
    favLanguage: "Ruby",
    specialty: "Fullstack",
    catchPhrase: `Yo`
});

 const john = new student({
    name: "John",
    location: "San Diego",
    age: 28,
    gender: "male",
    favsubjects: ["Javascript", "C++"],
    grade: 100
});

 const jen = new student({
    name: "Jen",
    location: "San Diego",
    age: 48,
    gender: "female",
    favsubjects: ["Ruby", "Python"],
    grade: 100
});

 const shawn = new ProjectManager({
    name: "Shawn",
    location: "Toledo",
    age: 58,
    gender: "male",
    gradClassName: "CS1"
});

 const tina = new ProjectManager({
    name: "Tina",
    location: "Scranton",
    age: 30,
    gender: "female",
    gradClassName: "CS2"
});


console.log(tina.speak());
console.log(jen.listssubjects());
console.log(shawn.gender);
console.log(tina.debugsCode(jen, "Javascript"));
console.log(shawn.standUp("FSW14"));
console.log(ned.demo("React"));
console.log(ned.grade(jen, "CSS"));
console.log(shawn.speak());
console.log(john.PRAssignment("Responsive Design"));
console.log(steve.catchPhrase);








