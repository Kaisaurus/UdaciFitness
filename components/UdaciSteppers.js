import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import style from '../utils/style'

export default function UdaciSlider ({ max, unit, step, value, onIncrement, onDecrement}) {
  return (
    <View style={style.containerHor}>
      <View style={style.containerHor}>
        <TouchableOpacity
          onPress={onDecrement}
          style={_styles.stepper}
        >
          <FontAwesome name='minus' size={25} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onIncrement}
          style={_styles.stepper}
        >
          <FontAwesome name='plus' size={25} color='white' />
        </TouchableOpacity>
      </View>
      <Text style={style.bodyText}>
        {value}
      </Text>
      <Text style={style.bodyText}>
        {unit}
      </Text>
    </View>
  )
}

const _styles = StyleSheet.create({
  stepper: {
    margin: 10
  }
})