import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

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
      <Text>Home</Text>
      <NavBtn onPress={() => navigation.navigate('DrawerOpen')}>
        <Text>Press here to open the drawer!</Text>
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
    const { navigation } = this.props
    return (
      <View>
        <Text>Dashboard</Text>
        <NavBtn onPress={() => navigation.navigate('DrawerOpen')}>
          <Text>Press here to open the drawer!</Text>
        </NavBtn>
      </View>
    )
  }
}

const DrawerExample = DrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home!',
      drawerIcons: () => <FontAwesome name='home' size={20} color='red' />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcons: () => <FontAwesome name='dashboard' size={20} color='red' />
    }
  },
})

export default DrawerExample