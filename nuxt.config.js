export default {
  telemetry: true,
  mode: 'universal',
  /**
   * head配置
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Yong',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
    ],
  },
  css: ['~/assets/css/common.less']
}