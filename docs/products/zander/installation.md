---
title: Installation
description: TODO
sidebar_label: Installation
sidebar_position: 1
---

The installation information is as below, this information has been provided in order to ensure the best experience in setting up the zander ecosystem for your Network.

## Database

* Open the `dbinit.sql` file
* Change the database name if you'd like it to display as a different name.
* Connect to your MySQL server and run the script to load the database onto your database server.

## Web/API

* Clone the Web repo.
* Install all of the required packages using `npm i`
* In the root folder, open the `.env`, `config.json`, `filter.json`, `joinMessages.json`, `features.json` and `lang.json` and fill out as per the instructions in [Configuration](./configuration.md).
* Run `npm dev` to start the application/website/api.

## Discord

* Visit Discord Developer Portal, and click New Application button, and type your application name, and then Create.
* On the left menu, click Bot, and click Add Bot button.
* Click Reset Token, and click Copy button.

Referenced from https://discordgsm.com/guide/how-to-get-a-discord-bot-token

## Proxy

* Clone the zander plugin repo.
* Compile the zander plugin suite.
* Put the zander-proxy plugin in your `plugins` folder on your Proxy.
* Launch the Proxy once, then close the Proxy.
* In the `plugins` folder, open the `config.yml` and fill out as per the instructions in [Configuration](./configuration.md)
* Launch the Proxy again to finish.

## Hub

* Put the zander-hub plugin in your `plugins` folder on your server.
* Launch the server once, then close the server.
* In the `plugins` folder, open the `config.yml` and `welcome.yml` and fill out as per the instructions in [Configuration](./configuration.md)
* Launch the server again to finish.