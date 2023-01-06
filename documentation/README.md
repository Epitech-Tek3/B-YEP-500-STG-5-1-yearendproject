<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://area.co">
    <img alt="area" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Epitech.png/1280px-Epitech.png" width="250" />
  </a>
</p>
<h2 align="center">
  Projet de fin d'année tek3
</h2>

[![eslint-typescript code style](https://img.shields.io/badge/code_style-eslint_typescript-5ed9c7.svg)](https://github.com/typescript-eslint/typescript-eslint)
[![node-version](https://img.shields.io/badge/node-v8.15.1-green.svg)](https://node.green/)
[![Top Language](https://img.shields.io/badge/typescript-98.1%25-blue.svg)](https://www.typescriptlang.org/docs/home.html)
[![Package manager](https://img.shields.io/badge/package%20manager-yarn-yellowgreen.svg)](https://yarnpkg.com/fr/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# A Monorepo Structure

This is the monorepo for area digital assets. It is comprised of TypeScript apps/packages and an example deployment workflow.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- https://github.com/thlorenz/doctoc -->

- [A Monorepo Structure](#a-monorepo-structure)
  - [Overview](#overview)
    - [What's inside](#whats-inside)
    - [Requirements](#requirements)
    - [Installing](#installing)
      - [Access to mongoDb](#access-to-mongodb)
    - [Development](#development)
      - [Testing](#testing)
    - [Push to area.dev and static assets management](#push-to-areadev-and-static-assets-management)
    - [Package Management](#package-management)
      - [Installing and uninstalling a module from a package](#installing-and-uninstalling-a-module-from-a-package)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Overview

The repository is powered by [Yarn Workspaces](https://yarnpkg.com/en/). Yarn is responsible for bootstrapping, installing, symlinking all of the packages/apps together.

### What's inside

This repo includes multiple packages. Here's a rundown of the folders:

- `nextjs`: Next.js + API + GraphQL serverless endpoint
- `db`: Migrations + Seeds for local development and production migrations
- `common`: Shared modules

### Requirements

- Proper [NPM Setup](https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92)
- [Yarn](https://yarnpkg.com/en/docs/install) >1.10.1
- Node 10.15.3 (can be [easily managed via n](https://github.com/tj/n))
- [Docker](https://docs.docker.com/install/)

### Installing

```bash
git clone https://github.com/EpitechPromo2024/B-YEP-500-STG-5-1-yearendproject-auguste.thomann.git
cd area
yarn
# You might need to restart your IDE to see types appear
docker-compose up -d
```

#### Access to mongoDb

- `localhost:6432`

### Development

If you're using Windows, we recommand that you use a WSL session instead of running the commands from Powsershell. Be
sure that you checkout the code on your host machine (`/mnt/c/users/<your-name>/`) and not inside WSL (`/home/ubuntu`).
Cypress, our end-to-end testing tool needs to have access to the code from the Windows side. Don't forget to install
node on your Windows machine, Cypress needs that too.

Yarn workspace allows some pretty nifty development stuff. Here's a quick rundown of stuff you can do:

- _`yarn dev:mobile`_: Runs the `yarn dev` command in every project and pipe output to the console.
- _`yarn dev:web`_: Runs the `yarn dev` command in nextjs app

Ask your teammates for the `.env` file that will go inside `packages/nextjs`.

**IMPORTANT:** Each time you want to make a new graphql query / mutation available for the client, you'll have to create te corresponding document inside `packages/nextjs/documents` and run `yarn generate`. It will make all types available inside `packages/nextjs/typings/models`

#### Testing

We need to be confident that our code works as expected, so we test it thoroughly.

We're using Jest for the unit and integration tests. Just run `yarn test` to start them.

Cypress is used for running the end-to-end (e2e) tests, and can be started by running
`cd packages/nextjs && yarn test-e2e`.

If you're on Windows, Cypress can't start from inside a WSL session: if you're on Windows, open a PowerShell session,
then run
`cd packages/nextjs` and `npx cypress open`.

### Push to area.dev and static assets management

Each PR merged into develop has to pass tests before being pushed to prod.

### Package Management

\*\*IF you run `yarn add <module>` or `npm install <module>` from inside a project folder, you will break your symlinks.\*\* To manage package modules, please refer to the following instructions:

#### Installing and uninstalling a module from a package

`yarn workspace @area/nextjs add react react-dom --dev`
`yarn workspace @area/nextjs remove some-package`
