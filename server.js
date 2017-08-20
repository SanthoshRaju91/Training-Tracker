var sserver = require('static-server');

var server = new sserver({
    rootPath: '.',            
    port: 5000,             
    host: '0.0.0.0',      
    followSymlink: true,     
    templates: {
      index: 'index.html',     
      notFound: '404.html'
    }
  });

server.start(function () {
    console.log('Server listening to', server.port);
});