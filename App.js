import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import FilmItem from './Components/FilmItem';

export default class App extends React.Component {
  apiUrl = 'http://192.168.43.12:8000';

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch(this.apiUrl+'/films')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          films: responseJson,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <View style = {{ flex: 1 }}>
        <StatusBar
          barStyle = "dark-content"
          hidden = {false}
        />
        { this.state.isLoading ?
          <View style={ styles.loadingContainer }>
            <ActivityIndicator size="large" />
          </View>
          :
          <View style = { styles.content }>
            <FilmItem
              title = { this.state.films[4].title }
              posterUrl = {{uri: this.apiUrl + this.state.films[4].poster }}
              director = { this.state.films[4].director }
              releaseDate = { this.state.films[4].releaseDate }
            />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
