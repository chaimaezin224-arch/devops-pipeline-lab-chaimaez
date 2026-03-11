const { capitalize, reverseString, countWords, isPalindrome } = require('../src/stringUtils');

describe('StringUtils - Tests unitaires', () => {
  
  describe('capitalize()', () => {
    test('devrait mettre en majuscule la première lettre', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('devrait fonctionner avec une lettre majuscule existante', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    test('devrait fonctionner avec une chaîne d\'une lettre', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('devrait retourner une chaîne vide inchangée', () => {
      expect(capitalize('')).toBe('');
    });

    test('devrait lancer une erreur avec un argument non-string', () => {
      expect(() => capitalize(123)).toThrow('L\'argument doit être une chaîne');
      expect(() => capitalize(null)).toThrow('L\'argument doit être une chaîne');
    });

    test('devrait gérer les espaces au début', () => {
      expect(capitalize(' hello')).toBe(' hello');
    });
  });

  describe('reverseString()', () => {
    test('devrait inverser une chaîne simple', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('devrait inverser une chaîne avec espaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('devrait retourner une chaîne vide inchangée', () => {
      expect(reverseString('')).toBe('');
    });

    test('devrait inverser une chaîne d\'une lettre', () => {
      expect(reverseString('a')).toBe('a');
    });

    test('devrait lancer une erreur avec un argument invalide', () => {
      expect(() => reverseString(123)).toThrow('L\'argument doit être une chaîne');
    });
  });

  describe('countWords()', () => {
    test('devrait compter les mots correctement', () => {
      expect(countWords('Hello world JavaScript')).toBe(3);
    });

    test('devrait retourner 1 pour une seule mot', () => {
      expect(countWords('Hello')).toBe(1);
    });

    test('devrait retourner 0 pour une chaîne vide', () => {
      expect(countWords('')).toBe(0);
    });

    test('devrait retourner 0 pour des espaces uniquement', () => {
      expect(countWords('   ')).toBe(0);
    });

    test('devrait gérer les espaces multiples', () => {
      expect(countWords('Hello    world')).toBe(2);
    });

    test('devrait lancer une erreur avec un argument invalide', () => {
      expect(() => countWords(123)).toThrow('L\'argument doit être une chaîne');
    });
  });

  describe('isPalindrome()', () => {
    test('devrait reconnaître un palindrome simple', () => {
      expect(isPalindrome('radar')).toBe(true);
    });

    test('devrait reconnaître un autre palindrome', () => {
      expect(isPalindrome('level')).toBe(true);
    });

    test('devrait retourner false pour un non-palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('devrait ignorer les majuscules', () => {
      expect(isPalindrome('Radar')).toBe(true);
      expect(isPalindrome('LEVEL')).toBe(true);
    });

    test('devrait ignorer les espaces', () => {
      expect(isPalindrome('a b a')).toBe(true);
      expect(isPalindrome('race car')).toBe(true);
    });

    test('devrait reconnaître une lettre comme palindrome', () => {
      expect(isPalindrome('a')).toBe(true);
    });

    test('devrait lancer une erreur avec un argument invalide', () => {
      expect(() => isPalindrome(123)).toThrow('L\'argument doit être une chaîne');
    });
  });

  describe('Tests d\'intégration StringUtils', () => {
    test('devrait combiner plusieurs fonctions', () => {
      const original = 'hello';
      const capitalized = capitalize(original);
      const reversed = reverseString(capitalized);
      expect(reversed).toBe('olleh');
    });

    test('devrait gérer une phrase complexe', () => {
      const phrase = 'A man a plan a canal Panama';
      expect(isPalindrome(phrase)).toBe(true);
      expect(countWords(phrase)).toBe(7);
    });
  });
});
