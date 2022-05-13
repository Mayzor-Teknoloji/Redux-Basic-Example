import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import * as $ from '../../redux/action.js'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }

    counterIncrease(){
        this.setState({counter:this.state.counter+1});
    }

    counterDescrease(){
        this.setState({counter:this.state.counter-1})
    }
    
    render() {
        return (
            <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>this.props.counterKucultme()} style={{height:20,width:20,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:17}}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize:17,marginRight:'5%',marginLeft:'5%'}}> Counter: {this.props.COUNTER} </Text>
                <TouchableOpacity onPress={()=>this.props.counterArttirma()} style={{height:20,width:20,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    const {COUNTER} = state.default
    return {COUNTER}
}
const mapDispatchToProps = (dispatch, props) => ({
    counterKucultme: ()=>{
        dispatch({
            type:$.COUNTER_DECREASE
        })
    },
    counterArttirma: ()=>{
        dispatch({
            type:$.COUNTER_INCREASE
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
