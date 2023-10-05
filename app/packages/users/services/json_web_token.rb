# typed: true

module JsonWebToken
  extend T::Sig

  JWT_EXPIRATION = ENV.fetch('JWT_EXPIRATION', '1')
  JWT_SECRET = ENV.fetch('JWT_SECRET', 'secret')
  JWT_ALGORITHM = ENV.fetch('JWT_ALGORITHM', 'HS256')

  sig {params(user: User, expire: ActiveSupport::Duration, secret: String, algorithm: String).returns(String)}
  def self.encode(user:, expire: JWT_EXPIRATION.to_i.minutes, secret: JWT_SECRET, algorithm: JWT_ALGORITHM)
    expire_epochtime = expire.from_now.to_i
    payload = {
      id: user.id,
      email: user.email,
      role: user.try(:role),
      exp: expire_epochtime
    }
    JWT.encode(payload, secret, algorithm)
  end

  sig {params(token: String, secret: String, algorithm: String).returns(Hash)}
  def self.decode(token:, secret: JWT_SECRET, algorithm: JWT_ALGORITHM)
    JWT.decode(token, secret, true, { algorithm: algorithm }).first.with_indifferent_access
  end


end