require 'rails_helper'

RSpec.feature "education_students#import_view", type: :feature, js: true do
  include_context "support/shared_contexts/education/default_database"

  context "education_role: :education_school" do
    # Create a temporary CSV file
    let(:csv_file) do
      file = Tempfile.new(['students', '.csv'])
      file.write("uid,name,email,phone,school_names,class_names\n")
      file.write("1,John Doe,john@example.com,1234567890,School A,Class 1\n")
      file.write("2,Jane Smith,jane@example.com,0987654321,School B,Class 2\n")
      file.rewind
      file
    end

    before do
      sign_in(user: education_school.user)
      visit import_view_education_students_path
    end

    it "will not be redirected" do
      expect(page).to have_current_path(import_view_education_students_path, ignore_query: true)
      expect(page).to have_content("Click to upload")
      expect(page).to have_content("Support: CSV")
    end

    it "will upload a CSV file" do
      # Make the input visible
      page.execute_script("document.getElementById('dropzone-file').classList.remove('hidden')")

      # Upload the CSV file via input file
      attach_file('dropzone-file', csv_file.path, make_visible: true)

      # Manually trigger the change event
      # page.execute_script("document.getElementById('dropzone-file').dispatchEvent(new Event('change', { bubbles: true }))")

      # Verify the file upload
      expect(page).to have_content("John Doe")
      expect(page).to have_content("Jane Smith")

      # Close and unlink the temporary file
      csv_file.close
      csv_file.unlink
    end
  end

  context "education_role: :not_education_user" do
    before do
      education_school.user.update(education_role: nil)
    end

    it "will be redirected" do
      sign_in(user: education_school.user)
      visit import_view_education_students_path
      expect(page).to have_routing_error
    end
  end

end
