'use strict';

import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as fs from 'fs';
import * as firebase from 'firebase';
const server = express();
server.use(express.json());
const port = process.env.PORT || 4000;
const gcconfig = {
  projectId:"deuxzerosansfrontire",
  keyFilename: "deuxzerosansfrontire-firebase-adminsdk-n0czt-9962f64ee4.json"
};

firebase.initializeApp(gcconfig);




// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  
  const distFolder = join(process.cwd(), 'dist/deuxzerosansfrontiere/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  server.get('/api/events', (req, res) => { 
    if (process.argv.length <= 2) {
      console.log("Usage: " + __filename + " path/to/directory");
      process.exit(-1);
  }
   
  var path = process.argv[2];
   
  fs.readdir(path, function(err, items) {
      console.log(items);
   
      for (var i=0; i<items.length; i++) {
          console.log(items[i]);
      }
  });
    const events = fs.readFileSync('assets/json/events.json');
    const result = JSON.parse(events.toString());
    res.send(result);
  });

  server.post('/api/event/createAndDelete', (req, res) => { 
    const payload = JSON.stringify(req.body.events);
    fs.writeFileSync('assets/json/events.json',payload);
    const result = JSON.parse(payload);
    res.send(result);
  });


  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}



function run() {
  
  // Start up the Node server
  const server = app();
  console.log('server', server);
  console.log('process.env', process.env);
  
  server.listen(port, () => {console.log('Node Express on http://localhost', port)
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


export * from './src/main.server';

