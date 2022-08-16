import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OverView = props => {
  return (
    <View>
      <Text style={styles.Title}>Overview</Text>
      <Text style={styles.oveviewData}>{props.data}</Text>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({
  Title: {
    fontSize: 25,
    color: '#FFF',
  },
  oveviewData: {
    fontSize: 15,
    textAlign: 'justify',
    marginVertical: 10,
    color: '#FFF',
  },
});
