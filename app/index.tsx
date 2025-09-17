import { View } from 'react-native';

import CustomText from '@/components/CustomText';

import CalculatorButton from '@/components/CalculatorButton';
import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>
      {/* Resultados */}
      <View
        style={{
          paddingHorizontal: 30,
          marginBottom: 20
        }}
      >
        <CustomText variant='h1'>50 x 50</CustomText>
        <CustomText variant='h2'>2500</CustomText>
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label='C'
          textColor='black'
          backgroundColor={Colors.lightGray}
          onPress={() => console.log('C')}  
        />
        <CalculatorButton
          label='+/-'
          textColor='black'
          backgroundColor={Colors.lightGray}
          onPress={() => console.log('+ / -')}  
        />
        <CalculatorButton
          label='Del'
          textColor='black'
          backgroundColor={Colors.lightGray}
          onPress={() => console.log('Del')}  
        />
        <CalculatorButton
          label='÷'
          backgroundColor={Colors.orange}
          onPress={() => console.log('÷')}  
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='7'
          onPress={() => console.log('7')}  
        />
        <CalculatorButton
          label='8'
          onPress={() => console.log('8')}  
        />
        <CalculatorButton
          label='9'
          onPress={() => console.log('9')}  
        />
        <CalculatorButton
          label='x'
          backgroundColor={Colors.orange}
          onPress={() => console.log('x')}  
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='4'
          onPress={() => console.log('4')}  
        />
        <CalculatorButton
          label='5'
          onPress={() => console.log('5')}  
        />
        <CalculatorButton
          label='6'
          onPress={() => console.log('6')}  
        />
        <CalculatorButton
          label='-'
          backgroundColor={Colors.orange}
          onPress={() => console.log('-')}  
        />
      </View>
      
      <View style={globalStyles.row}>
        <CalculatorButton
          label='1'
          onPress={() => console.log('1')}  
        />
        <CalculatorButton
          label='2'
          onPress={() => console.log('2')}  
        />
        <CalculatorButton
          label='3'
          onPress={() => console.log('3')}  
        />
        <CalculatorButton
          label='+'
          backgroundColor={Colors.orange}
          onPress={() => console.log('+')}  
        />
      </View>
      
      <View style={globalStyles.row}>
        <CalculatorButton
          label='0'
          doubleSize
          onPress={() => console.log('0')}  
        />
        <CalculatorButton
          label='.'
          onPress={() => console.log('.')}  
        />
        <CalculatorButton
          label='='
          backgroundColor={Colors.orange}
          onPress={() => console.log('=')}  
        />
      </View>
    </View>
  )
}

export default CalculatorApp;