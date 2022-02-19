# Integrating the openlogin-expo-sdk with bare react native apps

1. Follow the instructions on https://github.com/expo/expo/tree/main/packages/expo-web-browser
2. Follow the instructions on https://docs.expo.dev/bare/installing-expo-modules/ to install the native modules required by Expo.
3. Install the openlogin-expo-sdk by running `npx expo install expo-web-browser`.
4. `yarn add openlogin-expo-sdk`
5. If you are using iOS, run `npx pod-install`.
6. Register the URL scheme you intended to use to Android and iOS.