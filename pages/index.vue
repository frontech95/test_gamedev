<template>

  <Header />

  <main class="main">

    <picture>
      <source media="(min-width: 993px)" srcset="~/assets/img/circles/1.png">
      <img src="~/assets/img/circles/2.svg" alt="graph" class="main__figure main__figure--right">
    </picture>

    <picture>
      <source media="(min-width: 993px)" srcset="~/assets/img/circles/2.png">
      <img src="~/assets/img/circles/4.svg" alt="graph" class="main__figure main__figure--left">
    </picture>


    <section class="section">
      <div class="container">
        <Informer class="main__informer" title="Володарі Трафіку" caption="SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на відстані одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами." />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h3 class="section__title">Тим, хто нагоняє Траф</h3>

        <div class="section__grid">
          <div class="section__col">
            <AdvantsCard image="_nuxt/assets/img/advants/1.svg" title="Круті акції, призи та прибуткова бонусна програма" text="Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!" />
          </div>
          <div class="section__col">
            <AdvantsCard image="_nuxt/assets/img/advants/2.svg" title="Особлива підтримка <br> для кожного 24/7" text="У вас буде свій персональний менеджер" />
          </div>
          <div class="section__col">
            <AdvantsCard image="_nuxt/assets/img/advants/3.svg" title="Детальна <br> статистика" text="Миттєве оновлення, зрозуміла система відображення статистики" />
          </div>
        </div>

      </div>
    </section>
  </main>

  
  <Modal title="Вхід" image="_nuxt/assets/img/form/1.svg" button="Війти" data-modal="1"  :inputs="inputs1"  />
  <Modal title="Реєстрація" image="_nuxt/assets/img/form/2.svg" button="Реєстрація" data-modal="2" large="true" register="true" :inputs="inputs2"  />

</template>

<style lang="scss">
  @import '~/assets/css/app.scss';
</style>


<script>
  import Header from '~/components/Header.vue';
  import Button from '~/components/Button.vue';
  import Informer from '~/components/Informer.vue';
  import AdvantsCard from '~/components/AdvantsCard.vue';
  import FormComponent from '~/components/FormComponent.vue';
  import Modal from '~/components/Modal.vue';

  export default {
    components: {
      Header,
      Button,
      Informer,
      AdvantsCard,
      FormComponent,
      Modal
    },
    data() {
      return {
        activeModal: null,
        inputs1: [
          { type: 'email', placeholder: 'Ваш email', value: '' },
          { type: 'password', placeholder: 'Ваш пароль', value: '' },
        ],
        inputs2: [
          { type: 'text', placeholder: 'Ваше імʼя', value: '' },
          { type: 'email', placeholder: 'Ваш email', value: '' },
          { type: 'password', placeholder: 'Ваш пароль', value: '' },
          { type: 'password', placeholder: 'Повторіть пароль', value: '' },
        ]
      }
    }
  };
</script>
