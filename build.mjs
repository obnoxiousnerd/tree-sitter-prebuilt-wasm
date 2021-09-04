import { $ } from 'zx';
import packageJSON from './package.json';

const buildWasm = async (pkg) =>
  await $`npx tree-sitter build-wasm ../node_modules/${pkg}`;

const packages = Object.keys(packageJSON.dependencies).filter((pkg) =>
  pkg.startsWith('tree-sitter-')
);

packages.splice(packages.indexOf('tree-sitter-typescript'), 1);
packages.push(
  'tree-sitter-typescript/tsx',
  'tree-sitter-typescript/typescript'
);

packages.map(buildWasm);
