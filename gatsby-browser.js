/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import providerStore from './provider-store'

require('prismjs/themes/prism-okaidia.css')
// require('prismjs/plugins/line-numbers/prism-line-numbers.css')
require('prismjs/plugins/command-line/prism-command-line.css')

export const wrapRootElement = providerStore