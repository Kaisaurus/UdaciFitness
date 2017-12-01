import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class FlexStretch extends Component {
  render() {
    return (
      <View style={_styles.container}>
        <View style={[_styles.box]}/>
        <View style={[_styles.box, {alignSelf: 'flex-end'}]}/>
        <View style={[_styles.box]}/>
      </View>
    )
  }
}

const _styles = StyleSheet.create({

  container: {
    // flex is unique to native, but similar to flex-grow
    flex: 1,

    // flexDirection changes the main axis from the cross axis
    // default: 'column', alt: 'row'
    flexDirection: 'row',

    // justifyContent specifies how children align among the Main axis
    // default: 'flex-start', alt: 'center', 'flex-end', 'space-around', 'space-between'
    justifyContent: 'space-around',

    // alignItems specifies how children align among the Cross axis
    // default: 'flex-start', alt: 'center', 'flex-end', 'stretch'
    alignItems: 'center',

    backgroundColor: '#009',
    height: 150,

  },

  box: {
    width: 50,
    height: 20,
    backgroundColor: '#e76e63',
    margin: 10,
  }

})