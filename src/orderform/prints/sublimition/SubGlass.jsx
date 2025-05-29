import BaseSubForm from '../../../ui/BaseSubForm';
import { subGlassOrder } from '../../../server/services/order';

const frameTypes = [
  { value: 'دسته قلبی', label: 'دسته قلبی' },
  { value: 'دسته رنگی', label: 'دسته رنگی' },
  { value: 'داخل رنگی', label: 'داخل رنگی' },
];

const materials = [
  { value: 'فلزی', label: 'فلزی' },
  { value: 'فاور سنت', label: 'فاور سنت' },
];

function SubGlass({ onClose }) {
  const formFields = [
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
      onClose={onClose}
      mutationFn={subGlassOrder}
      formFields={formFields}
    />
  );
}

export default SubGlass;