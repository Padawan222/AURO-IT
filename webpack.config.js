const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: {
    // main

    main1: path.join(__dirname, "src/index.js"),
    main2: path.join(__dirname, "src/index/création-d'app/création-d'app.js"),
    main3: path.join(
      __dirname,
      "src/index/création-de-site-internet/création-de-site-internet.js"
    ),
    main4: path.join(
      __dirname,
      "src/index/gestions-de-projet-et-de-programme/gestions-de-projet-et-de-programme.js"
    ),
    main5: path.join(__dirname, "src/index/grand-comptes/grand-comptes.js"),
    main6: path.join(__dirname, "src/index/nos-compétences/nos-compétences.js"),
    main7: path.join(__dirname, "src/index/nos-valeurs/nos-valeurs.js"),
    main8: path.join(__dirname, "src/index/notre-équipe/notre-équipe.js"),
    main9: path.join(__dirname, "src/index/notre-réseau/notre-réseau.js"),
    main10: path.join(
      __dirname,
      "src/index/pme-organisations/pme-organisations.js"
    ),
    main11: path.join(
      __dirname,
      "src/index/stratégie-digital/stratégie-digital.js"
    ),
    main12: path.join(
      __dirname,
      "src/index/tpe-associations/tpe-associations.js"
    ),
    main13: path.join(
      __dirname,
      "src/index/comment-booster-mon-business-avec-le-digital/comment-booster-mon-business-avec-le-digital.js"
    ),
    main14: path.join(
      __dirname,
      "src/index/comment-exploiter-ma-data/comment-exploiter-ma-data.js"
    ),
    main15: path.join(
      __dirname,
      "src/index/j'ai-un-projet-de-migration-de-données/j'ai-un-projet-de-migration-de-données.js"
    ),
    main16: path.join(
      __dirname,
      "src/index/j'ai-un-projet-de-transformation-digital/j'ai-un-projet-de-transformation-digital.js"
    ),
    main17: path.join(
      __dirname,
      "src/index/je-change-mon-erp/je-change-mon-erp.js"
    ),
    main18: path.join(
      __dirname,
      "src/index/que-peut-faire-le-digital-pour-moi/que-peut-faire-le-digital-pour-moi.js"
    ),
    main19: path.join(__dirname, "src/index/site-internet/site-internet.js"),
    main20: path.join(
      __dirname,
      "src/index/site-internet-applications-mobiles/site-internet-applications-mobiles.js"
    ),

    // catalan

    catalan1: path.join(__dirname, "src/catalan/catalan.js"),
    catalan2: path.join(
      __dirname,
      "src/catalan/cat-création-d'app/cat-création-d'app.js"
    ),
    catalan3: path.join(
      __dirname,
      "src/catalan/cat-création-de-site-internet/cat-création-de-site-internet.js"
    ),
    catalan4: path.join(
      __dirname,
      "src/catalan/cat-gestions-de-projet-et-de-programme/cat-gestions-de-projet-et-de-programme.js"
    ),
    catalan5: path.join(
      __dirname,
      "src/catalan/cat-grand-comptes/cat-grand-comptes.js"
    ),
    catalan6: path.join(
      __dirname,
      "src/catalan/cat-nos-compétences/cat-nos-compétences.js"
    ),
    catalan7: path.join(
      __dirname,
      "src/catalan/cat-nos-valeurs/cat-nos-valeurs.js"
    ),
    catalan8: path.join(
      __dirname,
      "src/catalan/cat-notre-équipe/cat-notre-équipe.js"
    ),
    catalan9: path.join(
      __dirname,
      "src/catalan/cat-notre-réseau/cat-notre-réseau.js"
    ),
    catalan10: path.join(
      __dirname,
      "src/catalan/cat-pme-organisations/cat-pme-organisations.js"
    ),
    catalan11: path.join(
      __dirname,
      "src/catalan/cat-stratégie-digital/cat-stratégie-digital.js"
    ),
    catalan12: path.join(
      __dirname,
      "src/catalan/cat-tpe-associations/cat-tpe-associations.js"
    ),
    catalan13: path.join(
      __dirname,
      "src/catalan/cat-comment-booster-mon-business-avec-le-digital/cat-comment-booster-mon-business-avec-le-digital.js"
    ),
    catalan14: path.join(
      __dirname,
      "src/catalan/cat-comment-exploiter-ma-data/cat-comment-exploiter-ma-data.js"
    ),
    catalan15: path.join(
      __dirname,
      "src/catalan/cat-j'ai-un-projet-de-migration-de-données/cat-j'ai-un-projet-de-migration-de-données.js"
    ),
    catalan16: path.join(
      __dirname,
      "src/catalan/cat-j'ai-un-projet-de-transformation-digital/cat-j'ai-un-projet-de-transformation-digital.js"
    ),
    catalan17: path.join(
      __dirname,
      "src/catalan/cat-je-change-mon-erp/cat-je-change-mon-erp.js"
    ),
    catalan18: path.join(
      __dirname,
      "src/catalan/cat-que-peut-faire-le-digital-pour-moi/cat-que-peut-faire-le-digital-pour-moi.js"
    ),
    catalan19: path.join(
      __dirname,
      "src/catalan/cat-site-internet/cat-site-internet.js"
    ),
    catalan20: path.join(
      __dirname,
      "src/catalan/cat-site-internet-applications-mobiles/cat-site-internet-applications-mobiles.js"
    ),

    // english

    english1: path.join(__dirname, "src/english/english.js"),
    english2: path.join(
      __dirname,
      "src/english/eng-création-d'app/eng-création-d'app.js"
    ),
    english3: path.join(
      __dirname,
      "src/english/eng-création-de-site-internet/eng-création-de-site-internet.js"
    ),
    english4: path.join(
      __dirname,
      "src/english/eng-gestions-de-projet-et-de-programme/eng-gestions-de-projet-et-de-programme.js"
    ),
    english5: path.join(
      __dirname,
      "src/english/eng-grand-comptes/eng-grand-comptes.js"
    ),
    english6: path.join(
      __dirname,
      "src/english/eng-nos-compétences/eng-nos-compétences.js"
    ),
    english7: path.join(
      __dirname,
      "src/english/eng-nos-valeurs/eng-nos-valeurs.js"
    ),
    english8: path.join(
      __dirname,
      "src/english/eng-notre-équipe/eng-notre-équipe.js"
    ),
    english9: path.join(
      __dirname,
      "src/english/eng-notre-réseau/eng-notre-réseau.js"
    ),
    english10: path.join(
      __dirname,
      "src/english/eng-pme-organisations/eng-pme-organisations.js"
    ),
    english11: path.join(
      __dirname,
      "src/english/eng-stratégie-digital/eng-stratégie-digital.js"
    ),
    english12: path.join(
      __dirname,
      "src/english/eng-tpe-associations/eng-tpe-associations.js"
    ),
    english13: path.join(
      __dirname,
      "src/english/eng-comment-booster-mon-business-avec-le-digital/eng-comment-booster-mon-business-avec-le-digital.js"
    ),
    english14: path.join(
      __dirname,
      "src/english/eng-comment-exploiter-ma-data/eng-comment-exploiter-ma-data.js"
    ),
    english15: path.join(
      __dirname,
      "src/english/eng-j'ai-un-projet-de-migration-de-données/eng-j'ai-un-projet-de-migration-de-données.js"
    ),
    english16: path.join(
      __dirname,
      "src/english/eng-j'ai-un-projet-de-transformation-digital/eng-j'ai-un-projet-de-transformation-digital.js"
    ),
    english17: path.join(
      __dirname,
      "src/english/eng-je-change-mon-erp/eng-je-change-mon-erp.js"
    ),
    english18: path.join(
      __dirname,
      "src/english/eng-que-peut-faire-le-digital-pour-moi/eng-que-peut-faire-le-digital-pour-moi.js"
    ),
    english19: path.join(
      __dirname,
      "src/english/eng-site-internet/eng-site-internet.js"
    ),
    english20: path.join(
      __dirname,
      "src/english/eng-site-internet-applications-mobiles/eng-site-internet-applications-mobiles.js"
    ),

    // spanish

    spanish1: path.join(__dirname, "src/spanish/spanish.js"),
    spanish2: path.join(
      __dirname,
      "src/spanish/spa-création-d'app/spa-création-d'app.js"
    ),
    spanish3: path.join(
      __dirname,
      "src/spanish/spa-création-de-site-internet/spa-création-de-site-internet.js"
    ),
    spanish4: path.join(
      __dirname,
      "src/spanish/spa-gestions-de-projet-et-de-programme/spa-gestions-de-projet-et-de-programme.js"
    ),
    spanish5: path.join(
      __dirname,
      "src/spanish/spa-grand-comptes/spa-grand-comptes.js"
    ),
    spanish6: path.join(
      __dirname,
      "src/spanish/spa-nos-compétences/spa-nos-compétences.js"
    ),
    spanish7: path.join(
      __dirname,
      "src/spanish/spa-nos-valeurs/spa-nos-valeurs.js"
    ),
    spanish8: path.join(
      __dirname,
      "src/spanish/spa-notre-équipe/spa-notre-équipe.js"
    ),
    spanish9: path.join(
      __dirname,
      "src/spanish/spa-notre-réseau/spa-notre-réseau.js"
    ),
    spanish10: path.join(
      __dirname,
      "src/spanish/spa-pme-organisations/spa-pme-organisations.js"
    ),
    spanish11: path.join(
      __dirname,
      "src/spanish/spa-stratégie-digital/spa-stratégie-digital.js"
    ),
    spanish12: path.join(
      __dirname,
      "src/spanish/spa-tpe-associations/spa-tpe-associations.js"
    ),
    spanish13: path.join(
      __dirname,
      "src/spanish/spa-comment-booster-mon-business-avec-le-digital/spa-comment-booster-mon-business-avec-le-digital.js"
    ),
    spanish14: path.join(
      __dirname,
      "src/spanish/spa-comment-exploiter-ma-data/spa-comment-exploiter-ma-data.js"
    ),
    spanish15: path.join(
      __dirname,
      "src/spanish/spa-j'ai-un-projet-de-migration-de-données/spa-j'ai-un-projet-de-migration-de-données.js"
    ),
    spanish16: path.join(
      __dirname,
      "src/spanish/spa-j'ai-un-projet-de-transformation-digital/spa-j'ai-un-projet-de-transformation-digital.js"
    ),
    spanish17: path.join(
      __dirname,
      "src/spanish/spa-je-change-mon-erp/spa-je-change-mon-erp.js"
    ),
    spanish18: path.join(
      __dirname,
      "src/spanish/spa-que-peut-faire-le-digital-pour-moi/spa-que-peut-faire-le-digital-pour-moi.js"
    ),
    spanish19: path.join(
      __dirname,
      "src/spanish/spa-site-internet/spa-site-internet.js"
    ),
    spanish20: path.join(
      __dirname,
      "src/spanish/spa-site-internet-applications-mobiles/spa-site-internet-applications-mobiles.js"
    ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  // french

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main1"],
    }),
    new HtmlWebpackPlugin({
      filename: "création-d'app.html",
      template: "./src/index/création-d'app/création-d'app.html",
      chunks: ["main2"],
    }),
    new HtmlWebpackPlugin({
      filename: "création-de-site-internet.html",
      template:
        "./src/index/création-de-site-internet/création-de-site-internet.html",
      chunks: ["main3"],
    }),
    new HtmlWebpackPlugin({
      filename: "gestions-de-projet-et-de-programme.html",
      template:
        "./src/index/gestions-de-projet-et-de-programme/gestions-de-projet-et-de-programme.html",
      chunks: ["main4"],
    }),
    new HtmlWebpackPlugin({
      filename: "grand-comptes.html",
      template: "./src/index/grand-comptes/grand-comptes.html",
      chunks: ["main5"],
    }),
    new HtmlWebpackPlugin({
      filename: "nos-compétences.html",
      template: "./src/index/nos-compétences/nos-compétences.html",
      chunks: ["main6"],
    }),
    new HtmlWebpackPlugin({
      filename: "nos-valeurs.html",
      template: "./src/index/nos-valeurs/nos-valeurs.html",
      chunks: ["main7"],
    }),
    new HtmlWebpackPlugin({
      filename: "notre-équipe.html",
      template: "./src/index/notre-équipe/notre-équipe.html",
      chunks: ["main8"],
    }),
    new HtmlWebpackPlugin({
      filename: "notre-réseau.html",
      template: "./src/index/notre-réseau/notre-réseau.html",
      chunks: ["main9"],
    }),
    new HtmlWebpackPlugin({
      filename: "pme-organisations.html",
      template: "./src/index/pme-organisations/pme-organisations.html",
      chunks: ["main10"],
    }),
    new HtmlWebpackPlugin({
      filename: "stratégie-digital.html",
      template: "./src/index/stratégie-digital/stratégie-digital.html",
      chunks: ["main11"],
    }),
    new HtmlWebpackPlugin({
      filename: "tpe-associations.html",
      template: "./src/index/tpe-associations/tpe-associations.html",
      chunks: ["main12"],
    }),
    new HtmlWebpackPlugin({
      filename: "comment-booster-mon-business-avec-le-digital.html",
      template:
        "./src/index/comment-booster-mon-business-avec-le-digital/comment-booster-mon-business-avec-le-digital.html",
      chunks: ["main13"],
    }),
    new HtmlWebpackPlugin({
      filename: "comment-exploiter-ma-data.html",
      template:
        "./src/index/comment-exploiter-ma-data/comment-exploiter-ma-data.html",
      chunks: ["main14"],
    }),
    new HtmlWebpackPlugin({
      filename: "j'ai-un-projet-de-migration-de-données.html",
      template:
        "./src/index/j'ai-un-projet-de-migration-de-données/j'ai-un-projet-de-migration-de-données.html",
      chunks: ["main15"],
    }),
    new HtmlWebpackPlugin({
      filename: "j'ai-un-projet-de-transformation-digital.html",
      template:
        "./src/index/j'ai-un-projet-de-transformation-digital/j'ai-un-projet-de-transformation-digital.html",
      chunks: ["main16"],
    }),
    new HtmlWebpackPlugin({
      filename: "je-change-mon-erp.html",
      template: "./src/index/je-change-mon-erp/je-change-mon-erp.html",
      chunks: ["main17"],
    }),
    new HtmlWebpackPlugin({
      filename: "que-peut-faire-le-digital-pour-moi.html",
      template:
        "./src/index/que-peut-faire-le-digital-pour-moi/que-peut-faire-le-digital-pour-moi.html",
      chunks: ["main18"],
    }),
    new HtmlWebpackPlugin({
      filename: "site-internet.html",
      template: "./src/index/site-internet/site-internet.html",
      chunks: ["main19"],
    }),
    new HtmlWebpackPlugin({
      filename: "site-internet-applications-mobiles.html",
      template:
        "./src/index/site-internet-applications-mobiles/site-internet-applications-mobiles.html",
      chunks: ["main20"],
    }),

    // catalan

    new HtmlWebpackPlugin({
      filename: "catalan.html",
      template: "./src/catalan/catalan.html",
      chunks: ["catalan1"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-création-d'app.html",
      template: "./src/catalan/cat-création-d'app/cat-création-d'app.html",
      chunks: ["catalan2"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-création-de-site-internet.html",
      template:
        "./src/catalan/cat-création-de-site-internet/cat-création-de-site-internet.html",
      chunks: ["catalan3"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-gestions-de-projet-et-de-programme.html",
      template:
        "./src/catalan/cat-gestions-de-projet-et-de-programme/cat-gestions-de-projet-et-de-programme.html",
      chunks: ["catalan4"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-grand-comptes.html",
      template: "./src/catalan/cat-grand-comptes/cat-grand-comptes.html",
      chunks: ["catalan5"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-nos-compétences.html",
      template: "./src/catalan/cat-nos-compétences/cat-nos-compétences.html",
      chunks: ["catalan6"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-nos-valeurs.html",
      template: "./src/catalan/cat-nos-valeurs/cat-nos-valeurs.html",
      chunks: ["catalan7"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-notre-équipe.html",
      template: "./src/catalan/cat-notre-équipe/cat-notre-équipe.html",
      chunks: ["catalan8"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-notre-réseau.html",
      template: "./src/catalan/cat-notre-réseau/cat-notre-réseau.html",
      chunks: ["main9"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-pme-organisations.html",
      template:
        "./src/catalan/cat-pme-organisations/cat-pme-organisations.html",
      chunks: ["catalan10"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-stratégie-digital.html",
      template:
        "./src/catalan/cat-stratégie-digital/cat-stratégie-digital.html",
      chunks: ["catalan11"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-tpe-associations.html",
      template: "./src/catalan/cat-tpe-associations/cat-tpe-associations.html",
      chunks: ["catalan12"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-comment-booster-mon-business-avec-le-digital.html",
      template:
        "./src/catalan/cat-comment-booster-mon-business-avec-le-digital/cat-comment-booster-mon-business-avec-le-digital.html",
      chunks: ["catalan13"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-comment-exploiter-ma-data.html",
      template:
        "./src/catalan/cat-comment-exploiter-ma-data/cat-comment-exploiter-ma-data.html",
      chunks: ["catalan14"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-j'ai-un-projet-de-migration-de-données.html",
      template:
        "./src/catalan/cat-j'ai-un-projet-de-migration-de-données/cat-j'ai-un-projet-de-migration-de-données.html",
      chunks: ["catalan15"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-j'ai-un-projet-de-transformation-digital.html",
      template:
        "./src/catalan/cat-j'ai-un-projet-de-transformation-digital/cat-j'ai-un-projet-de-transformation-digital.html",
      chunks: ["catalan16"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-je-change-mon-erp.html",
      template:
        "./src/catalan/cat-je-change-mon-erp/cat-je-change-mon-erp.html",
      chunks: ["catalan17"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-que-peut-faire-le-digital-pour-moi.html",
      template:
        "./src/catalan/cat-que-peut-faire-le-digital-pour-moi/cat-que-peut-faire-le-digital-pour-moi.html",
      chunks: ["catalan18"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-site-internet.html",
      template: "./src/catalan/cat-site-internet/cat-site-internet.html",
      chunks: ["catalan19"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-site-internet-applications-mobiles.html",
      template:
        "./src/catalan/cat-site-internet-applications-mobiles/cat-site-internet-applications-mobiles.html",
      chunks: ["catalan20"],
    }),

    // english

    new HtmlWebpackPlugin({
      filename: "english.html",
      template: "./src/english/english.html",
      chunks: ["english1"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-création-d'app.html",
      template: "./src/english/eng-création-d'app/eng-création-d'app.html",
      chunks: ["english2"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-création-de-site-internet.html",
      template:
        "./src/english/eng-création-de-site-internet/eng-création-de-site-internet.html",
      chunks: ["english3"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-gestions-de-projet-et-de-programme.html",
      template:
        "./src/english/eng-gestions-de-projet-et-de-programme/eng-gestions-de-projet-et-de-programme.html",
      chunks: ["english4"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-grand-comptes.html",
      template: "./src/english/eng-grand-comptes/eng-grand-comptes.html",
      chunks: ["english5"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-nos-compétences.html",
      template: "./src/english/eng-nos-compétences/eng-nos-compétences.html",
      chunks: ["english6"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-nos-valeurs.html",
      template: "./src/english/eng-nos-valeurs/eng-nos-valeurs.html",
      chunks: ["english7"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-notre-équipe.html",
      template: "./src/english/eng-notre-équipe/eng-notre-équipe.html",
      chunks: ["english8"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-notre-réseau.html",
      template: "./src/english/eng-notre-réseau/eng-notre-réseau.html",
      chunks: ["english9"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-pme-organisations.html",
      template:
        "./src/english/eng-pme-organisations/eng-pme-organisations.html",
      chunks: ["english10"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-stratégie-digital.html",
      template:
        "./src/english/eng-stratégie-digital/eng-stratégie-digital.html",
      chunks: ["english11"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-tpe-associations.html",
      template: "./src/english/eng-tpe-associations/eng-tpe-associations.html",
      chunks: ["english12"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-comment-booster-mon-business-avec-le-digital.html",
      template:
        "./src/english/eng-comment-booster-mon-business-avec-le-digital/eng-comment-booster-mon-business-avec-le-digital.html",
      chunks: ["english13"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-comment-exploiter-ma-data.html",
      template:
        "./src/english/eng-comment-exploiter-ma-data/eng-comment-exploiter-ma-data.html",
      chunks: ["english14"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-j'ai-un-projet-de-migration-de-données.html",
      template:
        "./src/english/eng-j'ai-un-projet-de-migration-de-données/eng-j'ai-un-projet-de-migration-de-données.html",
      chunks: ["english15"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-j'ai-un-projet-de-transformation-digital.html",
      template:
        "./src/english/eng-j'ai-un-projet-de-transformation-digital/eng-j'ai-un-projet-de-transformation-digital.html",
      chunks: ["english16"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-je-change-mon-erp.html",
      template:
        "./src/english/eng-je-change-mon-erp/eng-je-change-mon-erp.html",
      chunks: ["english17"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-que-peut-faire-le-digital-pour-moi.html",
      template:
        "./src/english/eng-que-peut-faire-le-digital-pour-moi/eng-que-peut-faire-le-digital-pour-moi.html",
      chunks: ["english18"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-site-internet.html",
      template: "./src/english/eng-site-internet/eng-site-internet.html",
      chunks: ["english19"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-site-internet-applications-mobiles.html",
      template:
        "./src/english/eng-site-internet-applications-mobiles/eng-site-internet-applications-mobiles.html",
      chunks: ["english20"],
    }),

    // spanish

    new HtmlWebpackPlugin({
      filename: "spanish.html",
      template: "./src/spanish/spanish.html",
      chunks: ["spanish"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-création-d'app.html",
      template: "./src/spanish/spa-création-d'app/spa-création-d'app.html",
      chunks: ["spanish2"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-création-de-site-internet.html",
      template:
        "./src/spanish/spa-création-de-site-internet/spa-création-de-site-internet.html",
      chunks: ["spanish3"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-gestions-de-projet-et-de-programme.html",
      template:
        "./src/spanish/spa-gestions-de-projet-et-de-programme/spa-gestions-de-projet-et-de-programme.html",
      chunks: ["spanish4"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-grand-comptes.html",
      template: "./src/spanish/spa-grand-comptes/spa-grand-comptes.html",
      chunks: ["spanish5"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-nos-compétences.html",
      template: "./src/spanish/spa-nos-compétences/spa-nos-compétences.html",
      chunks: ["spanish6"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-nos-valeurs.html",
      template: "./src/spanish/spa-nos-valeurs/spa-nos-valeurs.html",
      chunks: ["spanish7"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-notre-équipe.html",
      template: "./src/spanish/spa-notre-équipe/spa-notre-équipe.html",
      chunks: ["spanish8"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-notre-réseau.html",
      template: "./src/spanish/spa-notre-réseau/spa-notre-réseau.html",
      chunks: ["spanish9"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-pme-organisations.html",
      template:
        "./src/spanish/spa-pme-organisations/spa-pme-organisations.html",
      chunks: ["spanish10"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-stratégie-digital.html",
      template:
        "./src/spanish/spa-stratégie-digital/spa-stratégie-digital.html",
      chunks: ["spanish11"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-tpe-associations.html",
      template: "./src/spanish/spa-tpe-associations/spa-tpe-associations.html",
      chunks: ["spanish12"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-comment-booster-mon-business-avec-le-digital.html",
      template:
        "./src/spanish/spa-comment-booster-mon-business-avec-le-digital/spa-comment-booster-mon-business-avec-le-digital.html",
      chunks: ["spanish13"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-comment-exploiter-ma-data.html",
      template:
        "./src/spanish/spa-comment-exploiter-ma-data/spa-comment-exploiter-ma-data.html",
      chunks: ["spanish14"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-j'ai-un-projet-de-migration-de-données.html",
      template:
        "./src/spanish/spa-j'ai-un-projet-de-migration-de-données/spa-j'ai-un-projet-de-migration-de-données.html",
      chunks: ["spanish15"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-j'ai-un-projet-de-transformation-digital.html",
      template:
        "./src/spanish/spa-j'ai-un-projet-de-transformation-digital/spa-j'ai-un-projet-de-transformation-digital.html",
      chunks: ["spanish16"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-je-change-mon-erp.html",
      template:
        "./src/spanish/spa-je-change-mon-erp/spa-je-change-mon-erp.html",
      chunks: ["spanish17"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-que-peut-faire-le-digital-pour-moi.html",
      template:
        "./src/spanish/spa-que-peut-faire-le-digital-pour-moi/spa-que-peut-faire-le-digital-pour-moi.html",
      chunks: ["spanish18"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-site-internet.html",
      template: "./src/spanish/spa-site-internet/spa-site-internet.html",
      chunks: ["spanish19"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-site-internet-applications-mobiles.html",
      template:
        "./src/spanish/spa-site-internet-applications-mobiles/spa-site-internet-applications-mobiles.html",
      chunks: ["spanish20"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "assets/images/[name][ext]",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  stats: "maximal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: true,
    static: path.resolve(__dirname, "./dist"),
    watchFiles: ["./src/**"],
    port: 4001,
    hot: true,
  },
};
