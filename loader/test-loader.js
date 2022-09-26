module.exports = function (source) {
  const options = this.getOptions();
  const _esModule = options._esModule !== undefined ? options._esModule : true;

  return `${_esModule ? "export default" : "module.exports ="} "${source}";`;
};
