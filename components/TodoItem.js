import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
const TodoItem = (props) => {
    const {item, pressHandler} = props
    return (
        <TouchableOpacity>
            <View style={styles.item} >
                <MaterialIcons name="delete" size={18} color="#333" />
                <Text style={styles.textitem} onPress={() => pressHandler(item.key)}>{item.text}</Text>
            </View>            
        </TouchableOpacity>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    item:{
        padding     : 16,
        marginTop   : 16,
        borderColor : '#ccc',
        borderWidth : 1,
        borderRadius: 5,
        borderStyle: 'dashed',
        flexDirection: 'row'
    },
    textitem:{
        marginLeft:10
    }
});