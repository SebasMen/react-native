import { Text, TextProps } from 'react-native';

import { globalStyles } from '@/styles/global-styles';

interface Props extends TextProps {
  variant: 'h1' | 'h2';
}

const CustomText = ({ children, variant, ...props }: Props) => {
  return (
    <Text
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}

export default CustomText;