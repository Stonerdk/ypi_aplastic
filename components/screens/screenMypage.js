import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function screenMypage() {
    return (
        <View style={styles.upperMenuContainer}>
            <Text>screenMypage</Text>
        </View>
    );
};
export default screenMypage;

const styles = StyleSheet.create({
    upperMenuContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})