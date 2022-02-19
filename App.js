import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import OpenLogin, { LoginProvider, Network } from "openlogin-expo-sdk";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import { URL } from "react-native-url-polyfill";

const scheme = "openloginexposdkexampleexpo";

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo ||
  Constants.appOwnership == AppOwnership.Guest
    ? new URL(Linking.createURL("openlogin", {}))
    : new URL(Linking.createURL("openlogin", { scheme: scheme }));

export default function App() {
  const [key, setKey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const login = async () => {
    try {
      const openlogin = new OpenLogin({
        clientId:
          "BC5bANkU4-fil7C5s1uKzRfF0VGqbuaxDQiLnQ8WgF7SEA32lGegAhu7dk4dZf3Rk397blIvfWytXwsRvs9dOaQ",
        network: Network.MAINNET,
      });
      const state = await openlogin.login({
        loginProvider: LoginProvider.GOOGLE,
        redirectUrl: resolvedRedirectUrl,
      });
      setKey(state.privKey || "no key");
    } catch (e) {
      console.error(e);
      setErrorMsg(String(e));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Key: {key}</Text>
      <Text style={styles.text}>Error: {errorMsg}</Text>
      <Text style={styles.text}>Linking URL: {resolvedRedirectUrl.href}</Text>
      <Text style={styles.text}>appOwnership: {Constants.appOwnership}</Text>
      <Text style={styles.text}>executionEnvironment: {Constants.executionEnvironment}</Text>
      <Button title="Login with OpenLogin" onPress={login} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  text: {
    color: "black"
  }
});