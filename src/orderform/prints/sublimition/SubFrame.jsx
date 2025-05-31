import BaseSubForm from '../../../ui/BaseSubForm';
import { subFrameOrder } from '../../../server/services/order';

const frameTypes = [
  { value: 'گرد', label: 'گرد' },
  { value: 'مستطیل', label: 'مستطیل' },
  { value: 'قلبی', label: 'قلبی' },
  { value: 'مربع', label: 'مربع' },
];

const materials = [
  { value: 'پلاستیکی', label: 'پلاستیکی' },
  { value: 'چوبی', label: 'چوبی' },
];

function SubFrame() {
  const formFields = [
    {
      name: 'dimensions',
      label: 'ابعاد قاب (مثلاً 20x30 سانتی‌متر)',
      type: 'text',
      validation: { required: "این فیلد الزامی است" }
    },
    {
      name: 'frameType',
      label: 'نوع قاب',
      type: 'select',
      options: frameTypes,
      validation: { required: "این فیلد الزامی است" }
    },
    {
      name: 'material',
      label: 'جنس قاب',
      type: 'select',
      options: materials,
      validation: { required: "این فیلد الزامی است" }
    },
    {
      name: 'notes',
      label: 'توضیحات اضافی (اختیاری)',
      type: 'textarea'
    }
  ];

  return (
    <BaseSubForm
      title="ثبت سفارش چاپ سابلیمیشن"
      //onClose={onClose}
      mutationFn={subFrameOrder}
      formFields={formFields}
      successRedirect="/frame-buy"
    />
  );
}

export default SubFrame;