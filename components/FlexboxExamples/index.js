import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, AppRegis, ScrollViewtry } from 'react-native'
import FlexStretch from './FlexStretch'
import FlexAlignSelf from './FlexAlignSelf'
import NativeExamples from './NativeExamples'
import PlatformExample from './PlatformExample'
import StyledComponents from './StyledComponents'
import TabExample from './TabExample'
import StackExample from './StackExample'

export default class FlexboxExamples extends Component {
  render() {
    return (
      <ScrollView>
        <StackExample />
        <TabExample />
        <StyledComponents />
        <FlexStretch />
        <FlexAlignSelf />
        <NativeExamples />
        <PlatformExample />
      </ScrollView>
    )
  }
}