import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header : {
        backgroundColor : 'coral',
        height: 75,
        paddingTop: 25
    },
    title : {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20

    }
});