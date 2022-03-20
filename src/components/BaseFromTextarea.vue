<template>
  <BaseFormField>
    <textarea
      v-model="dataValue"
      class="form__input form__input--area"
      :placeholder="placeholder"
    ></textarea>
  </BaseFormField>
</template>
<script>
import FormFieldMixin from "@/mixins/FormFieldMixin";

export default {
    mixins: [FormFieldMixin]
}
</script>