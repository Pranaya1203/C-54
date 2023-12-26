import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  displayAlert(){
    alert("Saint Teresa of Calcutta")
  }
  displaycAlert(){
    alert("'The father of computing.'")
  }
  displaymAlert(){
    alert("The father of the nation")
  }
  displaynAlert(){
    alert("The first black president of South Africa.")
  }
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "maroon"
            onPress={this.displaycAlert} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "black"
            onPress={this.displaymAlert} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "yellow"
            onPress={this.displaynAlert} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mother Teresa"  
            color = "orange"
            //add code here to show alert box for Mother Teresa button
             onPress={this.displayAlert}
             />
        </View>
      </View>
    )
  }
}