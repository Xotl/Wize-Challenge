const mongoose = require('mongoose')


/* var createConnectionString = function (conf) {
  // 'mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]';
  var str = 'mongodb://';

  if (conf.user && conf.password)
    str = str+conf.user + ':' + conf.password + '@';

  conf.servers.forEach(function (v, i, a) {
    var host = v[0],
        port = v[1];

    str = str+host+':'+port;

    if (i < conf.servers.length-1) {
      str=str+',';
    }
  });

  if (!conf.database || typeof conf.database !== "string" || conf.database.length === 0) {
    console.error('=> Database name should be nonempty string');
    process.exit(1);
  }

  str = str + '/' + conf.database;

  return str;
};

*/



module.exports = {
  mongooseFind: model => {
    return new Promise( (resolve, reject) => {
      model.find(function (err, person) {
        if (err) {
          reject(err)
        }
        resolve(person)
      })
    } )

  }

  // createConnectionString: conf => {
  //   var login = ''
      
  //   if (conf.user && conf.password) {
  //     login = conf.user + ':' + conf.password + '@'
  //   }

  //   if (!Array.isArray(conf.servers) || conf.servers.length < 1) {
  //     console.error('=> Must provide at least one Database server');
  //     process.exit(1);
  //   }

  //   if (typeof conf.database !== "string" || conf.database.length === 0) {
  //     console.error('=> Database name should be nonempty string');
  //     process.exit(1);
  //   }

  //   const
  //     database = conf.database,
  //     hosts = conf.servers.reduce((str, server, index) => {

  //       if (index === 1) {
  //         str = `${str}`
          
  //         if (!server) {
  //           return
  //         } 
  //       }

  //       return `${str},${}`
  //     }, '')

  //   return `mongodb://${login}${hosts}/${database}`;
  // }
}
