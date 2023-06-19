import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 自动引入组件
import autoImportsConfig from './auto-imports-config';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// css
import UnoCSS from 'unocss/vite';
import pxtorem from 'postcss-pxtorem';
// https://vitejs.dev/config/
// const envFiles = {
//   dev: './env/.env.dev',
//   qa: './env.env.qa',
//   sim: './env.env.sim',
//   online: './env.env.online',
// };

// function loadEnv(mode) {
//   const envFile = envFiles[process.env.BUILD_ENV || 'dev'];
//   console.log('process.env.BUILD_ENV: ', process.env.BUILD_ENV);
//   console.log('envFile: ', envFile);
//   // return require('dotenv').config({ path: envFile }).parsed;
// }
export default ({ mode }) => {
  console.log('mode: ', mode);
  // const env = loadEnv(mode);
  return defineConfig({
    plugins: [
      vue(),
      autoImportsConfig(),
      Components({
        resolvers: [VantResolver()],
      }),
      UnoCSS(),
    ],
    css: {
      preprocessorOptions: {},
      postcss: {
        plugins: [
          pxtorem({
            rootValue({ file }) {
              return file.indexOf('vant') !== -1 ? 37.5 : 75;
            }, // 设置 `html` 文字大小为100px, 这样 `1rem` 等于多少PX
            // rootValue: 75,
            propList: ['*', '!border*'], // 属性列表,*表示全部,!表示不转换border属性
            // exclude: /test/, // 不需要转换的样式
            minPixelValue: 2, // 最低转化为PX值
            mediaQuery: true, // 媒体查询中同样转换
          }),
        ],
      },
    },
    server: {
      open: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@store': resolve(__dirname, './src/store'),
        '@views': resolve(__dirname, './src/views'),
        '@assets': resolve(__dirname, './src/assets'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@layout': resolve(__dirname, './src/layout'),
        '@env': resolve(__dirname, './src/env.js'),
      },
    },
    envDir: './env',
    define: {
      // 'process.env': Object.keys(env).reduce((acc, key) => {
      //   acc[key] = JSON.stringify(env[key]);
      //   return acc;
      // }, {}),
    },
  });
};
