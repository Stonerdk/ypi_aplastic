import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function screenMarket() {
    return (
        <View style={styles.upperMenuContainer}>
            <Text>screenMarket</Text>
        </View>
    );
};
export default screenMarket;

const styles = StyleSheet.create({
    upperMenuContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})