import { studentsData } from '../constants/arrays.js';

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName}  ${this.lastName}.`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return `${new Date().getFullYear() - Number(this.admissionYear)}`;
  }
}

class Students {
  constructor(studentsData) {
    this.students = studentsData;
  }

  sortByField(field) {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }

  getInfo() {
    this.students.sort(this.sortByField('admissionYear'));
    this.students.forEach(
      (student) =>
        `${student.firstName} ${student.lastName} ${student.courseName} ${student.admissionYear}`,
    );
    return this.students.map(
      (student) =>
        `${student.firstName} ${student.lastName} - ${student.courseName} ${
          new Date().getFullYear() - student.admissionYear
        } курс`,
    );
  }
}

let students = new Students(studentsData);
console.log(students.getInfo());
