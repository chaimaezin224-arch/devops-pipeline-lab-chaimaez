/**
 * Utilitaires pour manipulation de chaînes de caractères
 */

/**
 * Met la première lettre en majuscule
 * @param {string} str - Chaîne à modifier
 * @returns {string} Chaîne modifiée
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new Error('L\'argument doit être une chaîne');
  }
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Inverse une chaîne de caractères
 * @param {string} str - Chaîne à inverser
 * @returns {string} Chaîne inversée
 */
function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('L\'argument doit être une chaîne');
  }
  return str.split('').reverse().join('');
}

/**
 * Compte le nombre de mots dans une chaîne
 * @param {string} str - Chaîne à analyser
 * @returns {number} Nombre de mots
 */
function countWords(str) {
  if (typeof str !== 'string') {
    throw new Error('L\'argument doit être une chaîne');
  }
  const trimmed = str.trim();
  if (trimmed.length === 0) return 0;
  return trimmed.split(/\s+/).length;
}

/**
 * Vérifie si une chaîne est un palindrome
 * @param {string} str - Chaîne à vérifier
 * @returns {boolean} True si palindrome, false sinon
 */
function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('L\'argument doit être une chaîne');
  }
  const cleaned = str.toLowerCase().replace(/\s+/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

module.exports = {
  capitalize,
  reverseString,
  countWords,
  isPalindrome
};
