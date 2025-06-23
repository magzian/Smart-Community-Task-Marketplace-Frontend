import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
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
      ></View>

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