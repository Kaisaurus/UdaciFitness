import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'
import UdaciFitnessCalendar from 'udacifitness-calendar'
import { white } from '../utils/colors'
import DateHeader from './DateHeader'
import MetricCard from './MetricCard'
import { AppLoading } from 'expo'

class History extends Component {
  state = {
    ready: false
  }
  componentDidMount() {
    const { dispatch } = this.props

    fetchCalendarResults()
      .then(entries => dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
      .then(() => this.setState(() => ({ready: true})))
  }

  renderItem = ({ today, ...metrics }, formattedDate, key) => (
    <View style={styles.item}>
      {today
        ? <View>
            <DateHeader date={formattedDate}/>
            <Text style={styles.noDataText}>
              {today}
            </Text>
          </View>
        : <TouchableOpacity
            onPress={() => console.log('Pressed!')}
          >
            <MetricCard date={formattedDate} metrics={metrics} />
          </TouchableOpacity>}
    </View>
  )

  renderEmptyDate(formattedDate) {
    return (
      <View>
        <Text>No data for this day :(</Text>
      </View>
    )
  }

  render() {
    const { entries } = this.props
    const { ready } = this.state

    if(ready === false){
      return <AppLoading />
    }

    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    )
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History)