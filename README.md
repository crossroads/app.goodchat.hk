# GoodChat App
GoodChat is an omni-channel chat solution that enables users to donate to us using their channel of choice (e.g. WhatsApp, Telegram, Messenger, LINE, etc.). 

This repository is for GoodChat App which is a hybrid app that provides a user interface for our staff to communicate with donors. It also allows our staff to derive structured transactions out of these interactions in order to integrate with our existing systems.

Currently, donating items to Crossroads requires our donors to either

1. Use the GoodCity web app at [https://app.goodcity.hk/?ln=en](https://app.goodcity.hk/?ln=en) or
2. Download the GoodCity mobile app for [IOS](https://apps.apple.com/us/app/goodcity-hk/id1012253845) or [Android](https://play.google.com/store/apps/details?id=hk.goodcity.app&hl=en_US&gl=US)

Although, it has worked well thus far, it is still an additional step for the donor to take.

It would be much more convenient if the donor could instead simply use their messaging platform of choice to donate to us. This is the problem GoodChat aims to solve.

## Getting started
### Installation
Install dependencies using
```
npm install
```

## Development Guidelines
### Code formatting
This project uses [Prettier](https://prettier.io) for code formatting. 
You can either 
1. download the editor extension for it and configure it to format on save or 
2. run the command below which formats all files except for the ones specified in `.gitignore`
```
npm run format
```

## Wiki
[GoodChat App Wiki](https://github.com/crossroads/app.goodchat.hk/wiki)

## Built With
[Ionic React](https://ionicframework.com/docs/react)
