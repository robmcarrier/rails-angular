class Recipe < ActiveRecord::Base
  has_many :ingredients

  def as_json(options = {})
    super(options.merge(include: :ingredients))
  end
end
