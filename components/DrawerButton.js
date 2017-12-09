import React from 'react'
import TextButton from './TextButton'

export default ({ navigation }) => {
  return (
    <TextButton onPress={() => navigation.navigate('DrawerOpen')}>Open Drawer</TextButton>
  )
};
