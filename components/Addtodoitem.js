import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

const Addtodoitem = (props) => {
    const {submitHandler} = props
    const [text, setText] = useState('');
    const textChangeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText = {textChangeHandler}
                placeholder='write your todo'
            />
            <Button onPress={ () => submitHandler(text) } title='add todo' color='coral' />
        </View>
    );
};

export default Addtodoitem;

const styles = StyleSheet.create({
    input : {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 1,
        borderStyle: 'dashed'
    }
})