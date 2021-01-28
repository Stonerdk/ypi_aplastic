import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PostDetail from '../PostDetail'
import PostPreview from '../PostPreview'
import ScreenSearch from './screenSearch'
const Stack = createStackNavigator()

function screenNavAll() {
    return (
        <View>
            <PostDetail />
        </View>
    );
}

const btnMenu = (navigation) => (
    <TouchableOpacity 
        onpress={() => {

            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="md-reorder-three" size={20} />
    </TouchableOpacity>
)

const btnSearch = (navigation) => (
    <TouchableOpacity 
        onPress={() => { 
            navigation.navigate("Search")
            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="ios-search" size={20} />
    </TouchableOpacity>
)

const btnHome = (navigation) => (
    <TouchableOpacity 
        onPress={() => { 
            navigation.navigate("Navigate")
            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="ios-home" size={20} />
    </TouchableOpacity>
)

function screenNavigate() {
    return (
        <Stack.Navigator screenOptions = { ({navigation}) => ({
            headerTitleStyle: {
                fontSize: 24,
                alignSelf: 'center'
            },
            headerLeft: () => (btnMenu(navigation))
        })}>
            <Stack.Screen name="Navigate" component = {screenNavAll} 
                options = {({navigation})=>({
                    title: '둘러보기',
                    headerRight: () => (btnSearch(navigation))
                })}/>
            <Stack.Screen name="Search" component = {ScreenSearch} 
                options = {({navigation})=>({
                    title: '검색',
                    headerRight: () => (btnHome(navigation))
                })}/>
        </Stack.Navigator>
    );
};
export default screenNavigate;

const styles = StyleSheet.create({
    upperMenuContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})