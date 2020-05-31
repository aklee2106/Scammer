class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true 
  validates :password_digest, :session_token, presence: true 
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  # has_many :likes, 

  # has_many :conversations, 

  # has_many :groups, 

  # belongs_to :network

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def is_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64 
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.sesion_token = self.class.generate_session_token
    self.save
    self.session_token
  end

end
