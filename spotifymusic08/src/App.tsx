import { registerRootComponent } from 'expo';
import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { playbackService } from './musicPlayerServices';
import TrackPlayer from 'react-native-track-player';
import React, { useState, useEffect } from 'react'
import { setupPlayer, addTrack } from './musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App() {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false)

  async function setup() {
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

TrackPlayer.registerPlaybackService(() => playbackService)
export default registerRootComponent(App)