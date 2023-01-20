import { View, Text, ScrollView } from 'react-native'
import { HabitDay, DaySize } from '../Components/Habitday'
import { Header } from '../Components/Header'
import { generateRangeDatesFromYearStart } from '../utils/generate-date-year-from-beginning';
import { useNavigation } from '@react-navigation/native'


const weekDays = [
  'Do',
  'Se',
  'Te',
  'Qua',
  'Qui',
  'Sex',
  'Sa'
];

const dateFromYearStart = generateRangeDatesFromYearStart();
const minimunSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimunSummaryDatesSizes - dateFromYearStart.length

export function Home() {
  const { navigate } = useNavigation();
  return (
    <View className='flex-1 bg-background px-8 py-16'>
      <Header />

      <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex-row pt-6 pb-4'>
          {weekDays.map((weekDays, i) => (
            <Text key={`${weekDays}-${i}`}
            className='text-zinc-500 font-bold text-center text-xl mx-1'
            style={{ width: DaySize}}
            >
              {weekDays}
            </Text>
          ))}
        </View>

        <View className='flex-row flex-wrap'>
          {dateFromYearStart.map(date => (
            <HabitDay
              key={date.toISOString()} 
              onPress={() => navigate('habit', { date: date.toISOString()})}
            />
          ))}

        {
          amountOfDaysToFill > 0 && Array
          .from({ length: amountOfDaysToFill })
          .map((_, index) => (
            <View 
              key={index}
              className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
              style={{ width: DaySize, height: DaySize }}
            />
          ))
        }
        </View>
      </ScrollView>

      
    </View>
  )
}