import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import AddEntry from './components/AddEntry'
import { getMetricMetaInfo } from './utils/helpers'
import { bgColor, bodyTextColor } from './utils/colors'
import style from './utils/style'
import { Provider } from 'react-redux'
import FlexboxExamples from './components/FlexboxExamples'
import History from './components/History'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={style.container}>
          {/* { <FlexboxExamples /> } */}
          {/* <Text style={style.bodyText}>UdaciFitness</Text> */}
          <View style={{height: 30}} />
          <History />
          <AddEntry />
        </View>
      </Provider>
    )
  }
}