import React from 'react'
import { View, Slider, Text, StyleSheet } from 'react-native'
import style from '../utils/style'
import { brokenWhite } from '../utils/colors'

export default function UdaciSlider ({ max, unit, step, value, onChange}) {
  return (
    <View style={_styles.row}>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
        style={{flex: 1}}
      />
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
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
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