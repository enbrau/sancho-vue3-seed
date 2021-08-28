import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
const path = require('path')

const port = process.env.port || process.env.npm_config_port || 9528

const mode = process.env.NODE_ENV

export default defineConfig(() => {
  require('dotenv').config({ path: `./.env.${mode}` });
  const config = {
    plugins: [
      vue(),
      // svg icon support
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port,
      strictPort: false,
      // https://github.com/http-party/node-http-proxy#options
      proxy: {
        '/mock': {
          target: `http://127.0.0.1:${port}`,
          changeOrigin: true,
          ws: true,
          secure: false,
          logLevel: 'debug',
          rewrite: path => path.replace(/\/mock/, '')
        },
        '/online': {
          target: `${process.env.VITE_HOST}`,
          changeOrigin: true,
          ws: true,
          secure: false,
          logLevel: 'debug',
          rewrite: path => path.replace(/\/online/, '')
        }
      },
      // this might cause trouble when you are coding on code server!
      // open: '/index.html',
    }
  }

  if (mode === 'development') {
    config.plugins.push(
      // https://github.com/anncwb/vite-plugin-mock/
      viteMockServe({
        mockPath: 'mock',
        supportTs: true,
        watchFiles: true,
        ignoreFiles: [],
        prodEnabled: false,
        logger: true
      }))
  }

  return config
})
