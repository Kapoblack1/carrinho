import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';

const Header = ({ page }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ width: '20%', marginLeft: 5 }}><CaretLeft size={24} /></TouchableOpacity>
            <Text style={styles.headerText}>{page}</Text>
            <Text style={{ width: '20%', color: 'white'}}>yay</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 22,
        margin: 16,
        fontFamily: 'Poppins_400Regular',
        alignContent: 'center',
    },

});

export default Header;
