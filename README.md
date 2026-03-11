# Projet de Testing

Un petit projet pour apprendre et pratiquer le testing en JavaScript avec Jest.

## 📁 Structure du projet

```
testing-project/
├── src/                 # Code source
│   ├── calculator.js    # Classe Calculator
│   ├── stringUtils.js   # Utilitaires de chaînes
│   └── index.js         # Point d'entrée
├── __tests__/           # Tests unitaires
│   ├── calculator.test.js
│   └── stringUtils.test.js
├── tests/               # Tests d'intégration
├── package.json         # Dépendances
├── jest.config.js       # Configuration Jest
└── README.md            # Documentation
```

## 🚀 Installation

```bash
npm install
```

## 🧪 Exécuter les tests

```bash
# Lancer tous les tests
npm test

# Lancer les tests en mode watch
npm run test:watch

# Générer un rapport de couverture
npm run test:coverage
```

## 📝 Modules disponibles

### Calculator
- `add(a, b)` - Addition
- `subtract(a, b)` - Soustraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division

### StringUtils
- `capitalize(str)` - Mettre en majuscule
- `reverseString(str)` - Inverser une chaîne
- `countWords(str)` - Compter les mots
- `isPalindrome(str)` - Vérifier si palindrome

## 📖 Apprendre avec ce projet

Ce projet couvre :
- ✅ Tests unitaires basiques
- ✅ Assertions et matchers Jest
- ✅ Gestion des erreurs
- ✅ Rapports de couverture
- ✅ Bonnes pratiques de testing
