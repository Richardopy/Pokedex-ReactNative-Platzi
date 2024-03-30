import React, { Component } from 'react';
import {Image} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';
import Pokedex from '../screens/PokedexScreen';

const Tab = createBottomTabNavigator();

export default class Navigation extends Component {
  render() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarLabel: "Favoritos",
                title: "Favoritos",
                tabBarIcon: ({color,size}) => <Icon name="heart" color={color} size={size} />,
            }} />
            <Tab.Screen name="Pokedex" component={Pokedex} options={{
                tabBarLabel: "Pokedex",
                title: "Pokedex",
                tabBarIcon: () => renderPokeball(),
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarLabel: "Mi cuenta",
                title: "Mi cuenta",
                tabBarIcon: ({color,size}) => <Icon name="user" color={color} size={size} />,
            }} />
        </Tab.Navigator>
    )
  }
}

function renderPokeball() {
    return (
        <Image  
            source={require('../assets/pokeball.png')}
            style={{ width: 75, height: 75, top: -15}}
        />
    )
}