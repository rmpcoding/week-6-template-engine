function Employee(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.getName = function() {
    return this.name;
  }
  this.getId = function() {
    return this.id;
  }
  this.getEmail = function() {
    return this.email;
  }
  this.getRole = function() {
    return "Employee";
  }
}




// var employee1 = new Employee("jason", 8899, "theadventureking@fakemail.com" )
// console.log(employee1.getName());

module.exports = Employee;