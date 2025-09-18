import { useEffect, useRef, useState } from "react";

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷'
}

export const useCalculator = () => {
  const lastOperation = useRef<Operator | undefined>(undefined);

  const [formula, setFormula] = useState('0');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  useEffect(() => {
    setFormula(number);
  }, [number])

  const buildNumber = (numberString: string) => {
    // Verificar si existe el punto decimal
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') return setNumber(number + numberString);

      // Evualuar si es otro cero y no hay punto decimal
      if (numberString === '0' && number.includes('.')) return setNumber(number + numberString);

      //Evaluar si es diferente de cero, no hay punto y es el primer número
      if (numberString !== '0' && !number.includes('.')) return setNumber(numberString);

      // Evitar el ingreso de multiples ceros al inicio
      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  }

  return { 
    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber
  }
}