<template>

  <div>

    <div class="gui">
      <div class="container">

        <div class="gui__row">
        
          <Button size="sm">Button</Button>
          <Button size="md">Button</Button>
          <Button size="sm" icon-position="left">Button</Button>
          <Button size="md" icon-position="left">Button</Button>

          <Button size="sm" icon-position="right">Button</Button>
          <Button size="md" icon-position="right">Button</Button>

          <Button label="" size="sm" icon-position="center"></Button>
          <Button label="" size="md" icon-position="center"></Button>

        </div>

        <div class="gui__row">
          <Button size="sm" color="light">Button</Button>
          <Button size="md" color="light">Button</Button>
          <Button size="sm" color="light" icon-position="left">Button</Button>
          <Button size="md" color="light" icon-position="left">Button</Button>

          <Button size="sm" color="light" icon-position="right">Button</Button>
          <Button size="md" color="light" icon-position="right">Button</Button>

          <Button label="" size="sm" color="light" icon-position="center"></Button>
          <Button label="" size="md" color="light" icon-position="center"></Button>
        </div>

        <div class="gui__row">
          <Button size="sm" color="dark">Button</Button>
          <Button size="md" color="dark">Button</Button>
          <Button size="sm" color="dark" icon-position="left">Button</Button>
          <Button size="md" color="dark" icon-position="left">Button</Button>

          <Button size="sm" color="dark" icon-position="right">Button</Button>
          <Button size="md" color="dark" icon-position="right">Button</Button>

          <Button label="" size="sm" color="dark" icon-position="center"></Button>
          <Button label="" size="md" color="dark" icon-position="center"></Button>
        </div>

        <div class="gui__row">
          <Button disabled size="sm">Button</Button>
          <Button disabled size="md">Button</Button>
          <Button disabled size="sm" icon-position="left">Button</Button>
          <Button disabled size="md" icon-position="left">Button</Button>

          <Button disabled size="sm" icon-position="right">Button</Button>
          <Button disabled size="md" icon-position="right">Button</Button>

          <Button disabled label="" size="sm" icon-position="center"></Button>
          <Button disabled label="" size="md" icon-position="center"></Button>

        </div>

        <div class="gui__row">
          <Button disabled size="sm" color="light">Button</Button>
          <Button disabled size="md" color="light">Button</Button>
          <Button disabled size="sm" color="light" icon-position="left">Button</Button>
          <Button disabled size="md" color="light" icon-position="left">Button</Button>

          <Button disabled size="sm" color="light" icon-position="right">Button</Button>
          <Button disabled size="md" color="light" icon-position="right">Button</Button>

          <Button disabled label="" size="sm" color="light" icon-position="center"></Button>
          <Button disabled label="" size="md" color="light" icon-position="center"></Button>
        </div>

        <div class="gui__row">
          <Button disabled size="sm" color="dark">Button</Button>
          <Button disabled size="md" color="dark">Button</Button>
          <Button disabled size="sm" color="dark" icon-position="left">Button</Button>
          <Button disabled size="md" color="dark" icon-position="left">Button</Button>

          <Button disabled size="sm" color="dark" icon-position="right">Button</Button>
          <Button disabled size="md" color="dark" icon-position="right">Button</Button>

          <Button disabled label="" size="sm" color="dark" icon-position="center"></Button>
          <Button disabled label="" size="md" color="dark" icon-position="center"></Button>
        </div>


        <div class="gui__row">
          <InputText label="LABEL" type="text" placeholder="Input caption" value="" />
          <InputText label="LABEL" type="text" placeholder="Input caption" value="" />
          <InputText label="LABEL" type="text" placeholder="Input caption" value="Input caption" error="true" />
          <InputText label="LABEL" type="text" placeholder="Input caption" value="" />
          <InputText label="LABEL" type="text" placeholder="Input caption" value="" />
          <InputText label="LABEL" type="text" placeholder="Input caption" value="Input caption" success="true" />
          <InputText label="LABEL" type="password" placeholder="Input caption" value="" />
          <InputText label="LABEL" type="password" placeholder="Input caption" value="" />
        </div>
        
      </div>

  </div>

  </div>

</template>

<style lang="scss">
  @import '~/assets/css/app.scss';
</style>


<script>
  import InputText from '~/components/InputText.vue';
  import Button from '~/components/Button.vue';
  
  export default {
    components: {
      Button,
      InputText
    },
    props:{
      image: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        activeModal: null,
        inputs1: [
          { type: 'text', placeholder: 'Input caption', value: '' },
          { type: 'text', placeholder: 'Input caption', value: '' },
          { type: 'text', placeholder: 'Input caption', value: '' },
          { type: 'text', placeholder: 'Input caption', value: '' },
          { type: 'text', placeholder: 'Input caption', value: '' },
          { type: 'text', placeholder: 'Input caption', value: '' },
          { type: 'password', placeholder: 'Input caption', value: '' },
          { type: 'password', placeholder: 'Input caption', value: '' },
        ]
      }
    }
  };
</script>