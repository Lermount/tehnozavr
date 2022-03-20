<template>
    <BaseFormField :title="title" :error="error">
              <input
                v-model="dataValue"
                class="form__input"
                :type="type"
                :placeholder="placeholder"
              />
    </BaseFormField>
</template>
<script>
import FormFieldMixin from "@/mixins/FormFieldMixin";

export default {
    props: {
        type: {
            default: 'text'
        }
    },
    mixins: [FormFieldMixin]
}
</script>