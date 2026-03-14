# Feature Integration Surface

Add imported feature modules from your other React app in this directory.

Recommended pattern:
- Create one folder per feature (`src/features/<featureName>/`).
- Export feature entrypoints from a local `index.ts`.
- Keep shared app primitives in `src/components` and `src/hooks`.
