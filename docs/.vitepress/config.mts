import { defineConfig } from 'vitepress';

// 动态导入配置
const env = process.env.CONFIG_ENV || 'netlify'; // 默认使用 netlify 配置
const config = await import(`./config-${env}.mts`);

export default defineConfig({
  ...config.default,
});
