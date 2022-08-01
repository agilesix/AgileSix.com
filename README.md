# Agile6.com

This project uses [nvm](https://github.com/nvm-sh/nvm) to manage a compatible node version for local and remote environments. Before setting up locally, make sure you have nvm installed and use the correct version of node. To see the expected version of node, please view the `.nvmrc` file at project root.

```
// install requried version (if not already installed)
nvm install

// use requiried version (if already installed)
nvm use
```

This site uses Gatsby to compile. To get up and running:

```
yarn install
```

To develop locally:

```
gatsby develop
```

You may need to install gatsby globally. This can be done with:

```
npm install -g gatsby-cli
```

For deployments, you can run:

```
yarn run deploy:github
```
