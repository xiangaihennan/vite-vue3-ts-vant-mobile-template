import AutoImport from 'unplugin-auto-import/vite';

export default () => {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia',],
    dts: 'src/auto-imports.d.ts',
  });
};
