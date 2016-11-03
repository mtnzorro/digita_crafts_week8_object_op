function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

Person.prototype.print = function(){
  console.log("Email: " + this.email);
  console.log("Phone: " + this.phone);
};

var contact = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var contact2 = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

contact2.print();
contact2.greet(contact);
