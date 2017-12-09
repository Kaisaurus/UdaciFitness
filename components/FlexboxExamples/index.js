import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, AppRegis, ScrollViewtry } from 'react-native'
import FlexStretch from './FlexStretch'
import FlexAlignSelf from './FlexAlignSelf'
import NativeExamples from './NativeExamples'
import PlatformExample from './PlatformExample'
import StyledComponents from './StyledComponents'
import DrawerButton from '../DrawerButton'

export default class FlexboxExamples extends Component {

  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <DrawerButton navigation={navigation} />
        <StyledComponents />
        <FlexStretch />
        <FlexAlignSelf />
        <NativeExamples />
        <PlatformExample />
      </ScrollView>
    )
  }
}