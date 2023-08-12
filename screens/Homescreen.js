
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView, RefreshControl, TextInput } from 'react-native';
import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ShoppingCartIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon, ChevronDownIcon, CheckBadgeIcon } from 'react-native-heroicons/outline';
import Product from '../components/Product';
import Categories from '../components/Categories';
import Voucher from '../components/Voucher';


const Homescreen = () => {
    const  navigation = useNavigation();
    const [refresh,setRefresh] = useState(false);
    const [pullMe, setPullMe] = useState(false);
    const style = {
      safeareview : "bg-white flex-1 items-center justify-start "
    }
    const refreshMe = () => {
      setRefresh(!refresh)
      setTimeout(() => {
        navigation.push("homescreen")
        setRefresh(false)
      },4000)
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })    
    }, [navigation])
  return (
    <SafeAreaView className={style.safeareview}>
      <View className="w-screen z-50 shadow-xl fixed">
          <View className={`w-screen h-[100px] bg-white  flex flex-row justify-between items-center px-[20px] -mb-4 mt-3`}>
            <View className="flex items-center justify-center flex-row">
              <Pressable onPress={() => {navigation.navigate("settingscreen")}} className="bg-gray-300 w-[40px] h-[40px] rounded-full mr-3 flex items-center justify-center">
              <UserIcon size={28} color="#ffff" className="font-extrabold " />
              </Pressable>
              {/* current location */}
              <View>
                <Text className="text-gray-600 text-[12px] font-light">current location</Text>
                <Text className="font-semibold text-lg ">Jl. Ciliwung No.4 <ChevronDownIcon color='#38E54D' className="translate-y-4"  /></Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-center space-x-2">
              <Pressable>
                <ShoppingCartIcon color="#38E54D" size={30}/>
              </Pressable>
            </View>
          </View>
          {/* search */}
          <View className="bg-white w-full h-[68px] flex flex-row items-center justify-center space-x-2">
            <View className="w-[85%] bg-gray-50 rounded-lg flex flex-row items-center justify-start space-x-2 pl-4">
              <MagnifyingGlassIcon color="#DBDFEA" size={30} />
              <TextInput placeholder='mau makan apa?' keyboardType='default' className=" h-[45px] font-semibold flex-1 px-2" />
            </View>
            <AdjustmentsVerticalIcon color="#38E54D" size={34} />
          </View>
      </View>
      {/* body */}
        <ScrollView 
        className="w-full bg-white"
        refreshControl={
          <RefreshControl 
          refreshing={refresh}
          onRefresh={() => refreshMe()}
          />
        }>
          <Categories className="mt-8" />
          {/* voucher */}
          <Voucher />
          {/* <Product /> */}
          <Categories className="mt-8" />
          <Categories className="mt-8" />
          {/* <Categories className="mt-8" />
          <Categories className="mt-8" />
          <Categories className="mt-8" /> */}
          


        </ScrollView>


        
        
        {/* <Pressable onPress={() => {navigation.navigate('loginscreen')}} className="absolute bottom-0 bg-green-500 px-[65px] py-3 mb-4 rounded-[50px]">
          <Text className="text-lg font-semibold">logout</Text>
        </Pressable> */}
    </SafeAreaView>
  )
}

export default Homescreen