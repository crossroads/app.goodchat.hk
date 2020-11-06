fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## web
### web beta
```
fastlane web beta
```
Release web staging
### web release
```
fastlane web release
```
Release web prod

----

## Android
### android clean
```
fastlane android clean
```

### android staging
```
fastlane android staging
```

### android release
```
fastlane android release
```


----

## iOS
### ios install_pods
```
fastlane ios install_pods
```
Install pod dependencies
### ios prepare_build
```
fastlane ios prepare_build
```
Installs dependencies required for the build
### ios beta
```
fastlane ios beta
```
Push a new beta build to TestFlight
### ios release
```
fastlane ios release
```
Push a new release build to the App Store

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
