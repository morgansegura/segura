require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

teamsnap.init(process.env.TEAMSNAP_AUTH0_CLIENT_ID)
var redirect = '' // One of the redirect URLs entered when creating your application, must be same-domain
var scopes = ['read', 'write']
teamsnap.startBrowserAuth(redirect, scopes, function(err) {
  if (err) {
    alert('Error loading TeamSnap SDK')
    return
  }
  teamsnap.loadCollections(function(err) {
    teamsnap.loadTeams(onTeamsLoad)
  })
})

teamsnap.enablePersistence()
teamsnap.bulkLoad(teamId, function(err, items) {
  var team = items
    .filter(function(item) {
      return item.type == 'team'
    })
    .pop()
  console.log(team)
  console.log(team.members)
  console.log(team.events)
  console.log(team.trackedItems)
})
