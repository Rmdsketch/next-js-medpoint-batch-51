import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals',  'next/typescript'],
  }),
  {
    ignores: ['.next/*'],
  },
  {
    rules: {
      quotes: ['error', 'single'],
      indent: ['error', 2],
      semi: ['error', 'always'],
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      }],
    },
  },
];

export default eslintConfig;
