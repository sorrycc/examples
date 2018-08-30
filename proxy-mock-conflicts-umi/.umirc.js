
export default {
  history: 'hash',
  plugins: [
    ['umi-plugin-react/lib/plugins/title', {
      defaultTitle: 'aa',
    }],
  ],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    },
  },
}
