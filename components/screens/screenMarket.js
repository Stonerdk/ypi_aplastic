import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
const mainTitle = "옥션"

const btnMenu = (navigation) => (
    <TouchableOpacity 
        onpress={() => {

            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="md-reorder-three" size={20} />
    </TouchableOpacity>

)
function ScreenMarketbyType () {
    return (<View>

    </View>)
}

function ScreenMarketbyCenter() {
    return (<View>

    </View>)
}
function screenMarketBody() {
    return (
        <View>

        </View>
        // <TopTab.Navigator
        //     initialRouteName = "종류로 보기"
        //     tabBarOptions = {{
        //         activeTintColor: '#1a8572',
        //         inactiveTintColor: '#f8f8f8',
        //     }}>
        //     <TopTab.Screen
        //         name = "종류로 보기"
        //         component = {ScreenMarketbyType}
        //     />
        //     <TopTab.Screen
        //         name = "장소로 보기"
        //         compoennt = {ScreenMarketbyCenter} />
        // </TopTab.Navigator>
    );
}

function screenMarket() {
    return (
        <Stack.Navigator screenOptions = { ({navigation}) => ({
            headerTitleStyle: {
                fontSize: 24,
            },
            headerLeft: () => (btnMenu(navigation))
        })}>
            <Stack.Screen name="Market" component = {screenMarketBody} 
                options = {({navigation})=>({
                    title: mainTitle,
                })}/>
        </Stack.Navigator>
    );
};
export default screenMarket;

const styles = StyleSheet.create({
    upperMenuContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})