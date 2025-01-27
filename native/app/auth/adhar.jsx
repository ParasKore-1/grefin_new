import { View, Text,TouchableOpacity,TextInput,Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image';
import { useNavigation } from 'expo-router';

export default function adhar() {
    const navigation=useNavigation();
    
    return (
      <View className='h-[100%] bg-[#181B22] p-4'>
        <StatusBar hidden/>
          <View className='flex flex-col '>
            <View className='flex flex-row gap-[21%]'>
            <View>
            <TouchableOpacity>
              <View className='h-10 w-10 flex items-center justify-center bg-slate-100  rounded'> 
              <Ionicons name="arrow-back-outline" size={25} color="black" />
              </View>
              </TouchableOpacity>
              </View>
              <View  className='flex '>
              <Image className='h-[216px] w-[216px]' source={require('../../assets/images/grefinlogo.png')} />
              </View>
            </View>
  
            <View className='flex items-center justify-center  pt-2'>
                <Text className='text-[#3DD68C] text-[32px] font-semibold text-center'>Enter Your Aadhar Number</Text>
            </View>
            <View className='flex items-center justify-center  pt-2'>
                <Text className='text-white text-[12px]  font-semibold text-center'>Additional information that help us fetch accurate information</Text>
            </View>

          <View className=' pt-8 flex flex-col items-center justify-center gap-4'>
            <View  className=' flex flex-row bg-[#303136] p-0.5 rounded-md'>
              <View className='mt-2 ml-2'>
            <Ionicons name="person-outline" size={25} color="#3DD68C"  />
            </View>
          <TextInput className='w-[280px] text-sm h-[41px] text-center text-[#3DD68C]    '
            placeholder="Enter Aadhar Number" keyboardType="numeric" placeholderTextColor="white"
          />
          </View>
        
          </View>
  
          
  
          <TouchableOpacity >
       <View className='pt-12'>
  <View className='flex items-center justify-center   h-[49px] w-[320px] bg-[#3DD68C]  rounded-3xl '>
    <Text className='text-[18px] font-medium'>Confirm</Text>
  </View>
  </View>
  </TouchableOpacity>
          
         
          </View>
      </View>
    )
}