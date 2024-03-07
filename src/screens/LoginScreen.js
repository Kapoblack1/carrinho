import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
    console.log("Login Pressed", { email, password });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.logoContaier}>
        <View style={styles.logo}></View>
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="cleusiaast@gmail.com"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={setEmail}
          style={styles.inputField}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputFieldContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="***************"
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={setPassword}
          style={styles.inputField}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => console.log("Forgot Password Pressed")}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Esqueceu a password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
  },
  contentContainer: {
    flexGrow: 0.6,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  headerContainer: {
    marginBottom: 50,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "500", // fontWeight 700 is equivalent to 'bold'
  },
  inputFieldContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: "400", // Slightly less bold than the header text
    color: "#000000",
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: "#FFF", // White background
    borderWidth: 1,
    borderColor: "#D6D7DA", // Light grey border
    borderRadius: 40,
    padding: 15,
    marginBottom: 18,
    fontSize: 16,
    height: 58
  },
  forgotPassword: {

    alignSelf: "flex-end", // Aligns the Forgot Password to the right
  },
  forgotPasswordText: {
    color: "#704F38", // Brown color for the 'Forgot Password?' text
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#704F38", // Brown color for the login button
    borderRadius: 35,
    height: 65,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonContainer:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: "#FFFFFF", // White color for the button text
    fontSize: 18,
    fontWeight: "700",
  },
  logo: {
    height: 100,
    width: 100,
    backgroundColor: "#E8E8E8",
  },
  logoContaier: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
});

export default LoginScreen;
