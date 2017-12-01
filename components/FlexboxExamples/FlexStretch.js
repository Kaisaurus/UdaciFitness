import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class FlexStretch extends Component {
  render() {
    return (
      <View style={_styles.container}>
        <View style={[_styles.box, {flex: 1}]}/>
        <View style={[_styles.box, {flex: 2}]}/>
        <View style={[_styles.box, {flex: 1}]}/>
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
    alignItems: 'stretch',

    backgroundColor: '#090',
    height: 150,
  },

  box: {
    // stretch for flexDirection: 'row' only works without height of children
    // stretch for flexDirection: 'column' only works without width of children
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }

})