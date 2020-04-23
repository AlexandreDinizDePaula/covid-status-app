import React from "react"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {NavigationContainer} from "@react-navigation/native"
import Home from "./pages/Home"
import States from "./pages/States"
import styles from './styles'
const Tab = createMaterialTopTabNavigator();

export default function Routes(){

    return(
    <NavigationContainer>

        <Tab.Navigator  screenOptions={{headerShown: false}} 
            tabBarPosition={'bottom'}
            tabBarOptions={{
                style:{backgroundColor: '#0275d8'},
               
                labelStyle:{color:'white', fontWeight:'bold'},
                indicatorStyle:{backgroundColor:'white'}
                
                }}>
            <Tab.Screen name="Brasil" component={Home} />
            <Tab.Screen name="Estado" component={States}/>
        </Tab.Navigator>

    </NavigationContainer>
    )}