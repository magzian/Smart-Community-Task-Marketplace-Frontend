import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from 'theme/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomModal from '../components/Modal'


export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false)
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  return (
    <SafeAreaView style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20 }}>My profile</Text>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
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
        }}
      >
        <View style={{ flexDirection: 'row', alignItems:'flex-start', marginBottom: 20 }}>
          <Image
            source={require('../assets/boy.png')}
            style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
          />
          <View style={{ marginLeft: 20, justifyContent: 'center', borderRadius: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>John Doe</Text>
            <Text style={{ fontSize: 16, color: '#555', marginTop: 4 }}>Software Developer</Text>
          </View>
        </View>
        <View style={{ marginTop:-25, width: '80%' }}>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: 16,
              padding: 16,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Text style={{ marginBottom: 8, fontWeight: 'bold', fontSize: 16 }}>Overall Rating by Employee</Text>
            <Image
              source={require('../assets/stars.png')}
              style={{ width: 130, height: 20 }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: 16,
              padding: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.08,
              shadowRadius: 6,
              elevation: 2,
            }}
          >
            <Text style={{ marginBottom: 8, fontWeight: 'bold', fontSize: 16 }}>Overall Rating by Employer</Text>
            <Image
              source={require('../assets/stars.png')}
              style={{ width: 130, height: 20 }}
            />
          </View>
        </View>
      </View>



      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          width: '80%',
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Look for work</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          width: '80%',
          paddingVertical: 15,
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Assign work</Text>
      </TouchableOpacity>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
      />
    </SafeAreaView>
  )
}