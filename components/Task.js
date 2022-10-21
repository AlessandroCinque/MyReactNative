import React from "react";
import { View,Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const Task=(props) =>
{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    item:
    {
        backgroundColor:'#FFF',
        padding:15,
        borderRadius: 10
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    square:
    {
        width:24,
        height:24,
        backgroundColor: '#90DA7C',
        opacity:0.4,
    }
})

export default Task;