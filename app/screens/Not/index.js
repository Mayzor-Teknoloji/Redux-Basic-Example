import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

class Not extends Component {
    render () {
        return (
            <View style={{flex:1,backgroundColor:'#171640'}}>
             <Text>Bildirim sayfası</Text>
            </View>
        )
    }
}


export default Not