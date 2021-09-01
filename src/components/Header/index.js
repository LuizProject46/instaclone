import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons'

export default function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Image style={{resizeMode: 'contain', width: 120, height: 100}} source={require('../../../assets/logo.png')}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <FontAwesome style={{marginRight: 20}} name="plus-square-o" size={26} color="black" />
                <Ionicons style={{marginRight: 20}} name="heart-outline" size={28} color="black" />
                <FontAwesome5  style={{marginRight: 20}} name="facebook-messenger" size={22} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 70,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      
    },
  });