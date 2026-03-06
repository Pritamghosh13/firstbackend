require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const datagithub = {
  "login": "Pritamghosh13",
  "id": 214127777,
  "node_id": "U_kgDODMNUoQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/214127777?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Pritamghosh13",
  "html_url": "https://github.com/Pritamghosh13",
  "followers_url": "https://api.github.com/users/Pritamghosh13/followers",
  "following_url": "https://api.github.com/users/Pritamghosh13/following{/other_user}",
  "gists_url": "https://api.github.com/users/Pritamghosh13/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Pritamghosh13/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Pritamghosh13/subscriptions",
  "organizations_url": "https://api.github.com/users/Pritamghosh13/orgs",
  "repos_url": "https://api.github.com/users/Pritamghosh13/repos",
  "events_url": "https://api.github.com/users/Pritamghosh13/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Pritamghosh13/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pritam Ghosh",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "🌱 I’m currently learning C++ and JavaScript.\r\n💻 Passionate about building a strong foundation in software development.",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-05-30T13:03:51Z",
  "updated_at": "2026-01-24T21:44:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('pritamghosh')
})

app.get('/login', (req, res) => {
    res.send('<h1>This is my first JS backend</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Hello</h2>")
})

app.get('/github', (req, res) => {
  res.json(datagithub)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
