module.exports = {
  version: 2,
  static: {
    // don't snapshot all of the blog
    exclude: [
      /blog\/page\/(?!(2|3))\/*/,
      /blog\/author\/(?!marcoow)\/*/,
      /blog\/20(?!22)\/*/,
      /blog\/tag\/(?!ember)\/*/,
      /blog\/tag\/.*\/page\/*/,
      /blog\/author\/.*\/page\/*/
    ]
  },
  snapshot: {
    percyCSS: `*, :before, :after {
       /*CSS transitions*/
       transition-property: none !important;
       /*CSS transforms*/
       transform: none !important;
       /*CSS animations*/
       animation: none !important;
    }`,
  },
};

