import React, { Component } from 'react';

import { StyleSheet, View, SectionList, Text, Platform, Alert } from 'react-native';

export default class HistoryList extends Component<{}> {


  GetSectionListItem=(item)=>{

    Alert.alert(item)

  }


  render() {

    var A = ['I feel bad', 'I feel fine', 'I have no symptoms'] ;
    var B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
    var C = ['Cherry', 'Coconut'] ;

    return (

      <View style={{ marginTop : (Platform.OS) == 'ios' ? 20 : 0 }}>

      <SectionList

          sections={[

            { title: 'This Week', data: A },

            { title: 'Last Week', data: B },

            { title: '2018-07-09', data: C },

          ]}

          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }

          renderItem={ ({item}) => <Text style={styles.SectionListItemStyle} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> }

          keyExtractor={ (item, index) => index }

        />

      </View>

    );
  }
}

const styles = StyleSheet.create({

  SectionHeaderStyle:{
    backgroundColor : '#7d31e9',
    fontSize : 16,
    padding: 7,
    color: '#fff',
  },

  SectionListItemStyle:{
    fontSize : 12,
    padding: 24,
    color: '#000',
    backgroundColor : '#F5F5F5'
  }


});
