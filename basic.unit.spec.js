var StormAPI = require('runStormTest');

describe('all', ()=>{

  it('run-test', (done)=>{
    var user = {
        "name": "nurit.guthrie@hpe.com",
        "password": "Alon&Boaz64"
    }
    
    var api = new StormAPI(user.name, user.password);

    api.login().then(()=>{

      console.log(`runId=${runId}`);
      assert(runId);
      done();

    }, done);

  });
})
