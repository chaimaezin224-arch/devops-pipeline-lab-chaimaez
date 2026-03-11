/**
 * Classe Calculator - Opérations mathématiques
 */
class Calculator {
  /**
   * Additionne deux nombres
   * @param {number} a - Premier nombre
   * @param {number} b - Deuxième nombre
   * @returns {number} Résultat de l'addition
   */
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Les arguments doivent être des nombres');
    }
    return a + b;
  }

  /**
   * Soustrait deux nombres
   * @param {number} a - Premier nombre
   * @param {number} b - Deuxième nombre
   * @returns {number} Résultat de la soustraction
   */
  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Les arguments doivent être des nombres');
    }
    return a - b;
  }

  /**
   * Multiplie deux nombres
   * @param {number} a - Premier nombre
   * @param {number} b - Deuxième nombre
   * @returns {number} Résultat de la multiplication
   */
  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Les arguments doivent être des nombres');
    }
    return a * b;
  }

  /**
   * Divise deux nombres
   * @param {number} a - Dividende
   * @param {number} b - Diviseur
   * @returns {number} Résultat de la division
   * @throws {Error} Si division par zéro
   */
  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Les arguments doivent être des nombres');
    }
    if (b === 0) {
      throw new Error('Division par zéro impossible');
    }
    return a / b;
  }
}

module.exports = Calculator;
