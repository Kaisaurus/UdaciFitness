import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`
const MainText = styled.Text`
  font-size: 20;
  color: #ddd
`
const AlertBtn = styled.TouchableOpacity`
  width: 100;
  height: 50;
  background: red;
  align-items: center;
  justify-content: center;
`

export default () =>  {
  return (
    <CenterView>
      <MainText>Styled text</MainText>
      <AlertBtn onPress={() => alert('wooop!')} />
    </CenterView>
  )
};
