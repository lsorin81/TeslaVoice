import React from 'react';
import {Image, StyleSheet} from 'react-native';

const getRandomImage = () => {
  const images = [
    require('../assets/bike-.png'),
    require('../assets/car.png'),
    require('../assets/crane-truck.png'),
    require('../assets/lane.png'),
    require('../assets/no-entry.png'),
    require('../assets/police-car.png'),
    require('../assets/speed.png'),
    require('../assets/stop.png'),
    require('../assets/taxi.png'),
    require('../assets/toll.png'),
    require('../assets/transit.png'),
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

export const Icon = () => {
  return <Image style={styles.image} source={getRandomImage()} />;
};

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
  },
});
