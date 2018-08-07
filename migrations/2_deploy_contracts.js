var TejaToken = artifacts.require("./TejaToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TejaToken);
};
