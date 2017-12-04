import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import styled from 'styled-components/native'

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`
const MainText = styled.Text`
  font-size: 20;
  color: #ddd
`

function Home () {
  return (
    <CenterView>
      <MainText>Nested tabs</MainText>
    </CenterView>
  )
}

function Dashboard () {
  return (
    <CenterView>
      <MainText>are buggy</MainText>
    </CenterView>
  )
}

const TabExample = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Nested tabs',
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'seem buggy',
    }
  },
})

export default TabExample

export function createTabs(...tabs) {


}