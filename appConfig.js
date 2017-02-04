var config = {
    DEVELOP:{
        databaseURL: "dev.database:port",
    },
    STAGING:{
        databaseURL: "staging.database:port",
    },
    PRODUCTION:{
        databaseURL: "production.database:port",
    }
};
module.exports = config[process.env.ENVIROMENT || 'DEVELOP'];