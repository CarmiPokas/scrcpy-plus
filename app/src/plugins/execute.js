import { createApp } from 'vue'
const app = createApp({})

const execute = {
    install(app, options) {
      // configure the app
    }
}

app.use(execute, {
  /* optional options */
})