import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import {Spinner} from './spinner'

const MyButton = ({spinner,title,onPress,color}) => {
    const content = spinner ? (
        <Spinner></Spinner>
    ) : (
        <Button
        onPress={onPress}
        color={color}
        title={title}></Button>
    )

    return (
        <View style={styles.buttonWrapper}> 
            {content}
        </View>
    )
}
const styles=StyleSheet.create({
    buttonWrapper:{
        marginTop:20,
        height:49,
        borderRadius:10,
        justifyContent:'center',
        fontSize:18,
        backgroundColor:'#e87b79'
    }
})
export {MyButton}
