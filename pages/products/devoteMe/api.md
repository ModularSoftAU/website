---
title: API
description: TODO
sidebar_label: API
sidebar_position: 1
---

:::warning

Please be aware this application is in Beta

:::

The DevoteMe API is required for all of the modules to work as the modules talk to the API to get their information for all of the DevoteMe suite features.

:::note

Have an issue to report or need assistance with the API? Jump over to our [Discord](https://discord.gg/YRpakuYhJZ) and ask in our `#devoteme` forum channel.

:::

## Requirements
- NodeJS

## Installation
- Download our API from [here](/docs/products/devoteMe/#api).
- Open a new terminal window and run `npm i` to install all packages.
- Configure the [.env](#enviroment-variables) using the table below.
- Use `npm start` to start the API.

## Configuration

### Enviroment Variables
| Variable | Description                         | Default |
| -------- | ----------------------------------- | ------- |
| PORT     | The port for the API to operate on. | 8080    |