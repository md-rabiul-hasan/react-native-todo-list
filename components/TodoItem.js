import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
const TodoItem = (props) => {
    const {item, pressHandler} = props
    return (
        <TouchableOpacity>
            <Text style={styles.item} onPress={() => pressHandler(item.key)}>{item.text}</Text>
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
        borderStyle: 'dashed'
    }
});