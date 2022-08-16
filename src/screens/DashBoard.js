import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  action,
  getData,
  getLatestMovies,
  getTradingMovies,
} from '../redux/action/actions';
import {useEffect} from 'react';
import {
  API_GET_LATEST,
  API_GET_POPULAR,
  API_GET_TRANDING,
} from '../config/urls';
import {API_KEY, BASE_URL} from '../config/config';
import {useState} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import MovieCard from '../components/MovieCard';
import MovieSection from '../components/MovieSection';

const DashBoard = props => {
  const dispatch = useDispatch();

  const [latestMovieData, setLatestMovieData] = useState([]);
  const [trandingMoviesData, setTrandingMoviesData] = useState([]);

  const latestMovies = useSelector(state => state.movieReducer.latestMovies);
  const trandingMovies = useSelector(
    state => state.movieReducer.trandingMovies,
  );

  const apiLatestMovies = () => {
    let url = API_GET_LATEST.replace('{API_KEY}', API_KEY);
    // let latestMovies =
    axios
      .get(url)
      .then(res => {
        dispatch(getLatestMovies(res.data));
        console.log('res----****', res.data);
      })
      .catch(err => {
        console.log('err----', err);
      });
  };

  const apiTrandingMovies = () => {
    let url = API_GET_TRANDING.replace('{API_KEY}', API_KEY);
    // let trandingMovies =
    axios
      .get(url)
      .then(res => {
        dispatch(getTradingMovies(res.data));
        console.log('res----', res.data);
      })
      .catch(err => {
        console.log('err----', err);
      });
  };

  useEffect(() => {
    apiLatestMovies();
    apiTrandingMovies();
  }, []);

  useEffect(() => {
    if (typeof latestMovies === 'object') {
      setLatestMovieData([latestMovies]);
    } else {
      setLatestMovieData(latestMovies);
    }

    if (typeof trandingMovies === 'object') {
      setTrandingMoviesData([trandingMovies]);
    } else {
      setTrandingMoviesData(trandingMovies);
    }
  }, [latestMovies, trandingMovies]);

  return (
    <SafeAreaView style={{backgroundColor: '#232323', flex: 1}}>
      <ScrollView>
        {latestMovieData && latestMovieData.length > 0 ? (
          <MovieSection
            data={latestMovieData}
            title={"What's New"}
            viewMore={true}
            navigation={props.navigation}
          />
        ) : null}

        {/* {trandingMoviesData && trandingMoviesData.length ? (
          <MovieSection
            data={trandingMoviesData}
            title={'Trending'}
            viewMore={true}
            navigation={props.navigation}
          />
        ) : null} */}

        {/* <MovieSection
          data={data}
          title={'Top Rated'}
          viewMore={true}
          navigation={props.navigation}
        />  */}

        {/* <MovieSection
          data={data}
          title={'Upcoming'}
          viewMore={true}
          navigation={props.navigation}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
