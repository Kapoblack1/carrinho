import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import { Star, StarFill } from "phosphor-react-native";
import { PlusCircle, X } from "phosphor-react-native";

const DetailsCarrinhoScreen = () => {
  // Mock data, substitua com seus dados reais conforme necessário
  const [modalVisible, setModalVisible] = useState(false);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [estimativa, setEstimativa] = useState(0);
  const carrinho = {
    nome: "Vem Bem",
    abertura: "12/12/2023",
    fecho: "12/12/2023",
    cambio: "899Kz",
    descricao:
      "Carrinho de natal, todos os produtos chegam 1 semana antes do natal, aproveita.",
    vendedor: "Romeno do Rosário",
    avaliacao: 3, // Número de estrelas cheias
    totalCarrinhos: "99",
    imagemCarrinho: require("../../assets/imagens/carrinho1.png"), // Substitua pelo caminho correto da sua imagem
    imagemVendedor: require("../../assets/imagens/james.png"), // Substitua pelo caminho correto da sua imagem
  };

  const fotos = [
    { id: "1", uri: require("../../assets/imagens/carrinho1.png") },
    { id: "2", uri: require("../../assets/imagens/carrinho2.png") },
    { id: "3", uri: require("../../assets/imagens/carrinho3.png") },
    // Adicione mais objetos conforme necessário
  ];
  // Função para renderizar as estrelas baseada na avaliação
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <StarFill key={`star_${i}`} size={24} color="#FFC107" />
        ) : (
          <Star key={`star_${i}`} size={24} color="#FFC107" />
        )
      );
    }
    return stars;
  };

  const adicionarItem = (item) => {
    const novoItem = {
      id: String(itensCarrinho.length + 1),
      nome: "Item 1",
      preco: 18.99,
    };
    setItensCarrinho([...itensCarrinho, novoItem]);
    setEstimativa(estimativa + novoItem.preco);
  };

  const removerItem = (id) => {
    const itensFiltrados = itensCarrinho.filter((item) => item.id !== id);
    setItensCarrinho(itensFiltrados);
    calcularEstimativa(itensFiltrados);
  };

  const calcularEstimativa = (itens) => {
    const total = itens.reduce((soma, item) => soma + item.preco, 0);
    setEstimativa(total);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Carrinhos SHEIN</Text>
          </View>
          <View style={styles.itemContainer}>
            <Image
              source={carrinho.imagemCarrinho}
              style={styles.itemImage}
              resizeMode="cover"
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{carrinho.nome}</Text>
              <Text style={styles.itemSpace}>
                Abertura: {carrinho.abertura}
              </Text>
              <Text style={styles.itemSpace}>Fecho: {carrinho.fecho}</Text>
              <Text style={styles.itemSpace}>Preço: {carrinho.cambio}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <View style={styles.center}>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{carrinho.descricao}</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Vendedor</Text>
          <View style={styles.vendedorInfo}>
            <Image
              source={carrinho.imagemVendedor}
              style={styles.vendedorImage}
              resizeMode="cover"
            />
            <View style={styles.vendedorDetails}>
              <Text style={styles.vendedorName}>{carrinho.vendedor}</Text>
              <Text style={styles.totalCarrinhos}>
                {carrinho.totalCarrinhos} carrinhos
              </Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Faça o seu pedido</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>Detalhes do item</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={styles.closeButton}
                  >
                    <X size={24} color="#000" />
                  </TouchableOpacity>
                </View>

                <View style={styles.modalBody}>
                  <Text style={styles.inputLabel}>Link</Text>
                  <TextInput
                    placeholder="shein.xpto.shoes23749846"
                    placeholderTextColor={"#878787"}
                    style={styles.input}
                  />

                  <Text style={styles.inputLabel}>Preço</Text>
                  <TextInput style={styles.input} defaultValue="18.99" />

                  <TouchableOpacity
                    style={styles.addButton2}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.addButtonText2}>Adicionar foto </Text>
                    <PlusCircle
                      size={20}
                      color="#000"
                      style={styles.searchIcon}
                    />
                  </TouchableOpacity>
                  <FlatList
                    horizontal
                    data={fotos}
                    renderItem={({ item }) => (
                      <Image source={item.uri} style={styles.foto} />
                    )}
                    keyExtractor={(item) => item.id}
                  />

                  <Text style={styles.inputLabel}>Descrição</Text>
                  <TextInput
                    style={[styles.input, styles.descriptionInput]}
                    multiline
                    placeholderTextColor={"#878787"}
                    placeholder="Adicione especificações sobre o pedido (cor, tamanho, quantidade) se achar necessário."
                    numberOfLines={4}
                    blurOnSubmit={true} // Adiciona esta linha
                    onSubmitEditing={() => {}} // Adicione esta linha para esconder o teclado
                  />

                  <TouchableOpacity
                    style={styles.orderButton1}
                    onPress={adicionarItem}
                  >
                    <Text style={styles.addButtonText}>Adicionar item</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.addButton1}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.addButtonText1}>Adicionar item </Text>
            <PlusCircle size={24} color="#000" style={styles.searchIcon} />
          </TouchableOpacity>
          {itensCarrinho.map((item) => (
            <View key={item.id} style={styles.itemCarrinhoContainer}>
              <Text style={styles.itemNome}>{item.nome}</Text>
              <View style={styles.row}>
                <Text style={styles.itemPreco}>{item.preco.toFixed(2)}</Text>
                <TouchableOpacity
                  onPress={() => removerItem(item.id)}
                  style={styles.removerItem}
                >
                  <X size={24} color="#704F38" />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Estimativa do total */}
          <View style={styles.estimativaContainer}>
            <Text style={styles.estimativaTexto}>Estimativa</Text>
            <Text style={styles.estimativaValor}>
              {estimativa.toFixed(2)} AOA
            </Text>
          </View>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Fazer Pedido</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF", // ou a cor de
  },
  scrollViewStyle: {
    flex: 1, // Você pode remover esta linha se você já definiu flex: 1 no estilo safeArea
    // Adicione outros estilos para o ScrollView, se necessário
  },
  container: {
    marginHorizontal: 13,
    backgroundColor: "#FFF",
  },
  center: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "300",
    margin: 16,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  itemSpace: {
    paddingBottom: 3,
    color: "#878787",
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8, // Adicione um borderRadius se as imagens deveriam ter cantos arredondados
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: "400",
    fontSize: 18,
    marginBottom: 4,
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
  descriptionContainer: {
    marginTop: 30,
    borderWidth: 1,
    marginHorizontal: 25,
    borderColor: "#E8E8E8",
    height: 120,
    width: "80%",
    right: 12.5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 17,
  },
  vendedorInfo: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
  },
  vendedorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  vendedorDetails: {
    marginLeft: 10,
  },
  vendedorName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  totalCarrinhos: {
    fontSize: 16,
  },
  starsContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  addButton1: {
    marginTop: 20,
    marginLeft: 20,
    paddingVertical: 10,
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  addButton2: {
    marginTop: 10,
    paddingVertical: 10,

    flexDirection: "row",
  },

  addButtonText1: {
    fontSize: 18,
  },
  addButtonText2: {
    fontSize: 16,
  },

  orderButton: {
    marginTop: 90,
    backgroundColor: "#704F38", // Cor do botão
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 20,
  },
  orderButton1: {
    marginTop: 40,
    backgroundColor: "#704F38", // Cor do botão
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 20,
  },
  orderButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "75%",
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalHeaderText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  closeButton: {
    padding: 10, // Para aumentar a área de toque
  },
  modalBody: {
    width: "100%",
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25,
  },
  input: {
    width: "100%",
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  descriptionInput: {
    textAlignVertical: "top", // Para alinhar o texto no topo no Android
    height: 130,
  },
  foto: {
    width: 100,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#704F38",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  openModalButton: {
    // Estilos para o botão que abre o modal
  },
  openModalButtonText: {
    // Estilos para o texto do botão que abre o modal
  },
  itemCarrinhoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal:10,
    borderBottomWidth: 1,
    borderColor: "#e1e1e1",
    backgroundColor: "#fff", // Cor de fundo para cada item do carrinho
  },
  itemNome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#704F38", // Cor do texto para o nome do item
  },
  row:{
    flexDirection: 'row',
    alignContent: "center",
    alignItems: 'center'
  },
  itemPreco: {
    fontSize: 16,
    color: "#704F38", // Cor do texto para o preço do item
  },
  removerItem: {
    padding: 8, // Para aumentar a área de toque
  },
  estimativaContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#e1e1e1",
    backgroundColor: "#fff", // Cor de fundo para a estimativa do total
    alignItems: "center", // Centraliza o texto no eixo cruzado
    justifyContent: "space-between", // Espaça o texto e o valor da estimativa
    flexDirection: "row", // Organiza o texto e o valor da estimativa lado a lado
  },
  estimativaTexto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Cor do texto para "Estimativa"
  },
  estimativaValor: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Cor do texto para o valor da estimativa
  },
  orderButton: {
    backgroundColor: "#704F38", // Cor do botão para fazer pedido
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 20, // Espaço acima e abaixo do botão
  },
  orderButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailsCarrinhoScreen;
