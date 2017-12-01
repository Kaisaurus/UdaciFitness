import React from 'react'
import { Text } from 'react-native'
import { bodyTextColor } from '../utils/colors'

export default function DateHeader ({ date }) {
  return (
    <Text style={{color: bodyTextColor}}>
      {date}
    </Text>
  )

}