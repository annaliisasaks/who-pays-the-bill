import React, {useContext} from 'react';
import {  View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Input, Button, ListItem, Text} from 'react-native-elements'

import { MyContext } from '../context';
import { MainLogo } from '../utils/tools';

const StageOne = () => {
    const context = useContext(MyContext);
    console.log(context)

    const renderPlayers = () => (
        context.state.players.map((item, idx) => (
            <ListItem 
                key={idx}
                bottomDivider
                style={{width:'100%'}}
                onLongPress={()=> context.removePlayer(idx)}
            >
                <ListItem.Chevron />
                <ListItem.Content>
                    <ListItem.Title>
                        {item}
                    </ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ))
    )

    return(
        <>
        <Formik
            initialValues={{player:''}}
            validationSchema={Yup.object({
                player: Yup.string()
                .min(3, 'Must be more than 3 characters')
                .max(15, 'Must be less than 15 characters')
                .required('Sorry, the name is required')
            })}
            onSubmit={(values, {resetForm}) => {
                context.addPlayer(values.player)
                resetForm();
            }}
        >
            {({handleBlur, handleChange, handleSubmit, values, touched, errors})=>(
                <>
                    <MainLogo />

                    <Input 
                        placeholder='Add names here'
                        leftIcon={{type:'antdesign', name:'adduser'}}
                        inputContainerStyle={{
                            marginHorizontal:50,
                            marginTop:50
                        }}
                        renderErrorMessage={errors.player && touched.player}
                        errorMessage={errors.player}
                        errorStyle={{
                            marginHorizontal:50
                        }}
                        onChangeText={handleChange('player')}
                        onBlur={handleBlur('player')}
                        value={values.player}
                    />

                    <Button 
                        buttonStyle={styles.button}
                        title='Add player'
                        onPress={handleSubmit}
                    />
                </>
            )}
        </Formik>
        <View style={{padding:20, width:'100%'}}>
            {
                context.state.players && context.state.players.length > 0 ?
                    <>
                    <Text>
                        List of players
                    </Text>
                    {renderPlayers()}
                    <Button 
                        buttonStyle={styles.button}
                        title='Get the loser'
                        onPress={()=> context.next()}
                    />
                    </>
                : null
            }

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'hotpink',
      marginTop:20
    },
  });

export default StageOne;