import React , { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

class App extends Component {

constructor(props){
  super(props);
  this.state= {
    valor: 1000
   }
}

  render(){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Slider
          style={{ width: 200 }}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valor) => this.setState({valor})}
          value={this.state.valor}
          minimumTrackTintColor="green"
          maximumTrackTintColor="#8b0000"
        />
        <Text style={{textAlign: 'center', fontSize: 30}}> 
          Saldo - R$: {this.state.valor.toFixed(2)} 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 150
  },
  text:{
    marginTop: 90,
  }
})

export default App;