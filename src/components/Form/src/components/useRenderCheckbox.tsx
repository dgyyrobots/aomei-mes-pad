import { ElCheckbox, ElCheckboxButton } from 'element-plus'
import { defineComponent } from 'vue'
import { FormSchema } from '/@/types/form'

export const useRenderCheckbox = () => {
  const renderCheckboxOptions = (item: FormSchema) => {
    // 如果有别名，就取别名
    const labelAlias = item?.componentProps?.optionsAlias?.labelField
    const valueAlias = item?.componentProps?.optionsAlias?.valueField
    const Com = (item.component === 'Checkbox' ? ElCheckbox : ElCheckboxButton) as ReturnType<typeof defineComponent>
    return item?.componentProps?.options?.map((option) => {
      const { ...other } = option
      return (
        <Com {...other} label={option[valueAlias || 'value']}>
          {option[labelAlias || 'label']}
        </Com>
      )
    })
  }

  return {
    renderCheckboxOptions,
  }
}
