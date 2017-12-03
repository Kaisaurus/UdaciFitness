import React from 'react'
import { StyleSheet } from 'react-native'
import { brokenWhite, black } from './colors'

export default styles = StyleSheet.create({
  bodyText: {
    color: brokenWhite,
  },
  container: {
    flex: 1,
    backgroundColor: black,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerHor: {
    flexDirection: 'row',
    flex: 1,
  },
  imgCircle: {
    width:100,
    height:100,
    borderRadius:100,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
})