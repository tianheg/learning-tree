import { useRouter } from 'next/router'
import gitUrlParse from 'git-url-parse'

function useGitEditUrl(filePath = '') {
  const repo = gitUrlParse(
    'https://github.com/tianheg/learning-tree/edit/main/' || ''
  )
  if (!repo) throw new Error('Invalid `GitHub` URL!')
  return `${repo.href}/${filePath}`
}

function GetFilePath() {
  const router = useRouter()
  if (router.pathname === '/') {
    return 'pages' + '/index' + '.org'
  } else {
    return 'pages' + router.pathname + '.org'
  }
}

export default function EditLink() {
  const editUrl = useGitEditUrl(GetFilePath())
  if (!editUrl) {
    return null
  }
  return (
    <a className="edit-link" href={editUrl}>
      Edit
    </a>
  )
}
