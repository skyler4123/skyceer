json.extract! @user, :id, :email, :password_digest, :created_at, :updated_at
json.access_token @access_token
json.refresh_token @user.refresh_token