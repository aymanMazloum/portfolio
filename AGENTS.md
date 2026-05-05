# AGENTS.md

## Cursor Cloud specific instructions

This is a React 19 + Vite 7 single-page portfolio application. No backend services are required.

### Key commands

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on port 5173) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Preview prod build | `npm run preview` |

### Notes

- There are 2 pre-existing ESLint errors in `src/ThemeContext.jsx` (react-refresh and react-hooks rules). These are not blockers for the build or dev server.
- The contact form writes to Firebase Firestore (config is hardcoded in `src/firebase.js`). No local emulator needed for UI development — the form simply won't persist data if the Firebase project is inactive.
- Use `--host 0.0.0.0` flag with dev server when you need network-accessible access (e.g., `npm run dev -- --host 0.0.0.0`).
- Node.js is managed via nvm. Source it with: `export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"`
