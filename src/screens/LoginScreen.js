import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import logo from "../../assets/imagens/logo.png"
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  
  const handleLogin = () => {
    // Implement login logic here
    console.log("Login Pressed", { email, password });
    navigation.navigate('Home');

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
        <View >
            <Image style={styles.logo} source={logo}></Image>
        </View>
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
    marginTop: 50,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'Poppins_400Regular',
  },
  inputFieldContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 20,
    fontFamily: 'Poppins_400Regular',

  },
  inputField: {
    backgroundColor: "#FFF", // White background
    borderWidth: 1,
    borderColor: "#D6D7DA", // Light grey border
    borderRadius: 40,
    padding: 15,
    marginBottom: 18,
    fontSize: 16,
    height: 58,
    fontFamily: 'Poppins_400Regular',
  },
  forgotPassword: {

    alignSelf: "flex-end", // Aligns the Forgot Password to the right
  },
  forgotPasswordText: {
    color: "#704F38", // Brown color for the 'Forgot Password?' text
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
    fontFamily: 'Poppins_600SemiBold',

  },
  loginButton: {
    backgroundColor: "#704F38", // Brown color for the login button
    borderRadius: 35,
    height: 65,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,

  },
  loginButtonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  loginButtonText: {
    color: "#FFFFFF", // White color for the button text
    fontSize: 18,
    fontFamily: 'Poppins_400Regular',

  },
  logo: {
    height: 200,
    width: 200,
  },
  logoContaier: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
});

export default LoginScreen;
