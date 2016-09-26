const commander = require('commander')

module.exports = commander
  .version(require('./package.json').version)
  .usage('[path] [options]')
  .option(
    '-p, --port [8080]',
    'port to use',
    8080
  ).option(
    '-a, --address [127.0.0.1]',
    'address to use',
    '127.0.0.1'
  ).option(
    '--no-push',
    'disable PUSH_PROMISE'
  ).option(
    '-o, --open [xdg-open]',
    `open default app after starting the server
    -o firefox
    -o "google-chrome --incognito"
    -o wget
`,
    ''
  ).option(
    '-l, --log [dev]',
    `log format (dev|combined|common|short|tiny)
    https://github.com/expressjs/morgan#predefined-formats
`,
    'dev'
  ).option(
    '-s, --silent',
    'suppress log messages from output'
  ).option(
    '-c, --cors',
    'enable CORS via the Access-Control-Allow-Origin header'
  ).option(
    '-S, --no-ssl',
    `disable https
      Works as plain http server without http2, spdy, push_promise
`
  ).option(
    '-e, --cert [autogenerated]',
    'path to ssl cert file'
  ).option(
    '-k, --key [autogenerated]',
    'path to ssl key file'
  ).option(
    '-g, --gzip',
    'enable gzip compression'
  ).option(
    '-I, --no-autoindex',
    'Disable auto index',
    true
  ).parse(process.argv)
  
// -d Show directory listings (defauts to 'True')
// -g or --gzip When enabled (defaults to 'False') it will serve ./public/some-file.js.gz in place of ./public/some-file.js when a gzipped version of the file exists and the request accepts gzip encoding.
// -e or --ext Default file extension if none supplied (defaults to 'html')
// -c Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds (defaults to '3600'). To disable caching, use -c-1.
// -P or --proxy Proxies all requests which can't be resolved locally to the given url. e.g.: -P http://someurl.com
// -r or --robots Provide a /robots.txt (whose content defaults to 'User-agent: *\nDisallow: /')
