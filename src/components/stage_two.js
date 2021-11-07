import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyContext } from '../context';
import {Button} from 'react-native-elements'
import { MainLogo } from '../utils/tools';


const StageTwo = () => {
    const context = useContext(MyContext)
    return(
        <View>
            <MainLogo />
            <Text>The looser is</Text>
            <Text style={{marginTop:30, fontSize:30}}>{context.state.result}</Text>
            <Button
                buttonStyle={styles.button}
                title='Try again'
                onPress={()=>context.getNewLooser()}
            />
            <Button
                buttonStyle={styles.button}
                title='Start over'
                onPress={()=>context.resetGame()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'deepskyblue',
        marginTop:20
    }
})
export default StageTwo;