import { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import colors from "tailwindcss/colors";
import { Feather } from '@expo/vector-icons'
import { BackButton } from '../Components/BackButton'
import { Checkbox } from '../Components/CheckBox'

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];


export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [title, setTitle] = useState('');

  function handleToggleWeekDay(weekDayIndex: number) {
    if(weekDays.includes(weekDayIndex)){
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }


  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual o seu comprometimento?
        </Text>

        <TextInput 
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
        />

        <Text className='text-white font-semibold mt-6 text-xl'>
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <Checkbox  
          title={weekDay} 
          key={weekDay} 
          checked={weekDays.includes(index)}
          onPress={() => handleToggleWeekDay(index)}/>
        ))}


        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
          activeOpacity={0.7}
        >
          <Feather 
           name="check"
           size={20}
           color={colors.white}
          />

          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}