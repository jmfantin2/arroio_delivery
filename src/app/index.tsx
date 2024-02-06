import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Header, CategoryButton } from '@/components';
import { CATEGORIES } from '@/utils/data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  function handleCategoryPress(category: string) {
    setSelectedCategory(category);
  }
  return (
    <View className="flex-1 pt-8">
      <Header title="Cardápio" itemsInBag={1} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={selectedCategory === item}
            onPress={() => {
              handleCategoryPress(item);
            }}
          />
        )}
        className="max-h-10 mt-5"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
