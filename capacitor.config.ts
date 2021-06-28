import { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
  appId: "hk.goodcity.chat",
  appName: "app.goodchat.hk",
  webDir: "build",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
  cordova: {},
};

export = config;
