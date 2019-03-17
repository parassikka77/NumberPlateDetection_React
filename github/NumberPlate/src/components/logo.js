import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width:120, height: 70}}
          			source={require('../images/logo.png')}/>
          		<Text style={styles.logoText}>Car chalao, Entry bhuljao</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:20,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});