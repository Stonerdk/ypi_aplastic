import * as React from 'react';
import {
    View,
    FlatList,
    Component,
    Text,
    StyleSheet
} from 'react-native';
import posts from "../../data/posts"
import CustomButton from "../CustomButton.js"
import Hashtag from "../Hashtag.js"
const postData = posts
 
const renderItem = ({item}) => {
    return (
        <View style={styles.postPreviewItemWrapper}>
            <View style={{
                height: item.height,
                backgroundColor: item.altcolor
            }} />
            <View style={styles.bottomLayoutWrapper}>
                <View style={styles.profileWrapper}>
                    <View style={styles.profileImageWrapper}>

                    </View>
                    <View style={styles.authorTitleWrapper}>
                        <Text style={styles.authorText}>
                            {item.author}
                        </Text>
                        <Text style = {styles.authorTitle}>
                            {item.title}
                        </Text>
                    </View>
                </View>
                <View style={styles.btnWrapper}>
                    <CustomButton 
                        title={item.heart} 
                        icon={'ios-heart'} 
                        btnColor={'#ff0000'} /> 
                    {
                        item.sells &&
                        <CustomButton 
                            title={item.cost} 
                            icon={'md-cart-outline'} 
                            btnColor={'#1a8572'}
                            onPress={()=>{alert('판매자한테 문의하세요.')}}
                        />
                    }
                    <CustomButton icon={'ios-paper-plane'} btnColor={'#000'}/> 
                    <CustomButton icon={'md-chatbox-outline'} btnColor={'#000'}/>
                </View>
            </View>
            <View style={styles.hashtagWrapper}>
                {
                    item.sells &&
                    <Hashtag title={"구매 가능"} color={'#1a8572'}/>
                }
                {
                    item.tag.map(tname => (
                        <Hashtag title={tname} key={tname}/> 
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postPreviewItemWrapper: {
        marginHorizontal: 12,
        marginBottom: 20
    },
    bottomLayoutWrapper: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileWrapper: {
        flexDirection: 'row',
    },
    profileImageWrapper:{
        height: 48,
        width: 48,
        marginRight: 8,
        borderRadius: 24,
        backgroundColor: '#bbbbbb'
    },
    authorTitleWrapper: {},
    btnWrapper: {
        flexDirection: 'row',
    },
    hashtagWrapper: {
        flexDirection: 'row',
        marginTop: 4,
        flexWrap: 'wrap',
    },
    authorText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2
    },
    authorTitle: {
        fontSize: 12
    }
})

const PostDetail = () => {
    return (
        <View>
            <FlatList
                data = {postData}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}
            />
        </View>
    )
}

export default PostDetail;