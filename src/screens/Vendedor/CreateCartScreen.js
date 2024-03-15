// CreateCartScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from '../../components/Header';

const CreateCartScreen = () => {
  return (
    <View style={styles.container}>
      <Header page={'Criar Carrinho'}></Header>
      <ScrollView >
        <View style={styles.inputGroup}>
          <Text style={styles.title}>Nome do carrinho</Text>
          <TextInput
            style={styles.input}
            placeholder="Carrinho da Shein"
            placeholderTextColor="#878787"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.title}>Fecho do carrinho</Text>
          <TextInput
            style={styles.input}
            placeholder="Carrinho da Shein"
            placeholderTextColor="#878787"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.title}>Câmbio</Text>
          <TextInput
            style={styles.input}
            placeholder="897 Kz"
            placeholderTextColor="#878787"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.title}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Carrinho de natal, todos os produtos chegam 1 semana antes do natal, aproveita."
            placeholderTextColor="#000"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Abrir Carrinho</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 7,
    fontSize: 16,
    padding: 10,
    fontFamily: 'Poppins_400Regular',

  },
  descriptionInput: {
    height: 130,
    textAlignVertical: "top",
    borderColor: "#704F38",
    fontFamily: 'Poppins_400Regular',


  },
  button: {
    backgroundColor: "#704F38",
    marginHorizontal: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 60,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Poppins_400Regular',

  },
  title: {
    padding: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',

  },
  back: {
    marginBottom: 20
  }
});

export default CreateCartScreen;
