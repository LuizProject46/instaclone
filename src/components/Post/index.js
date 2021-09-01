import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Ionicons, FontAwesome5, FontAwesome} from '@expo/vector-icons'
import { useState } from 'react'

export default function Post(){
  const [like, setLike] = useState(false)

    return (
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={{flexDirection: "row"}}>
              <Image style={{borderRadius: 35, resizeMode: 'cover', width: 35, height: 35}} source={{uri: "https://cdn.pixabay.com/photo/2020/04/04/03/07/lake-5000642_960_720.jpg"}}/>
              <View style={{marginLeft: 8}}>
                <Text style={{fontWeight: 'bold', fontSize: 13}}>Louis_hudson46</Text>
                <Text style={{fontSize: 13}}>Texas - USA</Text>
              </View>
            </View>          
            <View style={{padding: 5}}>
              <TouchableOpacity><FontAwesome5 size={16} name="ellipsis-v"/></TouchableOpacity>
            </View>
          </View>
          <View style={styles.postContent}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={{uri: "https://cdn.pixabay.com/photo/2020/04/04/03/07/lake-5000642_960_720.jpg"}}/>
          </View>
          <View style={styles.postFooter}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{flexDirection:'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setLike(!like) }><Ionicons style={{marginRight: 15}} name={`${like ? 'heart' : 'heart-outline'}`}size={26} color={ like ? '#ff0f47' : 'black'} /></TouchableOpacity>
                <TouchableOpacity><Ionicons style={{marginRight: 15}} name="chatbubble-outline" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Ionicons style={{marginRight: 15}} name="paper-plane-outline" size={24} color="black" /></TouchableOpacity>
              </View>
              
              <View style={{alignItems: 'center', marginRight: 5}}>
                <FontAwesome name="bookmark-o" size={26} color="black" />
              </View>
            </View>
            <View style={{padding: 5, flexDirection: 'row', alignItems: 'center'}}>
              <Text>Curtido por </Text>
              <Text style={{fontWeight: 'bold'}} >jse45</Text>
              <Text> e </Text>
              <Text style={{fontWeight: 'bold'}}>outras pessoas </Text>
            </View>
            <View style={{padding: 5}}>
              <Text>Boa tarde povo, qual a boa?</Text>
            </View>
          </View> 
  
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
      width: "100%",
      height: 600,
      backgroundColor: '#fff',
      marginBottom: 30

     
    },
    postHeader:{
      backgroundColor: '#fff',
      width: '100%',
      height: 55,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 8,
      paddingBottom: 10,
      paddingTop: 10
    },
    postContent:{
      width: '100%',
      height: '70%',
      backgroundColor: '#fff'
    },
    postFooter:{
      width: '100%',
      height: 55,
      backgroundColor: '#fff',
      padding: 8
    },
    
  });