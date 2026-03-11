# Guide pour démarrer avec le Testing

## 🎯 Objectifs de ce projet

Apprendre et pratiquer :
- ✅ Écrire des tests unitaires
- ✅ Utiliser Jest comme framework de testing
- ✅ Comprendre les assertions
- ✅ Tester les cas d'erreur
- ✅ Mesurer la couverture de code
- ✅ Écrire des tests d'intégration

## 📚 Concepts clés

### 1. **Test Unitaire**
Test d'une fonction/méthode isolée avec des entrées et sorties prévisibles.

```javascript
test('devrait additionner deux nombres', () => {
  expect(5 + 3).toBe(8);
});
```

### 2. **Matchers Jest**
- `toBe()` - Comparaison stricte
- `toEqual()` - Comparaison profonde
- `toThrow()` - Vérifie si une fonction lève une erreur
- `toBeCloseTo()` - Pour les nombres décimaux
- `toMatch()` - Pour les regex
- `toContain()` - Pour les arrays/strings

### 3. **Hooks de test**
- `beforeEach()` - Exécuté avant chaque test
- `afterEach()` - Exécuté après chaque test
- `beforeAll()` - Exécuté une fois avant tous les tests
- `afterAll()` - Exécuté une fois après tous les tests

## 🚀 Pour commencer

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Exécuter les tests**
   ```bash
   npm test
   ```

3. **Voir la couverture**
   ```bash
   npm run test:coverage
   ```

## 💡 Exercices supplémentaires

### Exercice 1: Ajouter une fonction
Créez une nouvelle fonction `power(base, exponent)` dans `src/calculator.js` et écrivez les tests correspondants.

### Exercice 2: Tester les cas limites
Ajoutez des tests pour les cas limites (nombres très grands, très petits, etc.)

### Exercice 3: Améliorer la couverture
Visez 100% de couverture pour tous les fichiers.

### Exercice 4: Nouvelle fonctionnalité
Créez un nouveau module `src/arrayUtils.js` avec des fonctions utiles et testez-le complètement.

## 📊 Interprétation des rapports

Le rapport de couverture montre :
- **Lines** : Pourcentage de lignes exécutées
- **Statements** : Pourcentage de déclarations exécutées
- **Functions** : Pourcentage de fonctions appelées
- **Branches** : Pourcentage de branches conditionnelles testées

## 🔗 Ressources

- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
