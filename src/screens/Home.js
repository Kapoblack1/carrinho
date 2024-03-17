import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    ImageBackground,
} from "react-native";
import shein from '../../assets/imagens/shein.jpg';
import zara from '../../assets/imagens/zara.jpg';
import ali from '../../assets/imagens/shein1.webp';
import carrinhos from '../mocks/mocks';


const Home = () => {

    const handleItemPress = (item) => {
        // Ação a ser executada quando um item é pressionado
        // Por exemplo, navegar para uma nova tela com os detalhes do item
        console.log('Item pressionado:', item);
    };

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.item}>
            <View style={styles.imageContainer}>
                <Image style={styles.carrinhoImage} source={item.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.carrinhoDetails}>
                <Text style={styles.carrinhoName}>{item.name}</Text>
                <Text style={styles.carrinhoDetail}>Preço: {item.price}</Text>
                <Text style={styles.carrinhoDetail}>Fecho: {item.date}</Text>
            </View>

        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Discover</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                style={styles.options}>

                <View style={styles.option}>
                    <ImageBackground source={shein} style={styles.image}>
                        <View style={styles.optionDetails}>
                            <Text>Carrinhos Shein</Text>
                            <Text>Preços imperdíveis!</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.option}>
                    <ImageBackground source={zara} style={styles.image}>
                        <View style={styles.optionDetails}>
                            <Text>Carrinhos Zara</Text>
                            <Text>Preços imperdíveis!</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.option}>
                    <ImageBackground source={ali} style={styles.image}>
                        <View style={styles.optionDetails}>
                            <Text>Carrinhos Aliexpress</Text>
                            <Text>Preços imperdíveis!</Text>
                        </View>
                    </ImageBackground>
                </View>

            </ScrollView>

            <Text style={styles.title}>Carrinhos prestes a fechar</Text>

            <FlatList
                data={carrinhos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

            <Text style={styles.title}>Carrinhos recentes</Text>

            <FlatList
                data={carrinhos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 20,
    },
    headerText: {
        fontSize: 26,
        margin: 16,
        fontFamily: 'Poppins_600SemiBold',
        alignContent: 'center',
    },
    options: {
        display: 'flex',
        flexDirection: 'row',

    },
    optionsText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
    },
    option: {

        width: 220,
        height: 400,
        borderRadius: 40,
        marginHorizontal: 8,
        shadowColor: '#704F38',
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.2,

    },
    optionDetails: {
        backgroundColor: '#e1e1e1',
        justifyContent: 'center',
        alignContent: 'center',
        width: '70%',
        padding: 7,
        borderRadius: 15
    },
    carrinhoName: {
        fontFamily: 'Poppins_500Medium',
    },
    carrinhoDetail: {
        fontFamily: 'Poppins_400Regular',
    },
    carrinhoDetails: {
        backgroundColor: '#d7d7d7',
        paddingRight: 20,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        height: '100%',
    },
    imageContainer: {
        backgroundColor: '#d7d7d7',
        paddingRight: 10,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    },
    image: {
        flex: 1,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    title: {
        fontSize: 18,
        margin: 16,
        fontFamily: 'Poppins_500Medium',
        alignContent: 'center',
    },
    carrinhoImage: {
        width: 80,
        height: 80,
        borderRadius: 25,
        resizeMode: 'cover',
    },
    carrinhos: {
        marginHorizontal: 16,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 8,
    },

});

export default Home;
