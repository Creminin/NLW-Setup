import './src/lib/dayjs';

import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { useFonts } from '@expo-google-fonts/poppins/useFonts';
import { Loading } from './src/Components/Loading';
import { Routes } from './src/routes/Index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold, 
    Poppins_700Bold, 
    Poppins_800ExtraBold
  })

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}