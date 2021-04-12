# GoodChat App

GoodChat is an omni-channel chat solution that enables users to donate to us using their channel of choice (e.g. WhatsApp, Telegram, Messenger, LINE, etc.).

This repository is for GoodChat App which is a hybrid app that provides a user interface that allows our staff to communicate with donors as well as generate structured transactions out of these interactions in order to integrate with our existing systems.

## Getting started

### Installation

Install dependencies using

```
npm install
```

### Running the application

```
npm run dev
```

This will start the react app as well as run graphQL code generator in the background which will watch for any code changes in `.graphql` files.

## Development Guidelines

### Code formatting

This project uses [Prettier](https://prettier.io) for code formatting.
You can either

1. download the editor extension for it and configure it to format on save or
2. run the command below which formats all files except for the ones specified in `.gitignore`

```
npm run format
```

### Testing

**Test isolation**

It is important to keep tests isolated and prevent them affecting other tests. We should be able to run tests in any order and they should still pass.

To prevent tests that write to localStorage from affecting other tests (and hence leading to non-isolated tests), there is a `localStorage.clear()` inside `setupTests.ts` that cleans up after every test.
You can put any other cleanup or setup logic here to maintain test isolation.

## Wiki

[GoodChat App Wiki](https://github.com/crossroads/app.goodchat.hk/wiki)

## Built With

[Ionic React](https://ionicframework.com/docs/react)
