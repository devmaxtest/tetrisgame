# Tetris Max

Tetris Max est un jeu de Tetris moderne développé avec **React**, **TypeScript** et **Vite**.  
Objectif : fournir un jeu simple, fluide et proprement architecturé, prêt pour déploiement en production (Hetzner + Nginx).

---

## 🧱 Stack technique

- **Framework** : React 18 + TypeScript
- **Bundler** : Vite
- **Style** : Tailwind CSS (ou CSS modules selon implémentation finale)
- **Tests** : Vitest + Testing Library
- **Qualité** : ESLint + Prettier

---

## 🎮 Fonctionnalités

- Grille Tetris **10 × 20**
- 7 tetrominos classiques : I, O, T, J, L, S, Z
- Contrôles clavier :
  - ← → : déplacer la pièce
  - ↓ : descente accélérée
  - ↑ ou Space : rotation
  - (Optionnel) touche dédiée pour “drop” instantané
- Score :
  - 1 ligne : +100 pts
  - 2 lignes : +300 pts
  - 3 lignes : +500 pts
  - 4 lignes (Tetris) : +800 pts
- Niveaux :
  - niveau initial 1
  - montée de niveau après X lignes complétées (ex: 10)
  - augmentation progressive de la vitesse
- UI :
  - zone de jeu centrée
  - panneau latéral : score, niveau, lignes, prochaine pièce
  - thème sombre, responsive (desktop + mobile)
- États :
  - Playing
  - Paused
  - Game Over

---

## 📂 Structure du projet

```txt
src/
  main.tsx
  App.tsx
  components/
    GameBoard.tsx
    ScorePanel.tsx
    ControlsHint.tsx
  game/
    types.ts
    constants.ts
    logic.ts
    reducer.ts
  hooks/
    useTetrisGame.ts
  styles/
    index.css (ou globals.css)
