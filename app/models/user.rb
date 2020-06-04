require 'bcrypt';

class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true 
  validates :email_cannot_be_personal
  validates :password_digest, :session_token, presence: true 
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token

  # has_many :likes,
  #   foreign_key: :user_id,  
  #   class_name: :Like

  # has_many :conversations, 
  #   foreign_key: :author_id,
  #   class_name: :Conversation

  # has_many :groups, 
  #   foreign_key: :admin_id,
  #   class_name: :Group

  # # belongs_to :network,
  # #   foreign_key: :network_id,
  # #   class_name: :Network
  personal_email_domains = ['gmail', 'yahoo', 'outlook', 'aol', 'hotmail', 'msn']

  def email_cannot_be_personal 
    if personal_email_domains.includes?(:email.split('@')[-1].split('.')[0])
      errors.add(:email, "That looks like a personal email address.
      Please Use your company email address so we can securely connect you with your network")
    end
  end

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
    BCrypt::Password.new(self.password_digest).is_password?(password)
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
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

end
