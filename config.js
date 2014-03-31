module.exports = function (poppins) {
  poppins.config = {
    // Github repo to watch
    // https://github.com/myname/myrepo
    target: {
      user: 'ajoslin',
      repo: 'angular-promise-tracker'
    },

    // Credentials for user who leaves comments, etc.
    // You may want to load these from a seperate file like `config-credentials.js`, and
    // add this file to your `.gitignore` list
    login: require('./credentials.json'),

    // port for poppins to listen on and URL for Github to ping
    hook: {
      url: 'http://54.221.213.146',
      port: 4321
    }
  };

  poppins.on('issueOpened', function(data) {
    console.log(data);
  });
};
