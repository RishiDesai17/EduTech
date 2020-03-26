import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

const Navigator = createStackNavigator({
    Screen1: Screen1,
    Screen2: Screen2,
    Screen3: Screen3,
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: 'black'
        },
        headerTintColor: 'white'
    },
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(Navigator);