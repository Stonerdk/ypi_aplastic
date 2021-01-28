import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class CustomButton extends Component {
    static defaultProps = {
        title: '',
        btnColor: '#eee',
        icon: 'ios-heart',
        onPress: ()=>null,
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style = {{
                marginHorizontal: 2,    
            }} onPress = {this.props.onPress}>
                <View style = {{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: this.props.btnColor,
                    height: 32
                }}>
                    <Ionicons 
                        name = {this.props.icon} 
                        size={18} 
                        color={this.props.btnColor} 
                        style = {{marginLeft: 6}}
                    />
                    <Text style = {{
                        fontSize:12, 
                        color:this.props.btnColor, 
                        marginLeft: this.props.title ? 2 : 0, 
                        marginRight: 6}}>
                            {this.props.title}
                        </Text>
                </View>
            </TouchableOpacity>
        )
    }
}