import { View } from 'react-native';

import { useCalculator } from '@/hooks/useCalculator';

import CalculatorButton from '@/components/CalculatorButton';
import CustomText from '@/components/CustomText';

import { Colors } from '@/constants/theme';

import { globalStyles } from '@/styles/global-styles';

const CalculatorApp = () => {
  const {
    formula,
    prevNumber,
    clean,
    toogleSign,
    deleteLast,
    buildNumber,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult
  } = useCalculator();

  return (
    <View style={ globalStyles.calculatorContainer }>
      {/* Resultados */}
      <View
        style={{
          paddingHorizontal: 30,
          marginBottom: 20
        }}
      >
        <CustomText variant='h1'>{formula}</CustomText>
        {formula === prevNumber ? (
          <CustomText variant='h2'> </CustomText>
        ) : (
          <CustomText variant='h2'>{prevNumber}</CustomText>
        )}
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label='C'
          textColor='black'
          backgroundColor={Colors.lightGray}
          onPress={clean}  
        />
        <CalculatorButton
          label='+/-'
          textColor='black'
          backgroundColor={Colors.lightGray}
          onPress={toogleSign}  
        />
        <CalculatorButton
          label='Del'
          textColor='black'
          backgroundColor={Colors.lightGray}
          onPress={deleteLast}  
        />
        <CalculatorButton
          label='÷'
          backgroundColor={Colors.orange}
          onPress={divideOperation}  
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='7'
          onPress={() => buildNumber('7')}  
        />
        <CalculatorButton
          label='8'
          onPress={() => buildNumber('8')}  
        />
        <CalculatorButton
          label='9'
          onPress={() => buildNumber('9')}  
        />
        <CalculatorButton
          label='x'
          backgroundColor={Colors.orange}
          onPress={multiplyOperation}  
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label='4'
          onPress={() => buildNumber('4')}  
        />
        <CalculatorButton
          label='5'
          onPress={() => buildNumber('5')}  
        />
        <CalculatorButton
          label='6'
          onPress={() => buildNumber('6')}  
        />
        <CalculatorButton
          label='-'
          backgroundColor={Colors.orange}
          onPress={substractOperation}  
        />
      </View>
      
      <View style={globalStyles.row}>
        <CalculatorButton
          label='1'
          onPress={() => buildNumber('1')}  
        />
        <CalculatorButton
          label='2'
          onPress={() => buildNumber('2')}  
        />
        <CalculatorButton
          label='3'
          onPress={() => buildNumber('3')}  
        />
        <CalculatorButton
          label='+'
          backgroundColor={Colors.orange}
          onPress={addOperation}  
        />
      </View>
      
      <View style={globalStyles.row}>
        <CalculatorButton
          label='0'
          doubleSize
          onPress={() => buildNumber('0')}  
        />
        <CalculatorButton
          label='.'
          onPress={() => buildNumber('.')}  
        />
        <CalculatorButton
          label='='
          backgroundColor={Colors.orange}
          onPress={calculateResult}  
        />
      </View>
    </View>
  )
}

export default CalculatorApp;