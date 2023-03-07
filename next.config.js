/** @type {import('next').NextConfig} */

const codeHighlight = require('@orgajs/reorg-shiki').default
const path = require('path')
const withOrga = require('@orgajs/next').default({
  defaultLayout: require.resolve('./components/Layout.tsx'),
  reorgPlugins: [
    [
      codeHighlight,
      {
        langs: [
          {
            id: 'org',
            scopeName: 'source.org',
            path: path.resolve(__dirname, 'org.tmLanguage.json')
          }
        ]
      }
    ]
  ],
  estree: {}
})

module.exports = withOrga({
  pageExtensions: ['js', 'jsx', 'tsx', 'org'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})