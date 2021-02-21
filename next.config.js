module.exports = {
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com' // Twitter Profile Picture
    ]
  },

  webpack(config, options) {
    const { isServer } = options;
    if (!isServer) {
      require('./scripts/generate-sitemap');
      config.node = {
        fs: 'empty'
      };
    }
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false
          }
        }
      ]
    });

    return config;
  }
};
