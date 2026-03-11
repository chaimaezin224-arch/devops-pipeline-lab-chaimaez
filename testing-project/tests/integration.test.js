const Calculator = require('../../src/calculator');
const { capitalize, isPalindrome } = require('../../src/stringUtils');

describe('Tests d\'intégration - Calculator et StringUtils', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('Scénario 1: Calculer un prix avec TVA', () => {
    const prixHT = 100;
    const tauxTVA = 0.20;
    const TVA = calculator.multiply(prixHT, tauxTVA);
    const prixTTC = calculator.add(prixHT, TVA);
    
    expect(TVA).toBe(20);
    expect(prixTTC).toBe(120);
  });

  test('Scénario 2: Diviser un montant entre personnes', () => {
    const total = 150;
    const personnes = 3;
    const parPersonne = calculator.divide(total, personnes);
    
    expect(parPersonne).toBe(50);
  });

  test('Scénario 3: Combiner Calculator et StringUtils', () => {
    const nom = 'jean';
    const nomCapitalize = capitalize(nom);
    
    const score = calculator.add(85, 15);
    const moyenne = calculator.divide(score, 2);
    
    expect(nomCapitalize).toBe('Jean');
    expect(moyenne).toBe(50);
  });

  test('Scénario 4: Vérifier un palindrome numérique', () => {
    const nombre1 = 121;
    const nombre2 = 123;
    
    expect(isPalindrome(nombre1.toString())).toBe(true);
    expect(isPalindrome(nombre2.toString())).toBe(false);
  });

  test('Scénario 5: Calcul de réduction', () => {
    const prixOriginal = 200;
    const pourcentageReduction = 25; // 25%
    const montantReduction = calculator.divide(
      calculator.multiply(prixOriginal, pourcentageReduction), 
      100
    );
    const prixFinal = calculator.subtract(prixOriginal, montantReduction);
    
    expect(montantReduction).toBe(50);
    expect(prixFinal).toBe(150);
  });
});
