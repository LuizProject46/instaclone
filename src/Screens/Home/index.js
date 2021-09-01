import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Stories from '../../components/Stories'
import Post from '../../components/Post'
export default function Home(){
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            <Header/>
           
            <ScrollView style={styles.listPosts}>
                <Stories/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    //   borderBottomWidth: 1.2,
    //   borderColor: '#333',
    //   paddingBottom: 8
    },
    listPosts:{
        width: '100%'
    }
  });