/// <reference types="vite/client" />

/* Allow side-effect CSS imports from any module path (e.g. @fontsource/*).
   vite/client already covers '*.css' but the side-effect form needs the
   wildcard to be explicit for TypeScript's verbatim module resolution. */
declare module '*.css';
