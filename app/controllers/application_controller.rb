class ApplicationController < ActionController::Base
  protect_from_forgery

  def require_login
    redirect_to login_url, alert: "You must be logged in to access this section." if current_user.nil?
  end

  def admin_only
    redirect_to root_url, alert: "Not authorized" if !admin_user
  end

  private
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def admin_user
    current_user && current_user.admin
  end
  helper_method :admin_user

end
