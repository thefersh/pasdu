const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const packageJSON = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));

const version = `clientv${packageJSON.version.replace(/\./g, '')}`;
const text = `[Google App Engine][Deploy-${version}] v${packageJSON.version}`;


var build = cp.spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'build:ssr']);
console.log('[Deploy] Iniciando compilacion');
build.stdout.on('error', s =>console.log('hubo un error: \r', s.toString()));
build.stdout.on('data', s => console.log(s.toString()));
build.stdout.on('end', () => {
  console.log('[Deploy] Compilacion Finalizada');
  var gitAdd = cp.spawn('git',['add', '.']);
  console.log('[Deploy] Git add');
  gitAdd.stdout.on('data', s => console.log(s.toString()));
  gitAdd.stdout.on('error', s => console.log(s.toString()));
  gitAdd.stdout.on('end', () => {
    var gitCommit = cp.spawn('git',['commit', '-m', text]);
    console.log('[Deploy] Git commit');
    gitCommit.stdout.on('data', s => console.log(s.toString()));
    gitCommit.stdout.on('error', s => console.log(s.toString()));
    gitCommit.stdout.on('end', () => {
      console.log('[Deploy] Google cloud App Enguine Deploy');
      var g = cp.spawn(/^win/.test(process.platform) ? 'gcloud.cmd' : 'gcloud', ['app', 'deploy', '--version', version, '--quiet']);
      g.stdout.on('data', (s) => console.log(s.toString()));
      g.stderr.on('data', (s) => console.log(s.toString()));
      g.stdout.on('end', () => process.exit(1));
    });
  });

});

