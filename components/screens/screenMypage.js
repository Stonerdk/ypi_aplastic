import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import PostDetail from './screenPostDetail'
const Stack = createStackNavigator()

const mainTitle = "마이페이지"

const btnMenu = (navigation) => (
    <TouchableOpacity 
        onpress={() => {
            
            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="md-reorder-three" size={20} />
    </TouchableOpacity>
)

function screenMypageBody() {
    return (
        <ScrollView>
            <View style = {styles.profileWrapper}>
                <View style = {styles.profileImage} />
                <View style = {styles.profileNameWrapper}>
                    <Text style = {styles.profileName}>
                        돌이아트
                    </Text>
                    <Text style = {styles.profileInfo}>
                        업사이클 에코백
                    </Text>
                    <Text style = {styles.profileInfo}>
                        스티로폼 피규어 공방
                    </Text>
                </View>
            </View>
            
            <PostDetail />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    upperMenuContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImage : {
        width: 128,
        height: 128,
        borderRadius : 64,
        borderColor: '#000000',
        borderWidth: 3,
        backgroundColor : '#80aacc'
    },
    profileNameWrapper: {
        marginLeft: 12
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 8
    },
    profileInfo: {
        fontSize: 16,
        fontWeight : 'normal',
        marginVertical : 6
    },
    profileWrapper: {
        flexDirection: 'row',
        marginHorizontal : 12,
        marginVertical : 6,
    }
    
})

function screenMypage() {
    return (
        <Stack.Navigator screenOptions = { ({navigation}) => ({
            headerTitleStyle: {
                fontSize: 24,
            },
            headerLeft: () => (btnMenu(navigation))
        })}>
            <Stack.Screen name="Navigate" component = {screenMypageBody} 
                options = {({navigation})=>({
                    title: mainTitle,
                })}/>
        </Stack.Navigator>
    );
};
export default screenMypage;

