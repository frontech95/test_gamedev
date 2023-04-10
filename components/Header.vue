<template>
    <header class="header">
        <div class="header__inner">
            <a href="/" class="header__logo">
                <img src="~/assets/img/logo.svg" width="222" height="45" alt="logo">
            </a>

            <div class="header__actions">
                <Button size="sm" color="dark" class="header__button" @click="toggleModal(1)">Вхід</Button>
                <Button size="sm" class="header__button" @click="toggleModal(2)">Реєстрація</Button>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>
    .header{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        

        background: #141416;

        border-bottom: 1px solid #23262F;

        z-index: 99;

        &__inner{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 23px 24px 24px;
            max-width: 1440px;
            position: relative;
            margin-left: auto;
            margin-right: auto;
        }

        &__logo{
            display: flex;
        }

        &__actions{
            display: flex;
            align-items: center;

            position: absolute;
            right: 23px;
            top: 26px;
        }

        &__button{
            margin-right: 14px;

            &:last-child{
                margin-right: 0;
            }
        }

        @media (max-width: 992px) {
            

            &__inner{
                justify-content: flex-start;
                padding: 10px 15px;
            }
            
            &__actions{
                position: static;
                margin-left: auto;
            }

            &__button{
                margin-right: 8px;
            }

            &__logo{
                margin-right: 10px;
                img{
                    max-width: 148px;
                    height: 30px;
                }
            }
            
        }
    }
</style>

<script>
  import Button from '~/components/Button.vue';
  
  export default {
    components: {
      Button,
    },
    data() {
        return {
            activeModal: null
        }
    },
    methods: {
        toggleModal(modalNumber) {
            this.activeModal = modalNumber;
            const body = document.querySelector('body');
            const modal = document.querySelector(`[data-modal="${modalNumber}"]`);
            body.classList.add(`is-modal`);
            modal.classList.toggle('active');
        }
    }
  };
</script>