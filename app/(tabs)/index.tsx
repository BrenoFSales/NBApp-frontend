import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDF', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/players.png')}
          style={styles.headerImg}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">NBApp</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView>
        <ThemedText type='subtitle'>Jogos Hoje:</ThemedText>
        <Image 
          source={require('@/assets/images/placar.png')}
          style={styles.placarImg}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20
  },
  headerImg: {
    flex: 1,
  },
  placarImg: {
    width: 360,
    height: 100,
    marginTop: 20
  }
});
