import React from 'react';
import { FlatList, ActivityIndicator, Text, View,  StyleSheet, StatusBar  } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Logs extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.myjson.com/bins/tjo6e')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <Text style={styles.buttonText}>PlateNo - InTime - OutTime</Text>
        <FlatList
          data={this.state.dataSource}
             renderItem={({item}) => <Text style={styles.buttonText}>{item.PlateNo} - {item.InTime} - {item.OutTime}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    backgroundColor:'#7c0202',
    flex: 1,
    alignItems: 'center'
    // justifyContent :'center',
    },
  buttonText: {
     fontSize:20,
     alignSelf: 'center',
     justifyContent: 'center',
     fontWeight:'500',
     color:'#ffffff',
     paddingVertical: 5,
     textAlign:'center'
  }
  });