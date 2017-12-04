import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation'
import styled from 'styled-components/native'

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`
const MainText = styled.Text`
  font-size: 20;
  color: #ddd;
  text-align: center;
`
const NavBtn = styled.TouchableHighlight`
  background: #c00;
  width: 150;
  height: 50;
  border-radius: 10;
  justify-content: center;
`

function Home ({ navigation }) {
  return (
    <CenterView>
      <NavBtn onPress={() => navigation.navigate('Dashboard')}>
        <MainText>Dashboard</MainText>
      </NavBtn>
    </CenterView>
  )
}

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    // access params using navigation.state.params
    return {
      title: 'Title Access!'
    }
  }

  render() {
    return (
      <CenterView>
        <MainText>Woop!</MainText>
      </CenterView>
    )
  }
}

const StackExample = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Home',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'green'
      }
    }
  },
})

export default StackExample