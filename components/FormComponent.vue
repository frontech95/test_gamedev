<template >
    <form method="#" class="form is-register" v-if="register">
        <div class="form__close" @click="closeModal()"></div>

        <div class="form__header is-column">
            <div class="form__icon">
                <img :src="image" alt="" class="form__img">
            </div>
            <div class="form__title"> {{ title }}</div>
        </div>

        <div class="form__body">
            <div class="form__field" v-for="(input, index) in inputs" :key="index">
                <InputText :type="input.type" :placeholder="input.placeholder" :value="input.value" :inputs="inputs" />
            </div>
        </div>

        <div class="form__footer">

            <div class="form-actions form__actions">
                <div class="form-actions__title">Оберіть спосіб звязку</div>

                <div class="form-actions__data">
                    <div class="form-actions__nav">
                        <div class="form-actions__item is-active"><img src="~/assets/img/form/3.svg" alt=""></div>
                        <div class="form-actions__item"><img src="~/assets/img/form/4.svg" alt=""></div>
                    </div>
                    <div class="form-actions__input">
                        <InputText type="text" placeholder="@телеграм_адреса" value="" />
                    </div>
                </div>
                
            </div>
            <Button type="submit" size="md" class="form__button">{{ button }}</Button>
        </div>

    </form>
    <form method="#" class="form" v-else>
        <div class="form__close" @click="closeModal()"></div>

        <div class="form__header">
            <div class="form__icon">
                <img :src="image" alt="" class="form__img">
            </div>
            <div class="form__title"> {{ title }}</div>
        </div>

        <div class="form__body">
            <div class="form__field" v-for="(input, index) in inputs" :key="index">
                <InputText :type="input.type" :placeholder="input.placeholder" :value="input.value" :inputs="inputs" />
            </div>
        </div>

        <div class="form__footer">
            <Button type="submit" size="sm" class="form__button">{{ button }}</Button>
        </div>

    </form>
</template>
  
<script>
    import InputText from '~/components/InputText.vue';
    import Button from '~/components/Button.vue';

    export default {
        components: {
            Button,
            InputText
        },
        props: {
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
        methods: {
            closeModal() {
                document.body.classList.remove(`is-modal`);
                document.querySelector('.modal.active').classList.remove('active');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form{
        display: inline-block;
        position: relative;

        width: 355px;
        padding: 25px 30px;
        
        border-radius: 25px;
        background: #262932;

        &__close{
            position: absolute;
            right: 10px;
            top: 10px;
            width: 40px;
            height: 40px;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='20' fill='%23353945'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z' fill='%23777E91'/%3E%3C/svg%3E%0A");
        }

        &__header{
            display: flex;
            align-items: center;

            &.is-column{
                @media (min-width: 992px) {
                    flex-direction: column;
                    justify-content: center;

                    .form__icon{
                        margin-right: 0;
                        margin-bottom: 10px;
                    }
                }

                .form__icon{
                        background: #58BD7D;
                    }
            }
        }

        &__icon{
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            padding: 10px;
            margin-right: 10px;

            width: 45px;
            height: 45px;

            background: #FF6838;
            border-radius: 15px;

            img{
                max-width: 100%;
            }
        }

        &__title{
            color: #fff;
            font-weight: 700;
            font-size: 25px;
            line-height: 25px
        }

        &__body{
            margin-top: 25px;
        }

        &__field{
            margin-bottom: 10px;

            &:last-child{
                margin-bottom: 0;
            }
        }

        &__footer{
            display: flex;
            align-items: center;
            flex-direction: column;

            margin-top: 10px;
        }
    }

    .form-actions{
        margin-top: 15px;
        margin-bottom: 25px;

        &__title{
            text-align: center;
            margin-bottom: 10px;
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 12px;
            line-height: 12px;
            text-transform: uppercase;
            color: $gray;
        }

        &__data{
            display: flex;
            align-items: center;
        }

        &__item{
            margin-right: 10px;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 45px;
            height: 45px;

            padding: 10px;  

            border-radius: 50%;

            &:last-child{
                margin-right: 0;
            }

            &.is-active{
                background: #353945;
            }
        }

        &__nav{
            display: flex;
            align-items: center;
        }

        &__input{
            margin-left: 10px;
        }
    }
</style>