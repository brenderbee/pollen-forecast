import React, { Component } from 'react';
import { View, SectionList, Alert } from 'react-native';
import SectionListItem from './SectionListItem';
import SectionHeader from './SectionHeader';

let sectionListData = [
  {
    title: '07-23-2018',
    data: [
      {
        date: '07-27',
        symptoms: 'I felt bad (4/5)'
      },
      {
        date: '07-26',
        symptoms: 'I felt bad (4/5)'
      },
      {
        date: '07-25',
        symptoms: 'I felt so-so (3/5)'
      },
      {
        date: '07-24',
        symptoms: 'I felt ok (2/5)'
      },
      {
        date: '07-23',
        symptoms: 'I felt terrible (5/5)'
      }
    ]
  },
  {
    title: '07-16-2018',
    data: [
      {
        date: '07-22',
        symptoms: 'I felt fine'
      },
      {
        date: '07-21',
        symptoms: 'I felt fine'
      },
      {
        date: '07-20',
        symptoms: 'I felt fine'
      },
      {
        date: '07-19',
        symptoms: 'I felt fine'
      },
      {
        date: '07-18',
        symptoms: 'I felt fine'
      },
      {
        date: '07-17',
        symptoms: 'I felt fine'
      },
      {
        date: '07-16',
        symptoms: 'I felt fine'
      }
    ]
  }
];

export default class HistoryList extends Component {
  GetSectionListItem = (item) => {
    Alert.alert(item);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: 'lightgrey',
          width: '100%',
        }}
      />
    );
  };

  render() {
    return (
      <View>
        <SectionList
          renderItem={({ item, index }) => {
            return (
              <SectionListItem item={item} index={index} />
            );
          }}
          renderSectionHeader={({ section }) => {
            return (<SectionHeader section={section} />);
          }}
          sections={sectionListData}
          keyExtractor={(item, index) => item.title}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
