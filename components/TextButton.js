import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import style from '../utils/style'
import { purple } from '../utils/colors'

export default function TextButton ({ children, onPress, styles = {} }) {
  return (
    <TouchableOpacity onPress={onPress} style={_styles.textBtn}>
      <Text style={[style.bodyText, styles]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}
const _styles = StyleSheet.create({
  textBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})