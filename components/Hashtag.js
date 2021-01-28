import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';

export default class Hashtag extends Component {
    static defaultProps = {
        title: '',
        key: '',
        color: '#aaa',
        onPress: null
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress = {this.props.onPress}>
                <View style = {{
                    ...styles.defaultView, 
                    ...this.props.style, 
                    backgroundColor: this.props.color
                }}>
                    <Text style = {{
                        ...styles.defaultText,
                        ...styles.defaultOverText  
                    }}>
                        #{this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    defaultView: {
        marginHorizontal: 2,
        marginVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 12,
        height: 24,
    },
    defaultText: {
        fontSize:12, 
        color:'#fff',
        fontWeight: 'bold',
        
    },
    defaultOverText: {
        marginHorizontal: 6
    }
})