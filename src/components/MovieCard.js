import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
import {POSTER_IMG} from '../config/config';

const MovieCard = props => {
  return (
    <TouchableOpacity
      style={styles.moviewContainer}
      onPress={() => {
        props.navigation.push('Movie Details');
      }}>
      {/* <View style={styles.banner}>


      </View> */}
      <Image
        source={{uri: `${POSTER_IMG}${item.poster_path}`}}
        style={styles.banner}
      />
      {props.title && props.releaseDate ? (
        <View style={styles.movieDetails}>
          <Text style={styles.movieTitle}>{props.title}</Text>
          <Text style={styles.movieDate}>{props.releaseDate}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  moviewContainer: {
    padding: 8,
  },

  banner: {
    backgroundColor: 'yellow',
    height: 200,
    width: 120,
    borderRadius: 5,
  },

  movieDetails: {
    // backgroundColor: 'red',
    width: 120,
    marginTop: 10,
    height: 60,
  },

  movieTitle: {
    color: '#FFF',
  },

  movieDate: {
    position: 'absolute',
    bottom: 0,
    color: '#666',
  },
});
