function Engineer(github) {
  this.github = "GitHubUser";
  this.getRole = function () {
    return "Engineer";
  }
  this.getGithub = function() {
    return "GitHubUser";
  }
}

module.exports = Engineer;