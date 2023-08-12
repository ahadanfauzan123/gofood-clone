import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ShoppingCartIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon, ChevronDownIcon, CheckBadgeIcon } from 'react-native-heroicons/outline';
import { TextInput } from 'react-native';

const Userscreen = () => {
  const navigation = useNavigation()
    const style = {
      safeareview : "bg-white flex-1 items-center justify-start "
    } 
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: true
      })    
  }, [navigation])


  return (
    <SafeAreaView className={style.safeareview}>
      <View className="w-screen z-50 shadow-xl fixed">
      <View className='w-screen bg-white h-[100px]'>
              {/* current location */}
              <View>
                <Text className="text-gray-600 text-[12px] font-light">current location</Text>
                <Text className="font-semibold text-lg ">Jl. Ciliwung No.4 <ChevronDownIcon color='#38E54D' className="translate-y-4"  /></Text>
              </View>
      </View>
      </View>
      {/* <View>
        <TouchableOpacity onPress={() => {navigation.navigate("settingscreen")}}>
          <Text>setting</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("homescreen")}}>
          <Text>back</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  )
}

export default Userscreen