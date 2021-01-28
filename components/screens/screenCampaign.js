import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import campaignList from '../../data/campaigns'
import recycleList from "../../data/recycleGuides"
const Stack = createStackNavigator()

const mainTitle = "캠페인"
const win = Dimensions.get('window');
const carouselHeight = parseInt(win.width * 9 / 16)
const btnMenu = (navigation) => (
    <TouchableOpacity 
        onpress={() => {

            }}
        style={{marginHorizontal:20}}>
        <Ionicons name="md-reorder-three" size={20} />
    </TouchableOpacity>
)

const Slide = ({item, index}) => {
    
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: 'flex-end'
        }}
      >
        <Image
          source={item.image}
          style={{
              width: win.width,
              height: carouselHeight, 
              resizeMode: 'cover'
          }}
        ></Image>
        <View style={styles.carouselBarWrapper}>
            <View style = {{
                justifyContent: 'center',
                height: 50
            }}>
                <Text style={styles.carouselTitleText}>
                    {item.title}
                </Text>
            </View>
            <View style = {{
                justifyContent: 'center',
                height: 50
            }}>
                <Text style={styles.carouselScrollText}>
                    {index + 1} / {campaignList.length}
                </Text>
            </View>
        </View>
      </View>
    );
  }

const RecycleGuideElement = (item) => {
    const imgSize = win.width - 24
    return (
        <View style = {{
            justifyContent : 'flex-end',
            marginHorizontal: 12,
            mariginVertial : 12
        }}>
            <Image source = {item.image} style = {{
                width: imgSize,
                height: imgSize,
                resizeMode: 'contain'}} />
            <View style = {{
                backgroundColor: '#00000080',
                width: imgSize,
                position: 'absolute',
            }}>
                {
                item.text.map((value) => (
                    <Text style = {{
                        fontSize : 16,
                        marginHorizontal : 12,
                        marginVertical : 4,
                        color: '#ffffff'
                    }}>
                        -{value}
                    </Text>
                ))
                }
            </View>
        </View>
        
    )
}

// const RecycleGuide = () => {
    
//     return (
//         <View style = {{marginHorizontal:12}}>
//             <FlatList
//                 data = {dataList}
//                 renderItem = {RecycleGuideElement}
//                 keyExtractor = {(item) => item.text[0]} />
//         </View>
//     )
// }

function screenCampaignBody() {
    return (
        <ScrollView>
            <FlatList
                data={campaignList}
                //style={{ flex: 1 }}
                renderItem = {Slide}
                keyExtractor = {(item) => item.title}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <Text style = {styles.subTitleText}>
                재활용 가이드
            </Text>
            {
                recycleList.map((item) => RecycleGuideElement(item))
            }
            {/* <FlatList
                data = {recycleList}
                renderItem = {RecycleGuideElement}
                keyExtractor = {(item) => item.text[0]} /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    upperMenuContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    subTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 12,
        marginTop:12,
        marginBottom:12
    },
    carouselTitleText: {
        fontSize: 20,
        color:'#ffffff',
        marginHorizontal: 12,
    },
    carouselScrollText: {
        fontSize: 16,
        color: '#ffffff80',
        marginHorizontal: 12
    },
    carouselBarWrapper:  {
        backgroundColor: '#00000080',
        width: win.width,
        height: 50,
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
    
})

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

