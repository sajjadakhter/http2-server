const fs          = require('fs')

//TODO: reimplement
require('pem').createCertificate({days:1, selfSigned:true}, (err, {serviceKey, certificate}) => {
  if (err) console.log(err)
})

module.exports = ({key, cert, ssl}) => {
    return {
      key:  key || cert  ? fs.readFileSync(`${__dirname}/${key}`) : serviceKey,
      cert: cert || cert ? fs.readFileSync(`${__dirname}/${cert}`) : certificate,
      ssl,
      spdy: {
        plain: !ssl,
      },
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
      strictSSL: false
    }
    
}