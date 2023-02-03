import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {NativeModules} from 'react-native';
import Tts from 'react-native-tts';
import {VoiceCommandCell} from './src/components/VoiceCommandCell';
import {voiceCommands} from './src/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Tts.setDefaultLanguage('en-IE');
  }, []);

  const readText = (text: string) => {
    NativeModules.SoundModule.switchAudioOutput();
    Tts.speak(text);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={voiceCommands}
        renderItem={({item}) => {
          return (
            <VoiceCommandCell
              title={item.command}
              onPress={() => readText(item.command)}
              description={item.description}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default App;
