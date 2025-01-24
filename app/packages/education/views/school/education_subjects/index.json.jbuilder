json.data do
  json.array! @education_subjects do |education_subject|
    json.extract! education_subject, :id, :name, :created_at, :updated_at
    json.education_school education_subject.education_school
  end
end

json.partial! "shared/common"
