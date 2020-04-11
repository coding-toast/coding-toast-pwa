import { publish } from 'gh-pages'

publish(
  'public',
  {
    branch: 'master',
    repo: 'https://' + process.env.GIT_AUTH_TOKEN + '@github.com/QuentinGuenther/coding-toast-pwa.git'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
