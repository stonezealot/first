import React, {Component} from 'react';
import {
    AppRegistry,
    Text
} from 'react-native';
import App from './App'
import {name as appName} from "./app";

export default class MyView extends Component{
    render(){
        return(
            <App name = 'zhangjunrun'/>
        )
    }
}

