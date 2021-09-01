import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import {Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons'

export default function Header(){
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{backgroundColor: '#fff'}}>
            {Array.from([1,3,3,3,3,3,3,3,]).map( a => (
                <View style={styles.stories}>
                    <Image style={{borderRadius: 40, resizeMode: 'cover', width: 60, height: 60}} source={{uri: "https://cdn.pixabay.com/photo/2020/04/04/03/07/lake-5000642_960_720.jpg"}}/>
                </View>
            ))}

            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    stories: {
      width: 70,
      height: 70,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: '#d6025d',
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
     

     
    },
    
  });