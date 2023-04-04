module.exports = {
    DB_ERROR :{
        "isSuccess" : false,
        "message" : "database error",
        "code" : 200
    },


    AUTH_LOGIN_SUCCESS:{
        "isSuccess" : true,
        "message" : "login success",
        "code" : 200
    },

    AUHT_LOGIN_NOSUCHID : {
        "isSuccess" : false,
        "message" : "no such id",
        "code" : 201
    },

    AUTH_LOGIN_WRONGPASSWORD : {
        "isSuccess" : false,
        "message" : "wrong password",
        "code" : 201
    },
    
    AUTH_REGISTER_EXISTID : {
        "isSuccess" : false,
        "message" : "already exist id",
        "code" : 201
    },
    
    AUTH_REGISTER_EXISTNAME : {
        "isSuccess" : false,
        "message" : "alreay exist name",
        "code" : 201
    },
    
    AUTH_REGISTER_SUCCESS : {
        "isSuccess" : true,
        "message" : "register success",
        "code" : 201
    },
    AUTH_REGISTER_DBERROR : {
        "isSuccess" : false,
        "message" : "DB INSERT ERROR",
        "code" : 400
    },

    
}