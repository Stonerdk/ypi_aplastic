import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Component} from 'react-native';
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
    const [tags, setTags] = useState(["tag1", "tag2"]);
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
        marginHorizontal: 12,
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
        flexWrap: "wrap"
    }
});