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
enum UserRole{
    Admin,
    Editor,
    Viewer
}

let role: UserRole = UserRole.Admin
console.log(role)

//Example-String Enums
enum ApiResponseStatus{
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Timeout='TIMEOUT'
}

function handleResponse(status: ApiResponseStatus) {
    if(status===ApiResponseStatus.Success){
        console.log('Data Loaded Smootly')
    }else{
        console.log('Timeout')
    }
}

handleResponse(ApiResponseStatus.Timeout)