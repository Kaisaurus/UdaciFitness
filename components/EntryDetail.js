import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import MetricCard from './MetricCard'
import TextButton from './TextButton'
import { addEntry } from '../actions'
import { removeEntry } from '../utils/api'
import { white } from '../utils/helpers'
// import styled from 'styled-components'

// const EntryContainer = styled.View`
//   flex: 1;
//   background-color: white;
//   padding: 15;
// `

class EntryDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params

    const year = entryId.slice(0, 4)
    const month = entryId.slice(5,7)
    const day = entryId.slice(8)

    return {
      title: `${month}/${day}/${year}`
    }
  }
  reset = () => {
    const { remove, goBack, entryId } = this.props

    remove()
    goBack()
    removeEntry(entryId)
  }
  shouldComponentUpdate(nextProps) {
    // Component doesn't update if this returms false
    return nextProps.metrics !== null && !nextProps.metrics.today
  }
  render() {
    const { metrics } = this.props

    return (
      // <EntryContainer>
      //   <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
      // </EntryContainer>
      <View>
        <MetricCard metrics={metrics} />
        <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
        <TextButton>
          Reset
        </TextButton>
      </View>
    )
  }
}

function mapStateToProps (state, { navigation }) {
  const { entryId } = navigation.state.params

  return {
    entryId,
    metrics: state[entryId],
  }
}

function mapDispatchToProps (dispatch, { navigation }) {
  const { entryId } = navigation.state.params

  return {
    remove: () => dispatch(addEntry({
      [entryId]: timeToString() === entryId
        ? getDailyReminderValue()
        : null
    })),
    goBack: () => navigation.goBack(),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryDetail)