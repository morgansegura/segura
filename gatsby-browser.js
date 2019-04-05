/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const teamsnap = require('./src/lib/teamsnap.min')

exports.onClientEntry = () => {
  console.log('Start Team snap API!')
}
