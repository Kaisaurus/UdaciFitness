import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import FlexStretch from './FlexStretch'
import FlexAlignSelf from './FlexAlignSelf'
import NativeExamples from './NativeExamples'

export default class FlexboxExamples extends Component {
  render() {
    return (
      <View>
        <FlexStretch />
        <FlexAlignSelf />
        <NativeExamples />
      </View>
    )
  }
}