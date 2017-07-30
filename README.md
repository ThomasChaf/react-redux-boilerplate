# react-redux-boilerplate

react-redux-boilerplate is a fully configured boilerplate ready to scale.

This include one mobile application build with react-native and ready to be launched on ios and android.

This also include a web application build with react.

Both applications used a common part that manage the data manipulation and communicate over an api.

Here is also an example of an API.

## Build the common part

    cd common
    npm i
    npm run build


## Web app usage

The web-app require the API to be launched and the common part to be build.

    cd web-app
    npm i
    npm start


## Mobile app usage

Build the project. The mobile app require the API to be launched and the common part to be build.

    cd mobile-apps
    npm i

### Ios

On a mac environment download the last XCode version. An emulator is included in the package.

    npm run ios

### Android

Download android studio.
Find android SDK location.

    ${ANDROID_SDK_LOCATION}/emulator/emulator -avd Nexus_5X_API_26
    npm run android
