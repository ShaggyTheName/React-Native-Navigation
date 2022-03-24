import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View, Image, TouchableOpacity}  from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Measure from '../screens/Measure';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#DD0000',
                tabBarInactiveBackgroundColor: '#ffffff',
                tabBarItemStyle: {borderRadius: 10, height: 50},
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 35,
                    left: 30,
                    right: 30,
                    zIndex: 4,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    height: 50,
                    ... style.shadow,
                }
            }}        
            >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <View style={style.iconStyle}>
                            <Ionicons
                                name="people-circle-outline"
                                size={35}
                                color={tabInfo.focused ? "#ffffff" : "#DD0000"}
                            />
                        </View>
                    );
                }
            }} />

            <Tab.Screen name="Measure" component={Measure} options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <View style={style.iconStyle}>
                      <Ionicons
                        name="timer-outline"
                        size={35}
                        color={tabInfo.focused ? "#ffffff" : "#DD0000"}
                      />
                     
                      </View>
                    );
                }
            }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: (tabInfo) => {
                    return (
                        <View style={style.iconStyle}>
                      <Ionicons
                        name="person-circle-outline"
                        size={35}
                        color={tabInfo.focused ? "#ffffff" : "#DD0000"}
                      />
                       
                      </View>
                    );
                }
            }}/>
        
        </Tab.Navigator>
    );
}

const style= StyleSheet.create({
    shadow: {
        
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    
    },
   
});


export default Tabs;



