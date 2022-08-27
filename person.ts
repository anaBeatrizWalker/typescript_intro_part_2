export class Person {
  firtsname: string;
  middlename: string;
  lastname: string;
  age: number;
  emails: string[];

  constructor(
    firstname: string,
    middlename: string,
    lastname: string,
    age: number,
    emails: string[]
  ) {
    this.firtsname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.age = age;
    this.emails = emails;
  }
  getFullName() {
    return (
      'Full Name: ' +
      this.firtsname +
      ' ' +
      this.middlename +
      ' ' +
      this.lastname
    );
  }

  getBirthdayYear() {
    let birthdayYear: number = 2022 - this.age;
    return 'Your birthday year is: ' + birthdayYear;
  }

  getInfos() {
    return (
      'Name: ' +
      this.firtsname +
      '</br>' +
      'Middlename: ' +
      this.middlename +
      '</br>' +
      'Lastname: ' +
      this.lastname +
      '</br>' +
      'Age: ' +
      this.age +
      '</br>' +
      'Emails: ' +
      this.emails
    );
  }
}
