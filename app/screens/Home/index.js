import React, { Component } from 'react'
import { Button, SafeAreaView, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

class Home extends Component {
    render () {
        return (
            <View style={{flex:1,backgroundColor:'#171640'}}>
                <SafeAreaView>
                <ScrollView>
                    <View style={{height:55,width:'90%',flexDirection:'row',alignSelf:'center',borderRadius:30,backgroundColor:'#3A3B67',alignItems:'center',paddingLeft:'5%',justifyContent:'flex-start'}}>
                        <Image source={require('../../assets/images/SAYFA1/search.png')} style={{height:25,width:25}}/>
                        <Text style={{color:'white',fontSize:15,marginLeft:'5%'}}>Arama...</Text>
                    </View>

                    <View style={{marginTop:'5%',padding:'6%'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:25,fontWeight:'800'}}>Öne Çıkanlar</Text>
                            <Text style={{color:'#00F7E9',fontSize:17,fontWeight:'700'}}>Tümünü Gör</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:'10%',justifyContent:'space-between'}}>
                            <View>
                                <Image source={require('../../assets/images/SAYFA1/ONECIKAN1.png')} style={{height:300,width:160,borderRadius:10}} />
                                <View style={{marginTop:'5%'}}>
                                    <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>Çağlar Ertuğrul</Text>
                                    <Text style={{color:'#AF907B',fontSize:15,fontWeight:'600'}}>Aktör / Model</Text>
                                    <Text style={{color:'white',fontSize:13,fontWeight:'500'}}>Min 150 ₺</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={require('../../assets/images/SAYFA1/ONECIKAN2.png')} style={{height:300,width:160,borderRadius:10}} />
                                <View style={{marginTop:'5%'}}>
                                    <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>Aleyna Boz</Text>
                                    <Text style={{color:'#AF907B',fontSize:15,fontWeight:'600'}}>Aktriss / Model</Text>
                                    <Text style={{color:'white',fontSize:13,fontWeight:'500'}}>Min 200 ₺</Text>
                                </View>
                            </View>
                        </View>
                    </View>
               
                    <View style={{padding:'6%'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{color:'white',fontSize:25,fontWeight:'800'}}>Hikayeler</Text>
                            <Text style={{color:'#00F7E9',fontSize:17,fontWeight:'700'}}>Tümünü izle</Text>
                        </View>
                        <ScrollView horizontal={true} style={{paddingRight:'50%'}}>
                        <View style={{flexDirection:'row',marginTop:'10%',justifyContent:'space-between'}}>
                            <View>
                                <View>
                                <Image source={require('../../assets/images/SAYFA1/HIKAYEBUYUK1.png')} style={{height:200,width:160,borderRadius:10}} />
                                <Image source={require('../../assets/images/SAYFA1/HIKAYEKUCUK1.png')} style={{position:'absolute',height:40,width:40,bottom:25,borderWidth:1,borderColor:'white',borderRadius:30,left:'36%'}}/>
                                <Text style={{color:'white',position:'absolute',bottom:7,left:'15%'}}>Serenay Sarıkaya</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                <Image source={require('../../assets/images/SAYFA1/HIKAYEBUYUK2.png')} style={{height:200,width:160,marginLeft:'5%',borderRadius:10}} />
                                <Image source={require('../../assets/images/SAYFA1/HIKAYEKUCUK2.png')} style={{position:'absolute',height:40,width:40,bottom:25,borderWidth:1,borderColor:'white',borderRadius:30,left:'36%'}}/>
                                <Text style={{color:'white',position:'absolute',bottom:7,left:'15%'}}>Serenay Sarıkaya</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                <Image source={require('../../assets/images/SAYFA1/HIKAYEBUYUK3.png')} style={{height:200,width:160,borderRadius:10}} />
                                <Image source={require('../../assets/images/SAYFA1/HIKAYEKUCUK3.png')} style={{position:'absolute',height:40,width:40,bottom:25,borderWidth:1,borderColor:'white',borderRadius:30,left:'36%'}}/>
                                <Text style={{color:'white',position:'absolute',bottom:7,left:'15%'}}>Serenay Sarıkaya</Text>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                    </View>
                </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}


export default Home