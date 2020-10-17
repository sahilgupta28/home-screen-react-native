import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors'
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcons}></View>
            <View style={styles.deleteIcons}></View>
            <Image 
                source={require('../assets/chair.jpg')} 
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    container:{
        backgroundColor:colors.backgroundBlack,
        flex:1
    },
    closeIcons:{
        width:50,
        height:50,
        backgroundColor:colors.primary,
        position:"absolute",
        top:40,
        left:30
        
    },
    deleteIcons:{
        width:50,
        height:50,
        backgroundColor:colors.secondary,
        position:"absolute",
        top:40,
        right:30
        
    }
})
export default ViewImageScreen;