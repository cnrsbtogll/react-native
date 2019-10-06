import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardWrapper}> 
            {props.children}
        </View>
    )
}
const styles=StyleSheet.create({
    cardWrapper:{
        height:50,
        margin:10,
        borderWidth:1,
        borderRadius:2,
        borderColor:'#dddd',
        justifyContent:'center',
        alignItems:'center',
    }
})
export {Card};
