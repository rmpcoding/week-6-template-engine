function Intern(school) {
  this.school = "UCLA";
  this.getRole = function() {
    return "Intern";
  }
  this.getSchool = function() {
    return "UCLA";
  }
}

module.exports = Intern;