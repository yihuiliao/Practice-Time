const core = require('@actions/core');
const github = require('@actions/github');

run();
async function run() {
  // const title = github.context.payload.pull_request?.title;
  const title = core.getInput("pr-title")
  const number = core.getInput("pr-number")
  const token = core.getInput("repo-token")

  const octokit = github.getOctokit(token)

  core.info(
    `🔎 Checking if the title of this PR "${title}" meets the requirements ...`
  );

  if ((/^update:?|^support:?|^feat(ure)?:?|^remove:?|^add:?|^fix:?|^bump:?|^docs:?|^pre-release:?|^revert:?/i).test(title)) {
    core.info('Success');
  } 
  else {
    core.info('Sorry this failed, please read our PR naming guide to see how to correctly name your PR');
    core.setFailed();
  }

  // console.log(...github.context.repo);
  // await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
  //   ...github.context.repo,
  //   issue_number: number,
  //   body: 'Thanks',
  // })
  // await octokit.rest.issues.createComment({
  //   ...github.context.repo,
  //   issue_number: number,
  //   body: 'Thanks'
  // });
}