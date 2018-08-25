const {transformFileSync} = require('@babel/core');
const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const write = require('write');

async function build() {
  const input = 'input.js';
  const {code: babelOutput} = transformFileSync(input);
  const {code: rollupOutput} = await rollup({
    external: id => /^core-js/.test(id),
    input,
    plugins: [babel()],
  }).then(bundle => bundle.generate({format: 'es'}));
  write.sync('output/babel.js', babelOutput);
  write.sync('output/rollup.js', rollupOutput);
}
build();
