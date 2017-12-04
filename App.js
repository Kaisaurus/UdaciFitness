import React from 'react'
import { StatusBar, Platform, StyleSheet, Text, ScrollView, View } from 'react-native'
import AddEntry from './components/AddEntry'
import { getMetricMetaInfo } from './utils/helpers'
import { bgColor, bodyTextColor } from './utils/colors'
import style from './utils/style'
import { Provider } from 'react-redux'
import FlexboxExamples from './components/FlexboxExamples'
import History from './components/History'
import store from './store'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
import StackExample from './components/FlexboxExamples/StackExample'
import EntryDetail from './components/EntryDetail'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddEntry: {
    screen: AddEntry,
    navigationOptions: {
      tabBarLabel: 'Add Entry',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  Examples: {
    screen: FlexboxExamples,
    navigationOptions: {
      tabBarLabel: 'Examples',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='send' size={30} color={tintColor} />
    },
  },
  StackExample: {
    screen: StackExample,
    navigationOptions: {
      tabBarLabel: 'StackExample',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='send' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={style.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs />
          {/* <Text style={style.bodyText}>UdaciFitness</Text> */}
          {/* <StackExample /> */}
        </View>
      </Provider>
    )
  }
}