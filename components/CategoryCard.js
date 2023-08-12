import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({title,bgcolor}) => {
  return (
    <TouchableOpacity
    className={`relative w-[350px] h-[170px] bg-${bgcolor}-500 rounded-xl mr-6`}>
        <Text className="absolute bg-yellow-500 bottom-3 left-3 text-[22px] text-white font-bold w-[50%]">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard