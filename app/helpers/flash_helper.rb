module FlashHelper
  def flash_content
    html = "<p class='w-full text-center py-2 px-3 bg-red-50 mb-5 text-red-500 font-medium rounded-lg inline-block' id='error'>#{ error }</p>" if error.present?
    html = "<p class='w-full text-center py-2 px-3 bg-blue-50 mb-5 text-blue-500 font-medium rounded-lg inline-block' id='info'>#{ info }</p>" if info.present?
    html = "<p class='w-full text-center py-2 px-3 bg-red-50 mb-5 text-red-500 font-medium rounded-lg inline-block' id='alert'>#{ alert }</p>" if alert.present?
    html = "<p class='w-full text-center py-2 px-3 bg-yellow-50 mb-5 text-yellow-500 font-medium rounded-lg inline-block' id='warning'>#{ warning }</p>" if warning.present?
    html = "<p class='w-full text-center py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block' id='notice'>#{ notice }</p>" if notice.present?
    html = html.html_safe if html
  end
end
