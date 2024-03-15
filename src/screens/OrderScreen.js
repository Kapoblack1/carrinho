import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, FlatList, Image, imageSource } from 'react-native';
import { Upload, Eye } from 'phosphor-react-native';
import Header from '../components/Header';



const mockData = [
  {
    id: '1',
    title: 'Vem Bem',
    source: 'Carrinho Shein',
    items: 5,
    total: '25000Kz',
    status: 'ativo',
    pagamento: false, // Novo campo adicionado
    image: require('../../assets/imagens/carrinho1.png'),
  },
  {
    id: '2',
    title: 'Vem Bem',
    source: 'Carrinho Shein',
    items: 5,
    total: '25000Kz',
    status: 'ativo',
    pagamento: true,
    image: require('../../assets/imagens/carrinho2.png'),
  },
  {
    id: '3',
    title: 'Vem Bem',
    source: 'Carrinho Shein',
    items: 5,
    total: '25000Kz',
    status: 'ativo',
    pagamento: false, // Novo campo adicionado
    image: require('../../assets/imagens/carrinho3.png'),
  },
  {
    id: '4',
    title: 'Vem Bem',
    source: 'Carrinho Shein',
    items: 5,
    total: '25000Kz',
    status: 'ativo',
    pagamento: true,
    image: require('../../assets/imagens/carrinho4.png'),
  },
  {
    id: '5',
    title: 'Vem Bem',
    source: 'Carrinho Shein',
    items: 5,
    total: '25000Kz',
    status: 'ativo',
    pagamento: false, // Novo campo adicionado
    image: require('../../assets/imagens/carrinho1.png'),
  },
  {
    id: '6',
    title: 'Vem Bem',
    source: 'Carrinho Shein',
    items: 5,
    total: '25000Kz',
    status: 'ativo',
    pagamento: true,
    image: require('../../assets/imagens/carrinho2.png'),
  },
  // Adicione mais objetos de dados conforme o necessário
];

const OrderScreen = () => {

  const [selectedTab, setSelectedTab] = useState('Ativos');
  const [activeTab, setActiveTab] = useState('Ativos');


  const renderOrderItem = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <Image
          source={item.image}
          style={styles.orderItemImage}
        />
        <View style={styles.orderItemDetails}>
          <Text style={styles.orderItemTitle}>{item.title}</Text>
          <Text style={styles.itemSpace}>{item.source}</Text>
          <Text style={styles.itemSpace}>{item.items} itens</Text>
          <Text style={styles.itemSpace}>Total: {item.total}</Text>
        </View>
        <View style={styles.orderItemActions}>
          {item.pagamento ? (
            <TouchableOpacity style={styles.actionButton}>

              <Text style={styles.actionTitle}>Comprovativo </Text>
              <Upload size={20} color="#FFF" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionTitle}>Seguir pedido</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };


  const tabIndicator = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;
  const tabWidth = windowWidth / 2 - 10;

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    setSelectedTab(tabName); // Definindo selectedTab também
    Animated.spring(tabIndicator, {
      toValue: tabName === 'Ativos' ? 0 : tabWidth,
      useNativeDriver: true,
      bounciness: 10,
    }).start();
  };


  return (
    <View style={styles.container}>
      <Header page={'Meus Pedidos'}></Header>
      {/* Guias de Navegação */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabUnderline} />
        {/* Ativos */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handleTabPress('Ativos')}
        >
          <Text style={[styles.tabText, selectedTab === 'Ativos' && styles.activeTabText]}>
            Ativos
          </Text>
        </TouchableOpacity>

        {/* Completos */}
        <TouchableOpacity
          style={styles.tab}
          onPress={() => handleTabPress('Completos')}
        >
          <Text style={[styles.tabText, selectedTab === 'Completos' && styles.activeTabText]}>
            Completos
          </Text>
        </TouchableOpacity>

        {/* Indicador da Aba Ativa */}
        <Animated.View
          style={[
            styles.tabIndicator,
            { width: tabWidth, transform: [{ translateX: tabIndicator }] },
          ]}
        />
      </View>

      {/* Lista de pedidos com base na aba selecionada */}
      <FlatList
        data={mockData.filter((order) => selectedTab === 'Ativos' ? order.status === 'ativo' : order.status === 'completo')}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        style={styles.orderList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: "2.2%",
    marginTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: "15%",
    marginBottom: 20,
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    position: 'relative', // Adicionado para a linha cinza
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'grey',
    fontFamily: 'Poppins_400Regular',

  },
  activeTabText: {
    color: 'black',
    fontFamily: 'Poppins_600SemiBold',

  },
  tabIndicator: {
    height: 4,
    backgroundColor: '#704F38',
    position: 'absolute',
    bottom: 0,
  },
  tabContent: {
    flex: 1,
  },
  orderList: {
    flex: 1,
  },
  actionButton: {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",

  },
  actionTitle: {
    color: "white",
    fontFamily: 'Poppins_400Regular',

  },
  orderItem: {
    flexDirection: 'row',
    padding: "6%",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  orderItemImage: {
    width: "25%",
    height: "100%",
    marginRight: "2%",
    borderRadius: 8,
  },
  orderItemDetails: {
    flex: 1,
    left: "0%"
  },
  orderItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',


  },
  orderItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#704F38",
    height: "39%",
    width: "37%",
    top: "23%",
    borderRadius: 20,
    left: "6%"


  },
  itemSpace: {
    paddingBottom: "2%",
    color: "#878787",
    fontFamily: 'Poppins_400Regular',

  },
});

export default OrderScreen;
