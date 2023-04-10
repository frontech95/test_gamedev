<template>
    <div class="modal is-large" :class="{ 'active': activeModal === 2 }" :data-modal="dataModal" v-if="large">
        <div class="modal__inner"></div>

        <div class="modal__wrapper">
            <div class="modal__grid">

                <div class="modal__col">
                    <img src="~/assets/img/modal/1.svg" alt="" class="modal__figure is-top">
                    <img src="~/assets/img/modal/2.svg" alt="" class="modal__figure is-bottom">
                    <swiper-slider />
                </div>
                <div class="modal__col">
                    <FormComponent :title="title" :image="image" :button="button" register="true" :inputs="inputs" />
                </div>
            </div>
        </div>
    </div>

    <div class="modal" :class="{ 'active': activeModal === 1 }" :data-modal="dataModal" v-else>
        <div class="modal__inner"></div>

        <FormComponent :title="title" :image="image" :button="button" :inputs="inputs" />
    </div>
</template>

<style lang="scss" scoped>
    

    .modal{
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        
        z-index: 101;

        &.active{
            display: flex;
        }

        &.is-large{
            .modal__wrapper{
                width: 770px;
                background: #262932;
                border-radius: 24px;
                z-index: 99;
                overflow: hidden;
            }
            .modal{
                &__swiper{
                    min-width: 0;
                    flex: 1 1 auto;
                }

                &__grid{
                    display: flex;
                }

                &__col{
                    width: 50%;
                    overflow: hidden;
                    position: relative;
                    z-index: 1;

                    &:first-child{
                        background: #58BD7D;
                    }
                }

                &__figure{
                    position: absolute;
                    left: 0;
                    right: 0;
                    pointer-events: none;
                    z-index: -1;

                    &.is-top{
                        top: 0;
                    }
                    &.is-bottom{
                        bottom: 0;
                    }
                }
            }

            .form{
                padding: 60px 45px 45px;
                border-radius: 0;
                width: 100%;
                height: 100%;
            }

            .form__header{
                display: flex;
                flex-direction: column !important;
                align-items: center;
                justify-content: center;
            }
        }

        &__inner{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(53, 57, 69, 0.6);
        }
    }
    
    @media (max-width: 992px) {
        .modal__col:first-child{
            display: none;
        }

        .modal__col{
            width: 100%;
        }

        .modal.is-large .modal__wrapper{
            width: 100%;
            max-width: 355px;
        }

        .modal.is-large .modal__col{
            width: 100%;
        }

        .modal.is-large .form{
            padding: 25px;
        }

        .form{
            padding: 25px;
            width: 100%;
            max-width: 355px;
        }

        .modal{
            justify-content: flex-end;
            padding-bottom: 10px;
        }
    }

</style>

<script>
    import Button from '~/components/Button.vue';
    import FormComponent from '~/components/FormComponent.vue';
    import Solutions from '~/components/Solutions.vue';
    import SwiperSlider from '~/components/Swiper.vue';

    

    export default {
        components: {
            Button,
            FormComponent,
            Solutions,
            SwiperSlider
        },
        props: {
            dataModal: {
                type: String
            },
            inputs: {
                type: Array,
                required: true
            },
            large:{
                type: String,
                default: ''
            },
            title: {
                type: String,
                required: true
            },
            button: {
                type: String,
                required: true
            },
            image: {
                type: String,
                default: ''
            },
            inputs: {
                type: Array,
                required: true
            },
            register: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                activeModal: null
            }
        },

        
    }
</script>