import React, { Component } from 'react'
import { Animated, Text, View, Image } from 'react-native'
import TextButton from '../TextButton'
import DrawerButton from '../DrawerButton'

export default class AnimationExample extends Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
    bounceValue: new Animated.Value(1),
  }
  componentDidMount() {
    const { opacity, width, height } = this.state

    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    Animated.spring(width, { toValue: 100, speed: 5 }).start()
    Animated.spring(height, { toValue: 100, speed: 5 }).start()
  }
  boom() {
    const { bounceValue } = this.state
    Animated.sequence([
      Animated.timing(bounceValue, { toValue: 1.2, duration: 500 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 }),
    ]).start()
  }
  animate() {
    const { opacity } = this.state

    this.boom()

    Animated.sequence([
      Animated.timing(opacity, { toValue: 0, duration: 1000 }),
      Animated.timing(opacity, { toValue: 1, duration: 1000 }),
    ]).start()

  }
  render() {
    const { opacity, width, height, bounceValue } = this.state
    const { navigation } = this.props

    return (
      <View>
        <Animated.Image
          source={ require('../../img/Octocat.png') }
          style={{ opacity, height, width }}
        />
        <Animated.Text
          style={{transform: [{ scale: bounceValue }], color: `#fff`}}
        >
          WOOP!
        </Animated.Text>
        <TextButton onPress={() => this.animate()}>Animate!</TextButton>
        <DrawerButton navigation={navigation} />
      </View>
    )
  }
}