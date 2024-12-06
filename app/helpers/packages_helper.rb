module PackagesHelper
  def package_name(dir)
    file_path_array = dir.split('/')
    return 'application' unless file_path_array.find_index('packages')

    package_index = file_path_array.find_index('packages') +1
    file_path_array[package_index]
  end

  def view_controller(dir)
    return @view_controller if @view_controller
    if package_name(dir)
      @view_controller = [MAIN_PACKAGE, controller_path.gsub('/', '--'), action_name].join('--').dasherize
    else
      @view_controller = [controller_path.gsub('/', '--'), action_name].join('--').dasherize
    end
    @view_controller
  end
end
