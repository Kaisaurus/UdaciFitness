import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import AddEntry from './components/AddEntry'
import { getMetricMetaInfo } from './utils/helpers'
import { bgColor, bodyTextColor } from './utils/colors'
import style from './utils/style'
import { Provider } from 'react-redux'
// import Examples from './components/Examples'
import FlexboxExamples from './components/FlexboxExamples'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <ScrollView style={style.container}>
          {/* { <FlexboxExamples /> } */}
          {/* <Examples /> */}
          {/* <Text style={style.bodyText}>UdaciFitness</Text> */}
          <AddEntry />
        </ScrollView>
      </Provider>
    )
  }
}