import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Component} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Hashtag from '../Hashtag'

const ScreenSearch = () => {
    // state = {
    //     tags: ["tagA", "tagB", "tagC"],
    //     title: "",
    //     author: ""
    // }
    //onChangeText={text => setState((text)=>({title: text}))}
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [currentTag, setCurrentTag] = useState("");
    const [tags, setTags] = useState([]);
    const [filterSell, setFilterSell] = useState(true);
    const [filterNoSell, setFilterNoSell] = useState(true);
    //0 : both, 1 : sell, 2 : doesn't sell
    return (
        <View>
            <View style={styles.barContainer}>
                <Ionicons name="md-list-outline" size={20} color="#000" style = {styles.barIcon}/>

                <TextInput
                    style={styles.barInput}
                    placeholder="제목/내용"
                    onChangeText = { text => {setTitle(text);} }
                    onSubmitEditing = { () => {
                        setTitle("")
                    }} value = {title}
                    underlineColorAndroid="transparent"
                />
            </View>

            <View style={styles.barContainer}>
                <Ionicons name="ios-person-outline" size={20} color="#000" style = {styles.barIcon}/>

                <TextInput
                    style={styles.barInput}
                    placeholder="게시자"
                    onChangeText = { text => {
                        setAuthor(text);
                    }} onSubmitEditing = { () =>
                        setAuthor("")
                    } value = {author}
                    underlineColorAndroid="transparent"
                />
            </View>

            <View style={styles.hashtagsWrapper}>
                <View style={styles.barContainerTag}>
                    <Ionicons name="ios-pricetag-outline" size={20} color="#000" style = {styles.barIcon}/>
                    <TextInput
                        style={styles.barInput}
                        placeholder="해시태그 추가"
                        underlineColorAndroid="transparent"
                        onChangeText = { text => { setCurrentTag(text);} }
                        onSubmitEditing = { () => { 
                            setTags([...tags, currentTag]);
                            setCurrentTag("");
                        }}
                        value = {currentTag}
                    />
                </View>
                {
                    tags.map(item => { return (
                        <Hashtag 
                            title = {item} 
                            key = {item} 
                            style = {{
                                marginTop: 6,
                                height: 40,
                                borderRadius: 20
                            }} onPress = {()=>{
                                setTags(tags.filter(it => it != item)) }}
                        />
                    );})
                }
            </View>

            <View style = {styles.filterSellWrapper}>
                <Text style = {{
                    marginRight: 6,
                    fontSize: 16,
                    fontWeight : 'bold'
                }}>
                    판매 여부
                </Text>
                <CheckBox value = {filterSell} onValueChange = {setFilterSell} style = {{alignSelf: "center"}}/>
                <Text>
                    판매함  
                </Text>
                <CheckBox value = {filterNoSell} onValueChange = {setFilterNoSell} style = {{alignSelf: "center", marginLeft: 4}}/>
                <Text>
                    판매하지 않음
                </Text>
            </View>
        </View>
    );
}
export default ScreenSearch;

const styles = StyleSheet.create({
    barContainer: {
        backgroundColor: "#ccc",
        borderRadius: 20,
        height: 40,
        alignItems: "center",
        
        flexDirection: "row",
        marginHorizontal: 12,
        marginTop: 6
    },
    barContainerTag: {
        backgroundColor: "#ccc",
        borderRadius: 20,
        width: 160,
        height: 40,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 6
    },
    barIcon: {
        marginLeft: 12,
    },
    barInput: {
        marginLeft: 8
    },
    hashtagsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 12
    },
    filterSellWrapper : {
        flexDirection: "row",
        marginHorizontal: 14,
        alignItems: "center",
        marginTop : 6
    }
});