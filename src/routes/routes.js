import React from 'react'
import { NavigationContainer  } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Entypo, EvilIcons, MaterialIcons} from '@expo/vector-icons'

import Home from '../Screens/Home'


const Tab = createBottomTabNavigator()




export default function Routes(){
    return (
        <NavigationContainer>
            <Tab.Navigator 
               
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
            
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'Home1':
                                iconName = 'search';
                                break;
                            case 'Home2':
                                iconName = 'video-collection';
                                break;
                            case 'Home3':
                                iconName = 'shopping-bag';
                                break;
                            case 'Home4':
                                iconName = 'user';
                                break;
                            default:
                                iconName = 'circle';
                                break;
                        }
                        
                        if(route.name == "Home1"){
                           return  <EvilIcons name={iconName} size={size + 10} color={color} />

                        }

                        if(route.name == "Home2" || route.name == "Home3"){
                            return  <MaterialIcons name={iconName} size={size} color={color}/>
 
                         }
                        
                        return <Entypo name={iconName} size={size} color={color} />;
                        
                        
                    },
                    headerShown: false,
                    
                })}
                    tabBarOptions={{
                    activeTintColor: '#000',
                    inactiveTintColor: '#404040',
                    
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{title:""}}
                />
                <Tab.Screen 
                    name="Home1" 
                    component={Home} 
                    options={{title:""}}
                />
                <Tab.Screen 
                    name="Home2" 
                    component={Home} 
                    options={{title:""}}
                />
                <Tab.Screen 
                    name="Home3" 
                    component={Home} 
                    options={{title:""}}
                />
                <Tab.Screen 
                    name="Home4" 
                    component={Home} 
                    options={{title:""}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}