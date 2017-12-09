import React, { Component } from 'react'
import { Text, View, ImageEditor, Image } from 'react-native'
import TextButton from '../TextButton'
import { ImagePicker } from 'expo'
import styled from 'styled-components/native'


export default class CameraExample extends Component {
  state = {
    image: null
  }
  pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3,2]
    }).then(result => {
      if(result.cancelled) {
        return
      }
      ImageEditor.cropImage(result.uri, {
          offset: { x:0, y: 0},
          size: { width: result.width, height: result.height },
          displaySize: { width: 300, height: 200 },
          resizeMode: 'contain',
        },
        uri => this.setState(() => ({ image: uri })),
        () => console.log('error')
      )
    })
  }
  render() {
    const { image } = this.state
    return (
      <CenterView>
        <TextButton onPress={this.pickImage}>Pick Img</TextButton>
        {image && (
          <Img source={{uri:image}} />
        )}

      </CenterView>


    )
  }
}

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #333;
`
const Img = styled.Image`
  width: 150;
  height: 150;
  resizeMode: contain;
  background: #000;
`