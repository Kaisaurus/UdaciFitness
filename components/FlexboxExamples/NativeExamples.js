import React, { Component } from 'react'
import { Button, Modal, TouchableHighlight, WebView, Picker, ActivityIndicator, View, FlatList, Text, Switch, TextInput, KeyboardAvoidingView, Image } from 'react-native'
import dummyData from './dummyData'
import style from '../../utils/style'
import TextButton from './TextButton'

export default class NativeExamples extends Component {
  state = {
    input: 'Wabbadapadooo',
    showInput: false,
    icon:  'mrT',
    showWeb: false,
    webUrl: '',
    modalVisible: false,
  }

  characters = [
    {
      id: 'github',
      name: 'Github',
      icon: require('../img/Octocat.png'),
      url: 'https://en.wikipedia.org/wiki/GitHub',
    },
    {
      id: 'rick',
      name: 'Rick',
      icon: {uri: 'http://i.cdn.turner.com/adultswim/big/video/the-search-for-meaning/rickandmorty_bts_searchformeaning.jpg'},
      url: 'https://en.wikipedia.org/wiki/Rick_Sanchez_(Rick_and_Morty)',
    },
    {
      id: 'mrT',
      name: 'Mr. T',
      icon: {uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ5Nzg2MTgwMl5BMl5BanBnXkFtZTcwNTA0NjcxMw@@._V1_UY317_CR0,0,214,317_AL_.jpg'},
      url: 'https://en.wikipedia.org/wiki/Mr._T',
    },
  ]

  handleToggleSwitch = () => {
    this.setState(state => ({
      showInput: !state.showInput,
    }))
  }

  handleTextChange = input => {
    this.setState(state => ({
      input
    }))
  }

  renderItem = item => {
    return <Text style={style.bodyText}>{item.item.name}</Text>
  }

  // onPressIcon = id => {
  //   this.setState(state => ({
  //     showWeb: !state.showWeb,
  //     webUrl: this.characters.find(char => char.id === id).url,
  //   }))
  // }
  onPressIcon = (id) => {
    this.setState(state => ({
      showWeb: !state.showWeb,
      webUrl: this.characters.find(char => char.id === id).url,
    }))
  }

  toggleModal = () => {
    this.setState(state => {
      modalVisible: !state.modalVisible
    })
  }

  render() {
    const { showWeb, webUrl ,icon, input, showInput } = this.state
    const data = dummyData()
    return (
      <View>
        {/*
          FlatList only renders the items the user can see so has performance gain over ScrollList or List
          SectionList adds a Header to FlatList
        */}
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight onPress={
                this.toggleModal
              }>
                <Text>Hide Modal</Text>
              </TouchableHighlight>

            </View>
          </View>
        </Modal>

        <TextButton
          children={'Show Modal'}
          onPress={this.toggleModal}
        />

        { showWeb === true && (
          <WebView
            source={webUrl}
          />)
        }

        { this.characters.map(char => {
          return icon === char.id && (
            <TouchableHighlight key={char.id} onPress={e => this.onPressIcon(char.id)}>
              <Image
                source={char.icon}
                style={style.imgCircle}
              />
            </TouchableHighlight>
          )
        }) }

        <ActivityIndicator />
        <Picker
          selectedValue={this.state.icon}
          onValueChange={(itemValue, itemIndex) => this.setState({icon: itemValue})}
          style={style.bodyText}>
          <Picker.Item label="Mr.T" value="mrT" />
          <Picker.Item label="Rick" value="rick" />
          <Picker.Item label="Github" value="github" />
        </Picker>
        {/*
          KeyboardAvoidingView makes sure the content doesn't get hidden by the keyboard
        */}
        <KeyboardAvoidingView>
          {showInput === true && (
            <TextInput
              style={style.bodyText}
              value={input}
              onChangeText={this.handleTextChange}
            />
          )}
          <Switch
            value={showInput}
            onValueChange={this.handleToggleSwitch}
          />

        </KeyboardAvoidingView>
      </View>
    )
  }
}
