import { Text, View } from 'react-native'

import { globalStyles } from '@/styles/global-styles'

import CustomText from '@/components/CustomText'

const CalculatorApp = () => {

  
  return (
    <View style={ globalStyles.calculatorContainer }>
      <Text style={globalStyles.mainResult}>50 x 50</Text>

      <Text style={globalStyles.subResult}>2500</Text>

      <CustomText numberOfLines={1}>
        CustomText
      </CustomText>
    </View>
  )
}

export default CalculatorApp