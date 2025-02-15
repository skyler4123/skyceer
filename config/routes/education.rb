resources :educations, only: [:index] do
  collection do
    get :home
  end
end
constraints EducationRoleConstraint.new(:education_school) do
  scope module: :education_school do
    resources :education_schools
    resources :education_school_appointments
    resources :education_admins
    resources :education_exam_appointments
    resources :education_time_tables, only: [:index] do
      collection do
        get :education_class_id
      end
    end
    resources :education_scoreboards, only: [:index] do
      collection do
        get :education_class_id
      end
    end
    resources :education_courses do
      collection do
        get :education_school_id
      end
    end
    resources :education_rooms
    resources :education_classes
    resources :education_teachers
    resources :education_students do
      collection do
        get :education_class_id
      end
    end
    resources :education_categories do
      collection do
        get :education_school_id
        get :parent_category_id
      end
    end
    resources :education_exam_questions
    resources :education_questions
    resources :education_exams
    resources :education_subjects do
      collection do
        get :education_class_id
      end
    end
    resources :education_subject_appointments
    resources :education_question_appointments
    resources :education_category_appointments
    resources :education_class_appointments
    resources :education_class_room_appointments
    resources :education_question_appointments
    resources :education_lessons
    resources :payment_orders
  end
end

constraints EducationRoleConstraint.new(:education_student) do
  scope module: :education_student do
    resources :education_schools
  end
end