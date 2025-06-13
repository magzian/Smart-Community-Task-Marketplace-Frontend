import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';

export default function Welcome() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.innerView}>
        <Text style={styles.title}>Lets get Started!</Text>
      </View>
      <View style={[styles.imageContainer, { backgroundColor: colors.background }]}>
        <Image
          source={require('../assets/Hello-bro.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.containerBtn}>
        {/* Placeholder for buttons or additional content */}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor will be set inline
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 16,
  },
  containerBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#388e3c',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});