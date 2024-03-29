import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import StageOne from './src/components/stage_one';
import StageTwo from './src/components/stage_two';
import { MyContext } from './src/context';

class App extends Component {
  static contextType = MyContext;

  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.context.state.stage === 1 ? 
          <StageOne />
          : 
          <StageTwo />  
        }
        </View>
      </ScrollView>
    
  );
}
}

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Platform.OS === 'ios' ? 80 : 10
  },
});

export default App;