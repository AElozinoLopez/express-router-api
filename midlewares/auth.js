function auth (require, response, next) {
    console.log('Authenticating');
    next();
}

module.exports = auth;