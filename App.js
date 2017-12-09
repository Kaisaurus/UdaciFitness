import React from 'react'
import { StatusBar, Platform, StyleSheet, Text, ScrollView, View } from 'react-native'
import AddEntry from './components/AddEntry'
import { bgColor, bodyTextColor } from './utils/colors'
import style from './utils/style'
import { Provider } from 'react-redux'
import FlexboxExamples from './components/FlexboxExamples'
import History from './components/History'
import store from './store'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
import StackExample from './components/FlexboxExamples/StackExample'
import AnimationExample from './components/FlexboxExamples/AnimationExample'
import EntryDetail from './components/EntryDetail'
import Udacifitness from './components/Udacifitness'
import Live from './components/Live'
import { setLocalNotification } from './utils/helpers'

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
  Live: {
    screen: Live,
    navigationOptions: {
      tabBarLabel: 'Live',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='ios-speedometer' size={30} color={tintColor} />
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

const Drawer = DrawerNavigator({
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: {
      drawerLabel: 'Home!',
      drawerIcons: () => <FontAwesome name='home' size={20} color='red' />
    }
  },
  AnimationExample: {
    screen: AnimationExample,
    navigationOptions: {
      tabBarLabel: 'Examples',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='send' size={30} color={tintColor} />
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
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={ store }>
        <View style={style.container}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <Drawer />
          {/* <Udacifitness /> */}
        </View>
      </Provider>
    )
  }
}