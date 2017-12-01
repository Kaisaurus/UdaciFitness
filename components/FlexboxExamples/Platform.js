import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vectoricons'

export default function Platform () {
  return (
    <View>
      <Ionicons
        name='ios-pizza'
        size={100}
        color='red'
      />
    </View>
  )
}

const _styles = StyleSheet.create({

})