- [Home](/README)

- [Contributing](/contributing.md)

- Proxy

  - [Installation](/proxy/installation.md)
  - [Configuration](/proxy/configuration.md)

- Website Suite

  - [Installation](/websiteSuite/installation.md)
  - [Configuration](/websiteSuite/configuration.md)

- API Endpoints

  - Alerts

    - [Create an alert](api/alert/create)
    - [Edit an alert](api/alert/edit)
    - [Delete an alert](api/alert/delete)

  - Anticheat

    - [Flag a user](api/anticheat/flag)

  - Appeals

    - [Appeal a punishment](api/appeal/create)
    - [Get appeal comments](api/appeal/$punishmentId/get)
    - [Add comment to appeal](api/appeal/comment)
    - [Accept appeal](api/appeal/accept)
    - [Deny appeal](api/appeal/deny)
    - [Escalate appeal](api/appeal/escalate)
    - [De-escalate appeal](api/appeal/deescalate)

  - Applications

    - [Get all applications](api/application/get)
    - [Generate an application form](api/application/create)
    - [Edit an application form](api/application/edit)
    - [Delete an existing application](api/application/delete)

  - Community Creations

    - [Get all community creations](api/communitycreation/get)
    - [Submit a creation](api/communitycreation/submit)
    - [Approve a creation submission](api/communitycreation/approve)
    - [Delete a submitted creation](api/communitycreation/delete)

  - Discord

    - [Log user's server switch](api/discord/switch)
    - [Log user's public chat](api/discord/chat)
    - [Log user joining network](api/discord/join)
    - [Log user leaving network](api/discord/leave)
    - [Log user's direct message](api/discord/directMessage)

  - Events

    - [Get all current events](api/event/get)
    - [Create an event](api/event/create)
    - [Edit an event](api/event/edit)
    - [Delete an event](api/event/delete)
    - [Publish an event](api/event/publish)

  - Friends

    - [Send a friend request](api/friend/request)
    - [Accept a friend request](api/friend/accept)
    - [Deny a friend request](api/friend/deny)
    - [Remove a friend](api/friend/remove)
    - [Block a user](api/friend/block)

  - Knowledge Base

    - [Create a knowledgebase section](api/knowledgebase/section/create)
    - [Update a knowledgebase section](api/knowledgebase/section/update)
    - [Delete a knowledgebase section](api/knowledgebase/section/delete)
    - [Get all knowledgebase sections](api/knowledgebase/section/get)
    - [Get all knowledgebase articles](api/knowledgebase/article/get)
    - [Create a knowledgebase article](api/knowledgebase/article/create)
    - [Update a knowledgebase article](api/knowledgebase/article/update)
    - [Delete a knowledgebase article](api/knowledgebase/article/delete)

  - Punishments

    - [Issue a punishment](api/punishment/issue)
    - [Delete a punishment](api/punishment/delete)
    - [Get a user's punishments](api/punishment/user)
    - [Get the latest punishments](api/punishment/latest)

  - Ranks

    - [Get all current ranks](api/rank/get)
    - [Get applied ranks information](api/rank/user)
    - [Create a rank](api/rank/create)
    - [Edit a rank](api/rank/edit)
    - [Delete a rank](api/rank/delete)
    - [Assign user a rank](api/rank/assign)
    - [Unassign user a rank](api/rank/unassign)

  - User Reports

    - [Get all reports](api/report/get)
    - [Get all reports from user](api/report/get/$username)
    - [Report a player](api/report/create)
    - [Close a report](api/report/close)

  - Minecraft Servers

    - [Get server list](api/server/get)
    - [Create a server](api/server/create)
    - [Edit a server](api/server/edit)
    - [Delete a server](api/server/delete)

  - Sessions

    - [Create a session](api/session/create)
    - [Destroy a session](api/session/destroy)
    - [Update session for server switch](api/session/switch)

  - Shopping District Directory

    - [Get all shops](api/shoppingdistrictdirectory/get)
    - [Create a shop](api/shoppingdistrictdirectory/create)
    - [Edit a shop](api/shoppingdistrictdirectory/edit)
    - [Delete a shop](api/shoppingdistrictdirectory/delete)
    - [Add an item to a shop](api/shoppingdistrictdirectory/$shopId/create/item)
    - [Edit an item in a shop](api/shoppingdistrictdirectory/$shopId/edit/item)
    - [Edit an item in a shop](api/shoppingdistrictdirectory/$shopId/delete/item)

  - Users

    - [Create a new user](api/user/create)
    - [Update user's cover art](api/user/profile/$username/about/coverArt)
    - [Update user's about page](api/user/profile/$username/about/update)
    - [Link with Twitter](api/user/profile/$username/authenticate/twitter)
    - [Link with Twitch](api/user/profile/$username/authenticate/twitch)
    - [Link with Youtube](api/user/profile/$username/authenticate/youtube)
    - [Link with Instagram](api/user/profile/$username/authenticate/instagram)
    - [Link with Steam](api/user/profile/$username/authenticate/steam)
    - [Link with GitHub](api/user/profile/$username/authenticate/github)
    - [Link with Spotify](api/user/profile/$username/authenticate/spotify)
    - [Link with Discord](api/user/profile/$username/authenticate/discord)
    - [Create an alert for a user](api/user/alert/create)
    - [Delete an alert for a user](api/user/alert/delete)

  - Voting

    - [Cast a vote](api/vote/cast)
    - [Get monthly votes](api/vote/get)

  - Website

    - [Website user login](api/web/login)
    - [Register a new user](api/web/register/create)
    - [Verify a registration](api/web/register/verify)
    - [User forgot their password](api/web/forgot)

