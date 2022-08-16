import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MovieCard from './MovieCard';

const MovieSection = props => {
  const renderCard = item => {
    console.log('item555555', item);
    return (
      <View></View>
      // <MovieCard
      //   img={''}
      //   title={item.original_title}
      //   releaseDate={item.release_date}
      //   navigation={props.navigation}
      // />
    );
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.containerHeader}>
        <Text style={styles.headerText}>{props.title}</Text>
        {props.viewMore ? (
          <Text
            style={styles.viewMore}
            onPress={() => {
              props.navigation.push('Movie List');
            }}>
            View All
          </Text>
        ) : null}
      </View>
      <FlatList
        data={props.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return renderCard(item);
        }}
      />
    </View>
  );
};

export default MovieSection;

const styles = StyleSheet.create({
  viewContainer: {
    margin: 10,
  },

  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  headerText: {
    color: '#FFF',
    fontSize: 25,
  },

  viewMore: {
    color: '#A5AAFF',
    fontSize: 15,
  },
});
