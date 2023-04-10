<template>
    <div class="informer">
        <h2 class="informer__title">{{ title }}</h2>
        <div class="informer__caption">{{ caption }}</div>

        <picture>
            <source media="(min-width: 993px)" srcset="~/assets/img/graph.svg">
            <img src="~/assets/img/graph_mob.svg" alt="graph" class="informer__graph">
        </picture>
        <Rating class="informer__rating" />
    </div>
</template>

<style lang="scss" scoped>
    .informer{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding: 37px 44px;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        background: rgba(35, 38, 47, 0.5);
        border-radius: 24px;
        overflow: hidden;
        z-index: 1;

        &__title{
            display: flex;
            align-items: center;

            &:before, &:after{
                content: '';
                margin-right: 25px;
                width: 36px;
                height: 45px;
                display: block;
                background: url('~/assets/img/hand.png') no-repeat;
            }

            &:after{
                margin: 0 0 0 25px;
                transform: scaleX(-1);
            }
        }

        &__caption{
            font-family: 'Roboto';
            color: $border;
            margin-top: 28px;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
        }

        &__rating{
            margin-top: 23px;
        }

        &__graph{
            position: absolute;
            left: 0;
            right: 0;
            top: 40px;
            z-index: -1;
            pointer-events: none;
        }

        @media (max-width: 992px) {
            padding: 25px;

            .informer{
                &__title{
                    position: relative;
                    left: 4px;

                    &::before, &::after{
                        width: 20px;
                        height: 25px;
                        margin-right: 10px;
                        background-size: cover;
                    }

                    &::after{
                        margin-left: 10px;
                    }
                }

                &__caption{
                    margin-top: 26px;
                }

                &__graph{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        @media (max-width: 640px) {
            .informer{
                &__graph{
                    top: 74px;
                    height: auto;
                }
            }
        }
    }
</style>

<script>
  import Button from '~/components/Button.vue';
  import Rating from '~/components/Rating.vue';
  
  export default {
    components: {
      Button,
      Rating
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      caption: {
        type: String,
        default: ''
      }
    }
  };
</script>