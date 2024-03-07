import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, TextInput, View, Image } from 'react-native';
import carrinhosData from '../mocks/mocks';

const CarrinhosScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image}  style={styles.itemImage}  resizeMode='cover' />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text>Abertura: {item.date}</Text>
        <Text>Fecho: {item.date}</Text>
        <Text>Preço: {item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Carrinhos SHEIN</Text>
        <TextInput
          placeholder="Pesquisar carrinho"
          style={styles.searchInput}
        />
        <FlatList
        data={carrinhosData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFF', // ou a cor de 
      },
      container: {
        flex: 1,
        // Restante dos estilos...
      },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
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
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  // Adicione estilos adicionais se necessário
});

export default CarrinhosScreen;
