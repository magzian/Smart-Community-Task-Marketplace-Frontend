import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'theme/colors'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
};


export default function LoginScreen() {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1 }} >
      <SafeAreaView style={{ backgroundColor: colors.background , flex:0.6 }} >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <ArrowLeftIcon size={30} color={colors.primary} style={{ margin: 16 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image 
            source={require('../assets/login.png')}
            style={{ width: 200, height: 200 }}/>
        </View>
      </SafeAreaView>
      <View style={{
        flex: 1,
        paddingVertical: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4, // for Android shadow
      }}>
        <View style={styles.formContainer}>
          {/* Add your TextInputs and form elements here */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f4f4f4',
    borderRadius: 16,
    width: '90%',
    alignSelf: 'center',
    // Optional shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    // Optional elevation for Android
    elevation: 2,
  },
});