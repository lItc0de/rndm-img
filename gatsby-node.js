exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(vert|frag)$/,
          use: [`file-loader`],
        },
      ],
    },
  });
};
