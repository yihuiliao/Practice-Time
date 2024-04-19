const core = require('@actions/core');
const github = require('@actions/github');

run();
async function run() {
  const title = github.context.payload.pull_request?.title;

  core.info(
    `🔎 Checking if the title of this PR "${title}" meets the requirements ...`
  );

  if ((/update/i).test(title)) {
    core.info('All good');
  } else {
    core.setFailed(core.error);
  }
}