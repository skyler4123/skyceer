import "choices"
import Education_LayoutController from "../../layout_controller";

export default class extends Education_LayoutController {
  
  connect() {
    const choices = new Choices("#education_class_education_student_id", {
      items: [{
        value: 'Value 1',
        label: 'Label 1',
        id: 1
      },
      {
        value: 'Value 2',
        label: 'Label 2',
        id: 2,
        customProperties: {
          random: 'I am a custom property'
        }
      }],
      removeItems: true,
      removeItemButton: true,
    });
    console.log(choices);

  }

}
