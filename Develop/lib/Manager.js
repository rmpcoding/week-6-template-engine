function Manager(officeNumber) {
  this.officeNumber = 100;
  this.getRole = function() {
    return "Manager";
  }
  this.getOfficeNumber = function() {
    return 100;
  }
}

module.exports = Manager;