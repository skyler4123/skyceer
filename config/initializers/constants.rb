def TrueOrFalse(value_need_to_check)
  ActiveModel::Type::Boolean.new.cast(value_need_to_check)
end

# APP_NAME = "education"
APP_VERSION = "0.0.1"
UNAUTHORIZE_MESSAGE = "You are not authorized to perform this action!"
SIGN_IN_SUCCESS_MESSAGE = "Signed in successfully"
SIGN_IN_FAILED_MESSAGE = "That email or password is incorrect"
SIGN_UP_SUCCESS_MESSAGE = "Welcome! You have signed up successfully"
AMONYMOUS_USERNAME = "amonymous"
AMONYMOUS_EMAIL = "amonymous@system.com"
MISSION_CONTROL_FAILED_MESSAGE = "You are not authorized to access this page"
CREATED_SUCCESS_MESSAGE = "Data Created Successfully!"
UPDATED_SUCCESS_MESSAGE = "Data Updated Successfully!"
DELETED_SUCCESS_MESSAGE = "Data Deleted Successfully!"
NOT_FOUND_MESSAGE = "Data Not Found!"
NOT_AUTHORIZED_MESSAGE = "You are not authorized to perform this action!"

API_TOKEN_EXPIRED_IN_SECONDS = 5.seconds # 5 seconds
API_TOKEN_EXPIRED_MESSAGE = "Your session has expired, please sign in again"
API_TOKEN_INVALID_MESSAGE = "Invalid session token, please sign in again"
API_TOKEN_MISSING_MESSAGE = "Session token is missing, please sign in"
