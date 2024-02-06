import { Text, Pressable, PressableProps } from 'react-native';
import shapeshifter from 'classnames';
type CategoryButtonProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export const CategoryButton = ({
  title,
  isSelected,
  ...rest
}: CategoryButtonProps) => {
  return (
    <Pressable
      {...rest}
      className={shapeshifter(
        'bg-slate-800 border-2 border-transparent px-4 justify-center rounded-md h-10',
        {
          ' border-lime-300': isSelected,
        }
      )}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
};
