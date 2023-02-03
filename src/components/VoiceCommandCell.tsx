import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Icon} from './Icon';

type Props = {
  title: string;
  description: string;
  onPress: () => void;
};

export const VoiceCommandCell = ({title, description, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Icon />
      <View style={styles.containerRight}>
        <Button title={title} onPress={onPress} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
  },
  containerRight: {
    flex: 1,
    marginLeft: 32,
  },
  description: {
    color: 'gray',
    alignSelf: 'center',
  },
});
