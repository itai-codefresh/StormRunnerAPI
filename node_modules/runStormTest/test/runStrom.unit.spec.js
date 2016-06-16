var request = require('superagent')
var assert = require('assert');
var StormAPI = require('../api');
assert(StormAPI);

describe('strom tests', (done)=>{
var TENANTID = 293752468;
var user = {
  "name": "nurit.guthrie@hpe.com",
  "password": "Alon&Boaz64"
}
  var ctx = {};
  var api;
  it.only('login', (done)=>{
    var api = new StormAPI(user.name, user.password);
    api.login().then((token)=>{
      console.log('token:' + token);
      assert(token);
      done();
    }, done);
  })
  it('get all projects test', (done)=>{
    var url = 'https://stormrunner-load.saas.hpe.com/v1/projects/1/tests?TENANTID=293752468';
    console.log(`AccessToken: ${ctx.token}`);

    request
    .get(url)
    .set('Cookie', `LWSSO_COOKIE_KEY=${ctx.token}`)
    .set('Accept', 'application/json')
    .end(function(err, res){
      // Calling the end function will send the request
        console.log(`run test completed with err ${err}`);
        console.log(`Tests are - ${JSON.stringify(res.body)}`);
      //  assert(res.body.tests);
        ctx.tests = res.body;
        return done(err);

    });
  });
  it('run-test', (done)=>{

    var api = new StormAPI(user.name, user.password);
    api.login().then(api.runTest.bind(api), done).then((runId)=>{
      console.log(`runId=${runId}`);
      assert(runId);
      done();
    }, done);

  });


  it.only('wait for test complition test', (done)=>{
     var api = new StormAPI(user.name, user.password);
     api.ctx = {}
     api.ctx.token = "934aouKysLgzcpzH4sUVWyT2vi5aTP6-eMGZpbmlCaxCWz9As9ODIN8nF9G3nsMa5_SWwcT27UfRwdlPhl8d1Yr5O_7JtbUM9Tf8x87-x6mbixgt-fcHnbdemBqrNjdUk90vFosZdm-Kzq34a3d-qRS5YQQXNMFtL8_mBCcIePrsIzAFYnB_myjHNcxPM3KMO5RULSU1l70bAlzO0YEizpyIWRHd-e1Jn67h87DaCE7T_Dhk4IfHnnJek64CZcvTSntyiK702cvUTLrzE1m2daOEpolRQTxvD1ssOaYrh_0IwKqg2PrPuguyB8dq9HAE4IAWZTpCG6pMA4YjWClsUAl-x8KhglVl7tyHMjsbw34gibGKvJB_iPOEKUT2SVSeIQKCQol5H3AxmkqmLc1RNwfTM6QOiSBLE-ai4b80u-mxWqpVDykBp96Q5HWBg68q5ZNkQ4-TcZEexcO1IpDwzmT115faGHLPr7Uq8Te0CjNmPwuZKivZ7NptPTToDt-8TVwZoaw3T972Wy_YdU1wo2hlfx5vS0jQu7bnUgsM17RR1LRY8MgDYV1FUmVWxMvdPm5sDoa0d2WGUALYMr_YfTVSjZpDc-tuzEh74iql5mtUDq64T23NX66RQGiPmayicpdcG1uloTJ4FMTgru2rAGh9snvOpfmsvo4D-V7_LNh7QB1ZFhll1m4Lae9ziFhTIcbGZhbj8oD5jXX4UV7bNyFRdA0nDxxFZOY9yVdtFrBuMxg01B3kYG4_JXIY-OnHVVlnZUI06FyXlKcwWqQPu3ZEaOaH7FKjJ1zq4Pyq5qDKpo5Q71YZiygfB0yMbPHq2rwLkp-hNrjw4DsO0YnGXAa6K7G2J0zFR1Nj2SB0jd_6OR6y1MRMa1SmFBwCEnepIU-lvaxJiueBZKrtk0riwKGqgWJDlORtWEe0GktrD1bEOXI8UQ71iFaHH_Wo7BSpVTRuzK0eprgi-oeFjJcI7xdmxBo_Z96oFMgg2NSuplT-hjEfyp9-SXLpmzKn_rApYmA3nG2hVnwAYvilYbu5hkY5g4W5XevX8w1leJu7euP3aSG9ZcVeKSUqmMzN9SvqoaK3fuctkBtb7HHRGizjDcxnlCNzbfvlKtWKVBh3DZM7DRzK7b_onUGJgKcEOAoR8p2zOPOO32kwvccZi6WH9UwtKgqNuT-yHH_Ep4q1-WjG22UR7crnNXdY21LDjbr8aQmqQQTVCJSpiBBYoOqBYqREt3RgR5z9h2bXoXl2dEZuRjvVkTt6a9z9XXG8gZF0NGD1S_UkLtfYP6fkdouLwdVDy47u4w152jv-1sWokqwxPgbZQP8PHKchVX907VkccXjX2DnOc6SuJhifn1Inke3U4csHBJ87pNqC7xGCYJNO95s2T325h7BfmRFKTStf6LMC2ehHpjEyp-28bi3mW1-bZHGuBlgCKDoBkwu_XfQedXtyoTr2otCoyYsynlPMp2il-WPnGyr-Gf3HnBP-QKXf0WigDSfI6gK_84d4xFGqxtn6FpXi0aoJCIN1Ib8dXGa7lBuX81fHJ2V4GyolR6BTjmvFvFgCsu06w4zB41S6zWHFDvmjvpvTwCazfiU8JB78DIE4TufbwnnCDMxEGxriyrW_2cWzN25Ryiw2jsy7BdN1Jp1HqQu_Cyt87-pffiNqAZ3qMjZfat52EORhQv-W2WfHpDGrrCF4ye26oy8v-U0HPtdtzqCLmVHf5QRcTPVjF55YqGWA5DymRp7Msw..";
     api.ctx.run = {}
     api.ctx.run.runId = 16;

      api.getStatus(10).then(()=>{

       console.log(`${JSON.stringify(ctx)}`);
       console.log('completed')
       done();

     } , done);

  });


})
