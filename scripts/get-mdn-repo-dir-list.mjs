import { Octokit } from 'octokit'

const octokit = new Octokit({})

const result = await octokit.request(
  'GET /repos/{owner}/{repo}/contents/{path}',
  {
    owner: 'mdn',
    repo: 'content',
    path: 'files/en-us',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }
)

for (const sub of result.data) {
  if (sub.type === 'dir' && sub.name !== 'games') console.log(sub.name)
}
