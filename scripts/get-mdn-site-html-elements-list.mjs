import { Octokit } from 'octokit'
import fs from 'fs'

const octokit = new Octokit({})

const result = await octokit.request(
  'GET /repos/{owner}/{repo}/contents/{path}',
  {
    owner: 'mdn',
    repo: 'content',
    path: 'files/en-us/web/html/element',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }
)

let data = ''
for (const sub of result.data) {
  if (sub.type === 'dir' && sub.name !== 'games')
    console.log(`    - <${sub.name}>`)
  data = data.concat(`    - <${sub.name}>\n`)
}
fs.appendFile('./pages/html.org', data, (err) => {
  return true
})
// Donot run this file again!
