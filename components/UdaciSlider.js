import React from 'react'
import { View, Slider, Text, StyleSheet } from 'react-native'
import style from '../utils/style'

export default function UdaciSlider ({ max, unit, step, value, onChange}) {
  return (
    <View style={style.containerHor}>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
        style={_styles.slider}
      />
      <View style={style.containerHor}>
        <Text style={style.bodyText}>
          {value}
        </Text>
        <Text style={style.bodyText}>
          {unit}
        </Text>
      </View>
    </View>
  )
}

const _styles = StyleSheet.create({
  slider: {
    width: 200
  }
})