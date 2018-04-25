import React, { Component } from 'React';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class FilmItem extends Component {
  componentDidMount() {
    console.log(this.props.posterUrl);
  }

  render() {
    return (
      <View>
        <Text style = { styles.title }>
          { this.props.title }
        </Text>
        <View style = { styles.posterWrapper } >
          <Image
            source={ this.props.posterUrl }
            style={ styles.poster }
            resizeMode='contain'
          />
        </View>
        <View style = { styles.detailsWrapper }>
          <Text>Director: { this.props.director }</Text>
          <Text>Release date: { this.props.releaseDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  posterWrapper: {
    backgroundColor: 'black',
    marginVertical: 20,
  },
  poster: {
    height: 400,
    width: null,
  },
  detailsWrapper: {
    paddingHorizontal: 20,
  },
});
