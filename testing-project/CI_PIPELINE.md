# Pipeline CI - Documentation

## 📋 Vue d'ensemble

Le fichier `.github/workflows/ci.yml` définit un pipeline **Continuous Integration** qui s'exécute automatiquement à chaque push sur GitHub.

## 🔄 Flux du Pipeline

```
┌─────────────┐
│   PUSH      │ Vous poussez le code vers GitHub
└──────┬──────┘
       │
       ▼
┌──────────────────────┐
│  Checkout le code    │ Récupère votre repository
└──────┬───────────────┘
       │
       ▼
┌──────────────────────────────┐
│  Setup Node.js (v18.x)       │ Installe l'environnement
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  npm install                 │ Installe les dépendances
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  npm run build               │ Compile le projet
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  npm test                    │ Exécute les tests
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│  ✅ Pipeline réussi          │ Si tout ok, build passé
└──────────────────────────────┘
```

## 📝 Détail des étapes

| Étape | Commande | Objectif |
|-------|----------|----------|
| **Checkout** | `actions/checkout@v3` | Télécharge votre code |
| **Setup Node.js** | `actions/setup-node@v3` | Installe Node.js v18.x |
| **Install** | `npm install` | Installe les dépendances (package.json) |
| **Build** | `npm run build` | Compile le projet (optionnel) |
| **Test** | `npm test` | Exécute tous les tests |

## ✅ Exigences minimales respectées

✓ **Se déclenche sur push** → `on: push:`  
✓ **Installer l'environnement** → `Setup Node.js`  
✓ **Compiler le projet** → `npm run build`  

## 🚀 Comment utiliser

### 1. Valider le fichier en Git

```bash
git add .github/workflows/ci.yml
git commit -m "Add CI pipeline"
git push origin main
```

### 2. Vérifier l'exécution

Allez sur GitHub et cliquez sur l'onglet **"Actions"** pour voir vos builds.

### 3. Interpréter les résultats

- 🟢 **Green** - Pipeline réussi
- 🔴 **Red** - Pipeline échoué
- 🟡 **Yellow** - En cours d'exécution

## 📊 Configuration

### Branches surveillées
```yaml
branches: [ main, develop, master ]
```

### Version Node.js
```yaml
node-version: '18.x'
```

Vous pouvez modifier ces valeurs selon vos besoins.

## 💡 Améliorations possibles

1. **Ajouter le linting** :
   ```yaml
   - name: Lint code
     run: npm run lint
   ```

2. **Tester sur plusieurs versions** :
   ```yaml
   strategy:
     matrix:
       node-version: [16.x, 18.x, 20.x]
   ```

3. **Uploader les résultats** :
   ```yaml
   - name: Upload coverage
     uses: actions/upload-artifact@v3
   ```

4. **Notifier en cas d'erreur** :
   ```yaml
   - name: Send notification
     if: failure()
     run: echo "Build failed!"
   ```

## 🔗 Ressources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Setup Action](https://github.com/actions/setup-node)
- [Checkout Action](https://github.com/actions/checkout)
