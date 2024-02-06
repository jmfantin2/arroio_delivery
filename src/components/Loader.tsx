import { View, ActivityIndicator } from 'react-native';
import tw_colors from 'tailwindcss/colors';

export const Loader = () => {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <ActivityIndicator color={tw_colors.white} />
    </View>
  );
};
