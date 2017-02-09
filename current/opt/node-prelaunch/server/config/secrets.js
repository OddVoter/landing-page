module.exports = {
  env: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'Node Prelaunch',
  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/node-prelaunch',
  mailgun: {
    domain: process.env.MAILGUN_DOMAIN || 'mg2.oddvoter.com',
    api: process.env.MAILGUN_API_KEY || 'key-816b96e65907ec09b3136950df4d6c24',
    public: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-cc82ba522adf3744978a15af180fdd07',
    email: process.env.MAILGUN_REPLY_EMAIL || 'info@oddvoter.com'
  },
  googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-90564888-1'
};