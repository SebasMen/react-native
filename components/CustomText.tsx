import { Text, TextProps } from 'react-native';

type Props = TextProps;

const CustomText = ({ children, ...props }: Props) => {
  return (
    <Text style={{ color: 'white' }} {...props}>{children}</Text>
  )
}

export default CustomText;