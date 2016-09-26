*Stop bundling your css/js and enjoy [HTTP2](https://http2.github.io/) and [PUSH_PROMISE](http://httpwg.org/specs/rfc7540.html#PUSH_PROMISE)*

#http2-server
Simple HTTP2/SPDY server similiar to [http-server](https://github.com/indexzero/http-server) using [express](https://github.com/expressjs/express) & [node-spdy](https://github.com/indutny/node-spdy)

#Installation
```
  sudo npm install -g static-http2-server
```

#Usage

```

http2-server [path] [options]

  Options:

    -h, --help                  output usage information
    -V, --version               output the version number
    -p, --port [8080]           port to use
    -a, --address [127.0.0.1]   address to use
    -P, --no-push               disable PUSH_PROMISE
    -o, --open [xdg-open]       open default app after starting the server
        -o firefox
        -o "google-chrome --incognito"
        -o wget
    
    -l, --log [dev]             log format (dev|combined|common|short|tiny)
        https://github.com/expressjs/morgan#predefined-formats
    
    -s, --silent                suppress log messages from output
    -c, --cors                  enable CORS via the Access-Control-Allow-Origin header
    -S, --no-ssl                disable https
          Works as plain http server without http2, spdy, push_promise
    
    -e, --cert [autogenerated]  path to ssl cert file
    -k, --key [autogenerated]   path to ssl key file
    -g, --gzip                  enable gzip compression
    -I, --no-autoindex          Disable auto index


```

#Usage as a dependency in your project

```
npm install static-http2-server --save
```
```package.json
...
  "scripts": {
    "start": "node_modules/.bin/http2-server -o",
  },
...  
```

#Allow insecure localhost https certificate:
* Chrome: ```chrome://flags/#allow-insecure-localhost```
