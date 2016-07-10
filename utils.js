module.exports = {
  mongooseFind: model => {
    return new Promise( (resolve, reject) => {
      model.find({}, function (err, docs) {
        if (err) {
          reject(err)
        }
        console.log(docs)
        resolve(docs)
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
