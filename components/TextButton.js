import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import style from '../utils/style'

export default function TextButton ({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={style.bodyText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}