module.exports = {
    DB_ERROR :{
        "isSuccess" : false,
        "message" : "database error",
        "code" : 500
    },


    AUTH_LOGIN_SUCCESS:{
        "isSuccess" : true,
        "message" : "login success",
        "code" : 200
    },

    AUHT_LOGIN_NOSUCHID : {
        "isSuccess" : false,
        "message" : "no such id",
        "code" : 400
    },

    AUTH_LOGIN_WRONGPASSWORD : {
        "isSuccess" : false,
        "message" : "wrong password",
        "code" : 400
    },
    
    AUTH_REGISTER_EXISTID : {
        "isSuccess" : false,
        "message" : "already exist id",
        "code" : 400
    },
    
    AUTH_REGISTER_EXISTNAME : {
        "isSuccess" : false,
        "message" : "alreay exist name",
        "code" : 400
    },
    
    AUTH_REGISTER_SUCCESS : {
        "isSuccess" : true,
        "message" : "register success",
        "code" : 200
    },
    AUTH_REGISTER_DBERROR : {
        "isSuccess" : false,
        "message" : "DB INSERT ERROR",
        "code" : 500
    },
    USER_JWT_EXPIRED : {
        "isSuccess" : false,
        "message" : "token is expired",
        "code" : 401
    },
    USER_JWT_INVAILD : {
        "isSuccess" : false,
        "message" : "token is invaild",
        "code" : 401
    },
    USER_JWT_NOTDECODED:{
        "isSuccess" : false,
        "message" : "token didn't decoded",
        "code" : 401
    },

    USER_PROFILE_ERROR : {
        "isSuccess" : false,
        "message" : "no such user in DB",
        "code" : 401
    },
    USER_PROFILE_SUCCESS : {
        "isSuccess" : true,
        "message" : "success to get user profile",
        "code" : 200
    },


    
}