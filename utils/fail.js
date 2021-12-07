const core = require("@actions/core");

module.exports = (error) => {
  const failSilently = core.getInput("fail-silently");
  if (failSilently) {
    core.warning(error.message);
  } else {
    core.setFailed(error.message);
  }
};
