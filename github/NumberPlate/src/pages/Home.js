import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

let time = new Date().toLocaleString();

import {Actions} from 'react-native-router-flux';

export default class Home extends Component<{}> {

  inside() {
		Actions.inside()
	}


  goBack() {
      Actions.pop();
  }
  
  logs() {
		Actions.logs()
	}

	render() {
		return(
			<View style={styles.container}>
				<Text style= {styles.timeText}>{time}</Text>
                <TouchableOpacity style={styles.button} onPress={this.logs}>
                    <Text style={styles.buttonText}>Vehicles {"\n"}Inside</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={this.logs}>
                    <Text style={styles.buttonText}>Complete {"\n"} Logs  </Text>
                </TouchableOpacity> 
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#7c0202',
    flex: 1,
    alignItems: 'center'
    // justifyContent :'center',
    
  },
   timeText: {
     backgroundColor: 'rgba(255,255,255,0.6)',
     margin: 10,
     fontSize:16,
     borderRadius: 25,
     paddingHorizontal: 16,
     paddingVertical: 8,
     fontWeight: '500',
     flexDirection: 'column',
     alignItems: 'center'
    },
    button: {
    width:150,
    height: 100,
    backgroundColor:'#b88e90',
     borderRadius: 25,
      marginVertical: 80,
      paddingVertical: 0
  },
    button2: {
    width:150,
    height: 100,
    backgroundColor:'#b88e90',
     borderRadius: 25,
      marginVertical: 80,
      paddingVertical: 0
  },
    buttonText: {
     fontSize:20,
     alignSelf: 'center',
     justifyContent: 'center',
     fontWeight:'500',
     color:'#ffffff',
     paddingVertical: 30,
     textAlign:'center'
  }
});
