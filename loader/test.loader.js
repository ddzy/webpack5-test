module.exports = function (source) {
  const newSource = `
    /**
     * version: ${this.version}
     * webpack: ${this.webpack}
     * options: ${JSON.stringify(this.getOptions())}
     */
    ${source}
  `;

  return `module.exports = ${newSource}`;
};
