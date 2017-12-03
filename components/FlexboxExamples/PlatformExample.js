import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function PlatformExample () {
  return (
    <View>
      <Ionicons name='ios-pizza' size={100} color='red' />
      {
        Platform.OS === 'ios'
          ? <Ionicons name='ios-pizza' size={100} color='red' />
          : <Ionicons name='md-pizza' size={100} color='red' />
      }
    </View>
  )
}

const _styles = StyleSheet.create({

})