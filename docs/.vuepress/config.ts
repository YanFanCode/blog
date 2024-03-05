/*
 * @LastEditors: yanfan
 * @LastEditTime: 2024-03-05 23:16:22
 */
import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import orderedHeader from 'vuepress-plugin-ordered-header'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'My Konwledge Base',
  description: 'Personal frontend knowledge base',
  theme,

  plugins: [orderedHeader],

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6]
    }
  }

  // Enable it with pwa
  // shouldPrefetch: false,
})
