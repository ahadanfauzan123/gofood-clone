import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className=" min-h-[140px] min-w-screen px-8 mt-6">
      {/* category cards */}
      <CategoryCard title="Serbu kelezatan dan banyak pilihan" bgcolor="pink" />
      <CategoryCard title="Hidangan khas resto yang dimasak pakai cinta" bgcolor="green" />
      <CategoryCard title="Harga terjangkau rasa gak kalah wow" bgcolor="red" />
      <CategoryCard title="Nikmat beneran sampai lupa daratan" bgcolor="pink" />
      <CategoryCard title="Makan kenyangBanyak diskon untung" bgcolor="yellow" />
      <CategoryCard title="Testing" bgcolor="green" />
      <View className="w-[20px]"></View>
    </ScrollView>
  )
}

export default Categories