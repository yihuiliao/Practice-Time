const core = require('@actions/core');
const github = require('@actions/github');

run();
async function run() {
  // const title = github.context.payload.pull_request?.title;
  const title = core.getInput("pr-title")

  core.info(
    `🔎 Checking if the title of this PR "${title}" meets the requirements ...`
  );

  if ((/^update:?|^support:?|^feat(ure)?:?|^remove:?|^add:?|^fix:?|^bump:?|^docs:?|^pre-release:?|^revert:?/i).test(title)) {
    core.info('Success');
  } else {
    core.setFailed(core.error);
  }
}