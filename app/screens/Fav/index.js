import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

class Fav extends Component {
    render () {
        return (
            <View style={{flex:1,backgroundColor:'#171640'}}>
                <SafeAreaView>
                    <View style={{height:55,width:'90%',alignSelf:'center',borderRadius:30,backgroundColor:'#3A3B67'}}><Text>asd</Text></View>
                </SafeAreaView>
            </View>
        )
    }
}


export default Fav