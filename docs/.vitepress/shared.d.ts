// docs/.vitepress/shared.d.ts
import 'vitepress';

declare module 'vitepress' {
  interface ThemeConfig {
    head?: Array<[string, Record<string, string>]>;
  }
}