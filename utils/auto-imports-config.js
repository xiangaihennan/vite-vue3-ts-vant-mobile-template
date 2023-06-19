import AutoImport from 'unplugin-auto-import/vite';

export default () => {
  return AutoImport({
    imports: [
      'react',
      'mobx',
      'react-router-dom',
      {
        antd: ['Button'],
      },
    ],
    dts: './src/auto-imports.d.ts',
    dirs: ['src/store'],
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    },
  });
};
