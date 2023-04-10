<template>
    <div class="input-text" :class="{ 'is-password': type === 'password', 'has-error': error, 'has-success': success }">
      <div v-if="label" class="input-text__label">{{ label }}</div>

      <div class="input-text__field">
        <div v-if="type === 'password' || error || success" :class="{ 'input-text__icon-password': type === 'password', 'input-text__icon-error': error, 'input-text__icon-success': success }"></div>
        <input
            :type="type"
            class="input-text__input"
            :placeholder="placeholder"
            :value="value"
        >
        </div>
        <div class="input-text__massage" v-if="error">Display error message here.</div>
    </div>
</template>

<style lang="scss" scoped>
    .input-text{
        display: flex;
        flex-direction: column;

        &.has-error{
            .input-text{
                &__input{
                    color: #FF6838;
                    border: 2px solid #FF6838;
                }
            }
        }

        &.has-success{
            .input-text{
                &__input{
                    border: 2px solid #58BD7D;
                }
            }
        }

        &__label{
            margin-bottom: 12px;
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 12px;
            line-height: 12px;
            text-transform: uppercase;
            color: $white;
        }

        &__field{
            position: relative;
        }

        &__input{
            padding: 16px;
            width: 100%;
            height: 48px;

            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            color: $white;
            
            outline: none;
            box-shadow: none;
            transition: 0.5s;
            border-radius: 70px;
            background: transparent;
            border: 2px solid #353945;

            &::placeholder{
                color: $border;
            }

            

            &:hover{
                border-color: $border;
                transition: 0.5s;
            }

            &:focus{
                border-color: $yellow;
                transition: 0.5s;
            }
        }

        &__massage{
            margin-top: 5px;
            margin-left: 15px;
            font-size: 10px;
            line-height: 12px;
            color: #FF6838;
        }

        &__icon-password{
            width: 24px;
            height: 24px;
            position: absolute;
            right: 15px;
            top: calc(50% - 12px);
            z-index: 9;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.0001 18C16.1256 18 19.0593 15.4076 20.7773 13.2486C21.3732 12.4998 21.3732 11.5002 20.7773 10.7514C19.0593 8.59239 16.1256 6 12.0001 6C7.87457 6 4.94086 8.59238 3.2228 10.7514C2.6269 11.5002 2.6269 12.4998 3.2228 13.2486C4.94086 15.4076 7.87457 18 12.0001 18ZM22.3423 14.494C23.5182 13.0163 23.5182 10.9837 22.3423 9.506C20.474 7.15826 17.0266 4 12.0001 4C6.97353 4 3.52612 7.15826 1.65785 9.506C0.481891 10.9837 0.48189 13.0163 1.65784 14.494C3.52612 16.8417 6.97353 20 12.0001 20C17.0266 20 20.474 16.8417 22.3423 14.494Z' fill='%23777E91'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 11.9716 10.0006 11.9434 10.0018 11.9153C10.1577 11.9701 10.3253 12 10.5 12C11.3284 12 12 11.3284 12 10.5C12 10.3253 11.9701 10.1577 11.9153 10.0018C11.9434 10.0006 11.9716 10 12 10C13.1046 10 14 10.8954 14 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z' fill='%23777E91'/%3E%3C/svg%3E%0A");
        }

        &__icon-error{
            width: 24px;
            height: 24px;
            position: absolute;
            right: 15px;
            top: calc(50% - 12px);
            z-index: 9;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z' fill='%23777E91'/%3E%3C/svg%3E%0A");
        }

        &__icon-success{
            width: 24px;
            height: 24px;
            position: absolute;
            right: 15px;
            top: calc(50% - 12px);
            z-index: 9;
            cursor: pointer;
            background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12L10 16L18 8' stroke='%2358BD7D' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
    }
</style>
  
<script>
    export default {
        props: {
            label: {
                type: String
            },
            placeholder: {
                type: String,
                required: true
            },
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }, 
            error:{
                type: String,
                default: ''
            },
            success:{
                type: String,
                default: ''
            }
        }
    }
</script>
  