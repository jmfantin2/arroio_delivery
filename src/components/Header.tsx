import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw_colors from 'tailwindcss/colors';
import shapeshifter from 'classnames';

type HeaderProps = {
  title: string;
  itemsInBag?: number;
};

export const Header = ({ title, itemsInBag }: HeaderProps) => {
  return (
    <View
      id="CONTAINER: HEADER HORIZONTAL BAR"
      className="flex-row items-center border-b border-slate-700 pb-5 mx-5"
    >
      <View id="CONTAINER: LOGO + TÍTULO DA PÁGINA ATUAL" className="flex-1">
        <Image source={require('@/assets/logo.png')} className="w-32 h-6" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      <TouchableOpacity
        id="BOTÃO: CARRINHO DE COMPRAS"
        className={shapeshifter('relative', {
          'opacity-0': !itemsInBag,
        })}
      >
        <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
          <Text className="text-slate-900 font-bold text-xs">{itemsInBag}</Text>
        </View>

        <Feather name="shopping-bag" color={tw_colors.white} size={24} />
      </TouchableOpacity>
    </View>
  );
};
