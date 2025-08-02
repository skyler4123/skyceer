module Session::OverrideConcern
  extend ActiveSupport::Concern

  included do
    # Override the default signed_id method to include a custom purpose
    def self.find_signed(signed_id, purpose: nil)
      # debugger
      raise UnknownPrimaryKey.new(self) if primary_key.nil?

      if id = signed_id_verifier.verified(signed_id, purpose: combine_signed_id_purposes(purpose))
        # fetch_from_cache(id) || find_by(primary_key => id)
        find_by(primary_key => id)
      end
    end
  end
end