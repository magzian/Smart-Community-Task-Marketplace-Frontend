import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from 'theme/colors'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export default function SignUp() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.background, flex: 0.6 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <ArrowLeftIcon size={30} color={colors.primary} style={{ margin: 16 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image
            source={require('../assets/sign-up.png')}
            style={{ width: 200, height: 200 }} />
        </View>
      </SafeAreaView>
      <View style={{
        flex: 1.2,
        paddingVertical: 20,
        paddingTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      }}>
        <View style={styles.formContainer}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 3 }}>Name</Text>
          <TextInput
            style={{
              width: '100%',
              height: 50,
              borderColor: colors.primary,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 16,
              marginTop: 10,
            }}
            placeholder="John Doe"
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 3 }}>Email Address</Text>
          <TextInput
            style={{
              width: '100%',
              height: 50,
              borderColor: colors.primary,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 16,
              marginTop: 10,
            }}
            placeholder="johndoe@gmail.com"
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 3 }}>Password</Text>
          <TextInput
            style={{
              width: '100%',
              height: 50,
              borderColor: colors.primary,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 16,
              marginTop: 10,
            }}
            placeholder="********"
            secureTextEntry={true}
          />
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 3 }}>Confirm Password</Text>
          <TextInput
            style={{
              width: '100%',
              height: 50,
              borderColor: colors.primary,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 16,
              marginTop: 10,
            }}
            placeholder="********"
            secureTextEntry={true}
          />
          <TouchableOpacity style={{
            backgroundColor: colors.primary,
            width: '100%',
            paddingVertical: 15,
            borderRadius: 10,
            marginTop: 20,
            alignItems: 'center',
          }} onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: colors.primary }}>Already have an account? </Text>
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 24,
    backgroundColor: '#f4f4f4',
    borderRadius: 16,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
});