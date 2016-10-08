var fs = require('fs');
var file = 'data.json';

function readJson(){
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

function readJson2(cb) {
  fs.readFile(file, 'utf-8', function(error, response) {
    if (error) { return cb(error);}
    try {
      response = JSON.parse(response);
    } catch(ex) { return cb(ex); }
    cb(null, response);
  });
}

function readFilePromise(enc) {
  return new Promise(function (fulfill, reject){
    fs.readFile(file, enc, function(error, response) {
      if(error) { reject(err);}
      else { fulfill(response);}
    });
  });
}

//console.log('1', readJson());
/*readJson2(function(error, response) {
  if (error) {
    console.log(error);
  }
  console.log('2', response);
}); */

/*readFilePromise().then(function(result) {
  console.log('3 ' + result);  
})
.catch(function(error) {
  console.error(error);
});*/

// Read JSON Promise
function readJSONPromise() {
  return new Promise(function(fulfill, reject) {
    readFilePromise().then(function(res) {
      try {
	fulfill(JSON.parse(res));
      } catch(ex) { reject(ex); } 
    }, reject);
  });
}

readJSONPromise().then(function(result) {
  console.log('json:', result);
}).catch(function(error) {
  console.error(error);
});

function readJSONPromiseChain() {
  return readFilePromise().then(function(res) {
    return JSON.parse(res);
  });
}

readJSONPromiseChain().then(function(result) {
  console.log('chain', result);
});
