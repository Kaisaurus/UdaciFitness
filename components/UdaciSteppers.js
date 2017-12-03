import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import style from '../utils/style'
import { purple, brokenWhite } from '../utils/colors.js'

export default function UdaciSlider ({ max, unit, step, value, onIncrement, onDecrement}) {
  return (
    <View style={_styles.row}>
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
      <View style={_styles.metricCounter}>
        <Text style={_styles.value}>
          {value}
        </Text>
        <Text style={_styles.unit}>
          {unit}
        </Text>
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  stepper: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    fontSize: 24,
    textAlign: 'center',
    color: brokenWhite,
  },
  unit: {
    fontSize: 18,
    color: brokenWhite,
  },
})