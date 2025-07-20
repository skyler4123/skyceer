root 'educations#home'

resources :educations, only: [:index] do
  collection do
    get :home
  end
end
constraints EducationRoleConstraint.new(:education_owner) do
  scope module: :education_owner do
    resources :education_schools
    resources :education_school_appointments
    resources :education_admins
    resources :education_exam_appointments
    resources :education_scoreboards, only: [:index] do
      collection do
        patch :import
      end
    end
    resources :education_courses
    resources :education_rooms
    resources :education_classes do
      member do
        post :appoint_subject
      end
    end
    resources :education_teachers do
      collection do
        get :import
      end
    end
    resources :education_parents
    resources :education_students do
      collection do
        get :import_view
        post :import
      end
    end
    resources :education_categories
    resources :education_exam_questions
    resources :education_questions
    resources :education_exams
    resources :education_subjects
    resources :education_lessons
    resources :payment_orders
    resources :calendar_events
  end
end

constraints EducationRoleConstraint.new(:education_admin) do
  scope module: :education_admin do
    resources :education_schools
    # resources :education_admins
    resources :education_exam_appointments
    resources :calendar_events, only: [:index] 
    resources :education_scoreboards, only: [:index]
    resources :education_courses
    resources :education_rooms
    resources :education_classes
    resources :education_teachers
    resources :education_students do
      collection do
        get :import_view
        post :import
      end
    end
    resources :education_categories
    resources :education_exam_questions
    resources :education_questions
    resources :education_exams
    resources :education_subjects
    resources :education_lessons
    resources :payment_orders
  end
end

constraints EducationRoleConstraint.new(:education_student) do
  scope module: :education_student do
    resources :education_schools, only: [:index]
    resources :education_teachers, only: [:index]
    resources :education_students, only: [:index]
    resources :education_classes, only: [:index]
    resources :education_scoreboards, only: [:index]
    resources :calendar_events, only: [:index]
    resources :education_courses, only: [:index]
    resources :education_subjects, only: [:index]
    resources :education_exams, only: [:index]
    resources :payment_orders, only: [:index]
  end
end

constraints EducationRoleConstraint.new(:education_teacher) do
  scope module: :education_teacher do
    resources :education_schools, only: [:index]
    resources :education_teachers, only: [:index]
    resources :education_students, only: [:index]
    resources :education_classes, only: [:index]
    resources :education_scoreboards, only: [:index]
    resources :calendar_events, only: [:index]
    resources :education_courses, only: [:index]
    resources :education_subjects, only: [:index]
    resources :education_exams, only: [:index]
    resources :payment_orders, only: [:index]
  end
end