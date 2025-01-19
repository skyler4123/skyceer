module User::PackageConcern
  extend ActiveSupport::Concern
  
  included do
    after_create_commit :sync_with_package_user

    private

    def sync_with_package_user
      SyncWithPackageUserJob.perform_later(self.id)
    end
  end

end
