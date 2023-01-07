// var prettyjson = require('prettyjson');

const Logger = {

  debug(message) {
    console.debug(`[Debug] ${message}`);
  },

  error(message) {
    console.error(`[Error] ${message}`);
  },

  info(message) {
    console.info(`[Info] ${message}`);
  },

  log(message) {
    console.log(`[Log] ${message}`);
  },

  logTable(data, columns = null) {
    if (columns) {
      console.table(data, columns);
    } else {
      console.table(data);
    }
  },

  // pretty (data, options = {}, indent = 0) {
  //   console.log(prettyjson.render(data,options, indent))
  // },

  rule() {
    console.info('--------------------------------------------------')
  },

  warn(message) {
    console.warn(`[Warn] ${message}`);
  },

  write(type, message) {
    console.log(`[${type}] ${message}`);
  }

}

module.exports = Logger;
