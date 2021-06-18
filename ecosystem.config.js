const path = require('path');

module.exports = {
  apps : [{
    name: require('./package.json').name,
    script: path.resolve(__dirname, 'dist/app.js'),
    instances: require('os').cpus().length,
    watch: true,
    autorestart: true,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
