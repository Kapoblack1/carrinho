import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Check, PencilSimpleLine } from "phosphor-react-native";
import avatar from '../../assets/imagens/avatar.webp';



const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleRegister = () => {
    // Insert registration logic here
    alert("Register button tapped!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Criar conta</Text>
      </View>
      <View style={styles.center}>
        <View style={styles.profileImageContainer}>
          <Image source={avatar} style={styles.pfp}></Image>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <PencilSimpleLine size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Cleusia dos Anjos"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="cleusiaast@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          placeholder="******************"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <Text style={styles.title}>Confirmação da Password</Text>
        <TextInput
          placeholder="******************"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setAgreeToTerms(!agreeToTerms)}
            style={styles.checkbox}
          >
            {agreeToTerms && (
              <View style={styles.checked}>
                <Check size={20} color="#FFF" />
              </View>
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            Concordo com os
            <Text style={styles.linkText}> Termos & Condições </Text>e com a
            <Text style={styles.linkText}> Política de Privacidade.</Text>
          </Text>
        </View>
        <View style={styles.loginButtonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    alignContent: "center",
    paddingBottom: 30
  },
  header: {
    marginTop: 70,
    marginBottom: 20,
    marginHorizontal: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: 'Poppins_400Regular',
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "#E0E0E0",
    height: 120,
    width: 120,
    borderRadius: 70,
    position: "relative",
  },
  pfp:{
    height: 120,
    width: 120,
    borderRadius: 70,
  },
  editIcon: {
    position: "absolute", // Posiciona o ícone sobre o contêiner da imagem de perfil
    left: "55%", // Ajuste conforme necessário para alinhar onde você quer
    bottom: 35, // Ajuste conforme necessário para alinhar onde você quer
    backgroundColor: "#704F38", // Cor de fundo do ícone para corresponder ao seu esquema de cores
    borderRadius: 32, // Ajuste para corresponder à forma arredondada
    padding: 8, // Ajuste para tamanho correto do toque
    borderWidth: 1.5,
    borderColor: "#FFF", // Cor da borda branca
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E0E0E0", // Placeholder color
  },
  
  inputContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20
  },
  input: {
    backgroundColor: "#FFF", // White background
    borderWidth: 1,
    borderColor: "#D6D7DA", // Light grey border
    borderRadius: 40,
    padding: 15,
    marginBottom: 25,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',

  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    height: 28,
    width: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D6D7DA",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checked: {
    height: "100%",
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 6,
    backgroundColor: "#704F38", // Checkbox checked color
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 12,
    color: "#686868",
    fontFamily: 'Poppins_400Regular',

  },
  linkText: {
    color: "#704F38",
    textDecorationLine: 'underline',
    
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: "#704F38", // Button color
    borderRadius: 35,
    height: 65,
    width: 300,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "400",
    fontFamily: 'Poppins_400Regular',

  },
  title: {
    fontWeight: "bold",
    marginBottom: "3%",
    fontFamily: 'Poppins_400Regular',

  },
  center: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  center1: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    left: 2,
  },
  loginButtonContainer:{
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  }
});

export default RegisterScreen;
