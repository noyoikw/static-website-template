module.exports =  {
  port: 3000,
  js: {
    entries: ['index.js'],
    babelPresets: ['@babel/preset-env'],
    extname: '.bundle'
  },
  dir: {
    base: {
      src: 'src',
      dest: 'dist'
    },
    src: {
      ejs: '/ejs',
      sass: '/scss',
      js: '/js',
      assets: '/assets',
    },
    dest: {
      html: '/',
      css: '/assets/css',
      js: '/assets/js',
      assets: '/assets'
    }
  }
}
