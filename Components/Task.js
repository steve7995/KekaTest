import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={styles.item} >
            <View style={styles.leftItem}>
                <View style={styles.square}>
                </View>
                <Text style={styles.TaskDetails}>{props.text}</Text>
            </View>
            <View style={styles.RightItem} >



            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    leftItem: {
        flexDirection: 'row',

        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        marginRight: 10
    },
    TaskDetails: {
        maxWidth: '80%',

    },
    RightItem: {
        width: 12,
        height: 12,
        borderWidth:2,
        borderRadius:5,
        borderColor:'#55BCF6'
    }
})





export default Task;