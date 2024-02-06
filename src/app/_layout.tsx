import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Loader } from '@/components/Loader';

export default function Layout() {
  const [areFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!areFontsLoaded) {
    return <Loader />;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#0f172a]">
      <Slot />
    </SafeAreaView>
  );
}
