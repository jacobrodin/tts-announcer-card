import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/tts-announcer-card.ts',
  output: {
    file: 'dist/tts-announcer-card.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    typescript(),
    terser()
  ]
};