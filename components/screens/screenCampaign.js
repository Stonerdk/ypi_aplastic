import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

const mainTitle = "캠페인"

const btnMenu = (navigation) => (
    <TouchableOpacity 
        onpress={() => {

            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="md-reorder-three" size={20} />
    </TouchableOpacity>
)

function screenCampaignBody() {
    return (
        <View>
        </View>
    );
}

function screenCampaign() {
    return (
        <Stack.Navigator screenOptions = { ({navigation}) => ({
            headerTitleStyle: {
                fontSize: 24,
            },
            headerLeft: () => (btnMenu(navigation))
        })}>
            <Stack.Screen name="Navigate" component = {screenCampaignBody} 
                options = {({navigation})=>({
                    title: mainTitle,
                })}/>
        </Stack.Navigator>
    );
};
export default screenCampaign;

const styles = StyleSheet.create({
    upperMenuContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})