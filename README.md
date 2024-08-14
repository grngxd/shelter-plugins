# [Your name here]'s shelter plugins
If you're reading this you should either change this README,
or you should run `npx degit uwu/shelter-template shelter-plugins`!

## Getting started
You should be using [pnpm](https://pnpm.io/) with this template ideally.

To install the dependencies and debug `hello-world` run:
```sh
pnpm i 
pnpm lune dev plugins/hello-world
```

Ensure that Lune Dev Mode is enabled in Discord so that lune can connect to it.

Now you can start debugging. The plugin will automatically reload after every change.

## Installing
To then install your finished plugin in shelter you can either rely on GitHub pages and it's workflow or you can build and host them here temporarily.

### Building locally
To build and host your plugins locally run:
```sh
pnpm lune ci
npx http-server dist/ --cors
```
Then you can install your plugin in shelter with this URL `http://localhost:8080/hello-world`.

### Publishing via GitHub
If you have published this repo on GitHub the plugins will be built after every commit.

For the GitHub action to run flawlessly, make sure you have the following setting enabled:
`Repo settings > Actions > General > Workflow permissions > Read and write permissions`

And for it to be hosted correctly you need to configure the `gh-pages` branch after its been created by the GitHub action. You can do this in `Repo settings > Pages > Branch`.

If this worked, you will be able to install the plugin via `https://<username>.github.io/<repo>/hello-world`.
