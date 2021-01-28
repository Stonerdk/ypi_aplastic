import * as React from 'react';
import {
    View,
    FlatList,
    Component,
    Text,
    StyleSheet
} from 'react-native';
import posts from "../data/posts"
const postData = posts
const postDataLeft = postData.reduce((pre, value, i) => {
    if (i % 2 == 0) pre.push(value);
    return pre;
}, [])
const postDataRight = postData.reduce((pre, value, i) => {
    if (i % 2 == 1) pre.push(value);
    return pre;
}, []); 

const renderItem = (item) => {
    return (
        <View style={styles.postPreviewItemWrapper}>
            <View style={{
                height: item.height,
                backgroundColor: item.altcolor
            }} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    postPreviewItemWrapper: {
        marginHorizontal: 12,
        marginBottom: 20,
        flex: 1,
        height: 300
    },
    profileWrapper: {
        flexDirection: 'row',
        marginTop: 4
    },
    profileImageWrapper:{
        height: 48,
        width: 48,
        marginRight: 8,
        borderRadius: 24,
        backgroundColor: '#bbbbbb'
    },
    authorTitleWrapper: {},
    authorText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    titleText: {
        fontSize: 12
    },
    titleTextSells: {
        fontSize: 12,
        color: '#1a8572',
    }
})

const PostPreview = () => {
    return (
        <View style = {{
            flexDirection:"row", 
            marginHorizontal:8, 
            marginTop: 4,
            flex: 1
        }}>
            <View style = {{flex: 1, flexDirection: "column"}}>
                {postDataLeft.map((item)=>{
                    return renderItem(item)
                })}
            </View>
            <View style = {{flex : 1}}>
                {postDataRight.map((item)=>{
                    return (<Text>
                        {item.title}
                    </Text>)
                })}
            </View>
        </View>
    )
}

export default PostPreview;