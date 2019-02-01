var Ballot= artifacts.require("./Ballot.sol");

module.exports = function(deployer) {
  deployer.deploy(Ballot,8);// number of proposals
};
