---
title: Installation and Configuration
description: TODO
sidebar_label: Installation and Configuration
sidebar_position: 1
---

## Requirements 
* NodeJS (minimum version `v16.17.0`)
* MySQL Database

## Requirements Notes
* You can use `node -v` in your console to check the current version you have.

# Website/API
* Download and clone the repo using `git clone https://github.com/ModularSoftAU/zander-web` in your Terminal.
* Rename your `.env.example` file to `.env` to make this active.
* Rename your `config.json.example` file to `config.json` to make this active.

## Configuring .env
We keep all of the database, session and API variables separate from the main configuration file.
Here is a table to break down what each function does:

| Value               | Description                                                                                                            | Example                                       |
|---------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| PORT                | The web port for the Web application to run on. NOTE: If you're using Heroku, this will be overridden.                 | 8080                                          |
| discordAPIKey       | The bot token for your Discord bot application                                                                         | TOKEN                                         |
| apiKey              | All of the applications connect together by this secure key. Set it and make sure you keep it secret and keep it safe. | APIKEY                                        |
| sessionCookieSecret | A passphrase with a minimum length of 32 characters used to encrypt session data for logged in users.                  | THISISNOTVERYSECRETANDITHINKYOUSHOULDCHANGEIT |
| databaseHost        | The host of where the MySQL database is hosted (via domain or IP)                                                      | database.example.com                          |
| databasePort        | The port that your MySQL database runs off                                                                             | 4052                                          |
| databaseUser        | The username for your MySQL user                                                                                       | USER                                          |
| databasePassword    | The password for your MySQL user                                                                                       | PASSWORD                                      |
| databaseName        | The name of your MySQL Database                                                                                        | DATABASE                                      |


## Configuring config.json
You can change and customise your Zander experience for your Network in the config.json file from the display name to setting your links to your Networks external platforms. Here is a table to break down what each config option does:

| Value                           | Description                                                                                                           | Example               |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------|-----------------------|
| debug                           | Toggle the debug console to troubleshoot application issues.                                                          | TRUE                  |
| siteConfiguration.siteName      | The name or branding name of the site.                                                                                | My Server             |
| siteConfiguration.siteAddress   | The address of the site (use the example in development and your branding in production)                              | http://localhost:8080 |
| siteConfiguration.tagline       | The tagline or one-liner for your Network                                                                             | The best Network      |
| siteConfiguration.email         | The main contact email used for your network                                                                          | support@example.com   |
| siteConfiguration.policy        | There are various options which all link to public markdown files that are displayed on the Legal pages.              |                       |
| siteConfiguration.platforms     | There are various options which all link to your Networks external platforms (you can toggle these in features.json). |                       |
| siteConfiguration.apiRoute      | The route you can customize and change for api root.                                                                  | /api                  |
| siteConfiguration.redirectRoute | The route you can customize and change for redirect for forms.                                                        | /redirect             |
| discord.guildId                 | The ID of your guild or Discord server.                                                                               | 899441191416901632    |
| discord.channels                | The ID of specified channels which are sent specific announcements and notifications to.                              |                       |
| discord.roles                   | The ID of specified roles which can be assigned to users.                                                             |                       |


## Features (features.json) Toggleability
You can find more about the functionality and toggling features across the Network under the [Features page](../features/features.md)

# Proxy & Auth
:::info

This module is not required if you are not aiming to have registrations on your site.

:::

Auth requires simple setup. In the `config.yml` set the `BaseAPIURL` and the unique `APIKey` and this will automatically tie into the registration system .

# Vote

# Hub