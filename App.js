import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from './src/screens/DashBoard';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MovieDetails from './src/screens/MovieDetails';
import MovieList from './src/screens/MovieList';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DashBoard"
            component={DashBoard}
            // options={headerStyle}
          />
          <Stack.Screen
            name="Movie Details"
            component={MovieDetails}
            // options={{headerShown: false}}
          />
          <Stack.Screen
            name="Movie List"
            component={MovieList}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
