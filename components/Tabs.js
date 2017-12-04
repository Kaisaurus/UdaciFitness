import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
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
      <MainText>Home</MainText>
    </CenterView>
  )
}

function Dashboard () {
  return (
    <CenterView>
      <MainText>Dashboard</MainText>
    </CenterView>
  )
}

export const Tabs = TabNavigator({
  Home: {
    screen: Home,
  },
  Dashboard: {
    screen: Dashboard,
  },
})



