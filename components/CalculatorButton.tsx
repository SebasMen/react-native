import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/theme';

import { globalStyles } from '@/styles/global-styles';

interface Props {
  label: string;
  textColor?: string;
  backgroundColor?: string;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  textColor = 'white',
  backgroundColor = Colors.darkGray,
  doubleSize = false,
  onPress
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: backgroundColor,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: textColor
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default CalculatorButton;