const Calculator = require('../src/calculator');

describe('Calculator - Tests unitaires', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add()', () => {
    test('devrait additionner deux nombres positifs', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('devrait additionner un nombre positif et négatif', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('devrait additionner deux nombres négatifs', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('devrait additionner avec zéro', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('devrait lancer une erreur avec des arguments non-numériques', () => {
      expect(() => calculator.add('5', 3)).toThrow('Les arguments doivent être des nombres');
      expect(() => calculator.add(5, null)).toThrow('Les arguments doivent être des nombres');
    });
  });

  describe('subtract()', () => {
    test('devrait soustraire deux nombres', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('devrait soustraire et retourner un nombre négatif', () => {
      expect(calculator.subtract(4, 10)).toBe(-6);
    });

    test('devrait lancer une erreur avec des arguments invalides', () => {
      expect(() => calculator.subtract('10', 4)).toThrow();
    });
  });

  describe('multiply()', () => {
    test('devrait multiplier deux nombres positifs', () => {
      expect(calculator.multiply(6, 7)).toBe(42);
    });

    test('devrait multiplier avec zéro', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('devrait multiplier nombres positif et négatif', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('devrait lancer une erreur avec des arguments invalides', () => {
      expect(() => calculator.multiply(5, undefined)).toThrow();
    });
  });

  describe('divide()', () => {
    test('devrait diviser deux nombres', () => {
      expect(calculator.divide(20, 4)).toBe(5);
    });

    test('devrait diviser et retourner un décimal', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('devrait lancer une erreur lors de division par zéro', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division par zéro impossible');
    });

    test('devrait lancer une erreur avec des arguments invalides', () => {
      expect(() => calculator.divide(10, 'zero')).toThrow('Les arguments doivent être des nombres');
    });
  });

  test('snapshot test pour plusieurs opérations', () => {
    const results = {
      add: calculator.add(5, 3),
      subtract: calculator.subtract(10, 4),
      multiply: calculator.multiply(6, 7),
      divide: calculator.divide(20, 4)
    };
    expect(results).toMatchSnapshot();
  });
});
