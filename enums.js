"use strict";
/*
    #Enums:
    An Enums(short for enumeration) allows you to define a set of normal constant
    Unlike most TypeScript Features That disapper during compliaion, enums exist
    as actual javascript runtime
    
    #Key Features
    1-Numeric Enums
    2-String Enums
*/
//Example-Numerci Enums
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
let role = UserRole.Admin;
console.log(role);
//Example-String Enums
var ApiResponseStatus;
(function (ApiResponseStatus) {
    ApiResponseStatus["Success"] = "SUCCESS";
    ApiResponseStatus["Failure"] = "FAILURE";
    ApiResponseStatus["Timeout"] = "TIMEOUT";
})(ApiResponseStatus || (ApiResponseStatus = {}));
function handleResponse(status) {
    if (status === ApiResponseStatus.Success) {
        console.log('Data Loaded Smootly');
    }
    else {
        console.log('Timeout');
    }
}
handleResponse(ApiResponseStatus.Timeout);
