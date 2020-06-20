<template>
<div>
  <UiField
    v-model="test"
    placeholder="Поиск"
    append="44px"
  >
    <UiButton slot="append">
      <UiIcon name="search" />
    </UiButton>
  </UiField>
  <UiButton view="primary">test</UiButton>
</div>
</template>

<script>
import UiField from '@/components/uikit/UiField';
import UiButton from '@/components/uikit/UiButton';
import UiIcon from '@/components/uikit/UiIcon';

export default {
    name: 'HelloWorld',

    components: {
        UiField,
        UiButton,
        UiIcon,
    },

    data () {
        return {
            test: '',
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
