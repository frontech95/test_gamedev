<template>
    <button 
        :class="[
            'btn',
            'btn-' + size,
            'btn-' + color,
            {'btn-icon-left': iconPosition === 'left'},
            {'btn-icon-right': iconPosition === 'right'},
            {'btn-icon': iconPosition === 'center'}
        ]"
    >
        
        <svg v-if="iconPosition" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0818 3.1277C11.4292 2.32265 12.5708 2.32265 12.9182 3.1277L15.0982 8.17958C15.2453 8.52047 15.5691 8.7518 15.9393 8.7804L21.53 9.21239C22.4269 9.2817 22.7833 10.4078 22.0896 10.9806L17.8852 14.4518C17.5886 14.6967 17.4588 15.0899 17.5512 15.4632L18.8451 20.6915C19.0579 21.5513 18.1304 22.2429 17.3671 21.7935L12.5073 18.9326C12.1942 18.7482 11.8058 18.7482 11.4927 18.9326L6.63294 21.7935C5.86964 22.2429 4.94211 21.5513 5.1549 20.6915L6.44884 15.4632C6.54123 15.0899 6.41136 14.6967 6.1148 14.4518L1.91041 10.9806C1.21665 10.4078 1.57306 9.2817 2.47004 9.21239L8.06069 8.7804C8.43086 8.7518 8.75471 8.52047 8.90181 8.17958L11.0818 3.1277Z" fill="#23262F"/>
        </svg>
        <slot />
    </button>
</template>
  
<script>
    export default {
        props: {
            size: {
                type: String,
                default: 'md',
                validator: value => ['sm', 'md'].includes(value)
            },
            color: {
                type: String,
                validator: value => ['dark', 'light'].includes(value)
            },
            iconPosition: {
                type: String,
                validator: value => ['left', 'right', 'center'].includes(value)
            },
            icon: {
                type: String,
                default: ''
            }
        }
    };
</script>
  
<style lang="scss" scoped>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;

        padding: 11px 16px;

        color: $black;
        background-color: $yellow;
        border: 1px solid transparent;

        font-size: 14px;
        font-weight: 700;
        line-height: 16px;

        transition: 0.5s;
        border-radius: 90px; 

        svg{
            flex-shrink: 0;
        }

        &:hover{
            cursor: pointer;
            transition: 0.5s;
            background: $btn-hover;
        }

        &[disabled]{
            opacity: 0.5;
            pointer-events: none;
        }

    }
    .btn-md {
        padding: 15px 24px;
        font-size: 16px;
    }

    .btn-icon-left{
        svg{
            position: relative;
            width: 16px;
            height: 16px;
            margin-right: 11px;
            margin-left: -1px;
        }
    }

    .btn-icon-right{
        flex-direction: row-reverse;

        svg{
            position: relative;
            width: 16px;
            height: 16px;
            margin-left: 11px;
        }
    }

    .btn-icon{
        padding: 7px;
        border-radius: 50%;

        &.btn-md{
            padding: 11px;
        }
    }

    .btn-light {
        color: $white;
        background: transparent;

        svg{
            path{
                fill: #777E91;
                transition: 0.5s;
            }
        }

        &:hover{
            background: $dark;

            svg{
                path{
                    fill: $white;
                    transition: 0.5s;
                }
            }
        }
    }

  
  .btn-dark {
    color: $white;
    background: transparent;
    border-color: $border;

    svg{
        path{
            fill: $white;
            transition: 0.5s;
        }
    }

    &:hover{
        background: $dark;
        border-color: $dark;
    }
  }
  
  
  
</style>
  