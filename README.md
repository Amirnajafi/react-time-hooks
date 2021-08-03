# React | React-native Time hooks
[![NPM Version](https://img.shields.io/npm/v/react-time-hooks.svg?style=flat)](https://www.npmjs.com/package/react-time-hooks)
<!-- [![Build Status](https://travis-ci.org/rghorbani/react-native-persian-calendar-picker.svg?branch=master)](https://travis-ci.org/rghorbani/react-native-persian-calendar-picker) -->

Time hooks help you to use timer and countdown hook in your react and react-native projects 
<br>
its so lightway and fast 
<br>
it reduce developing time and prevent to to define any intervals and functions for it 

<kbd>
<img src="https://raw.githubusercontent.com/Amirnajafi/react-time-hooks/main/demo/demo.gif">
</kbd>

The package is both **React** and **React-native** compatible.

## Installation
`$ npm install --save react-time-hooks`
or 

`$ yarn add react-time-hooks`
# Prerequisites
Time hook has no requirement dependencies
## Usage

How to use it:
``` 
import React from 'react';
import {useCountDown , useTimer} from 'react-time-hooks'


/* default options 
    {
        countOnFocus = false,
        interval = 1,
        autoStart = true,
        stop_time = null,
    }
*/ 


const Timer = () => {
    const options =  {} 
    const {time , play , reset , pause} = useTimer(0 , options)
    console.log(time)
    render() {
        return ();
    }
}

const CountDown = () => {
    const options =  {} 
    const {time , play , reset , pause} = useCountDown(60 , options)
    console.log(time)
    render() {
        return ();
    }
}

```

## Default time
| Prop | Type | Description |
:------------ |:---------------| :-----|
| **`time`** | `This is initial time , Timer or Count down start counting at this value` | Mandetory|

## useTimer Options
| Prop | Type | Description | Default
:------------ |:---------------| :-----| :-----|
| **` countOnFocus`** | `Boolean` | Optional. if `true` its stop counting when page is not focus | false,
| **` interval`** | `Number` | Optional. the interval of counter in `seconds` | 1,
| **` autoStart`** | `Boolean` | Optional. if true it start counting as hooks loaded | true,
| **` stop_time`** |  `Number` | Optional. if passing number it stop counting on that number = null,

## useTimer Options
| Prop | Type | Description | Default
:------------ |:---------------| :-----| :-----|
| **` countOnFocus`** | `Boolean` | Optional. if `true` its stop counting when page is not focus | false,
| **` interval`** | `Number` | Optional. the interval of counter in `seconds` | 1,
| **` autoStart`** | `Boolean` | Optional. if true it start counting as hooks loaded | true,
| **` stop_time`** |  `Number` | Optional. if passing number it stop counting on that number = null,

# Suggestions?
Open Issues. Submit PRs.

## License
MIT © [Amirnajafi](https://github.com/Amirnajafi)