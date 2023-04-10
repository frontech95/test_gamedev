<template>
    <div class="advants-card">
        <div class="advants-card__icon">
            <img :src="image" alt="" class="advants-card__img">
        </div>
        <div class="advants-card__data">
            <div class="advants-card__title" v-html="title"> </div>
            <div class="advants-card__caption"> {{ text }}</div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            image: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .advants-card{
        display: flex;
        flex-direction: column;
        align-items: center;

        &__icon{
            display: flex;
            flex-shrink: 0;
            align-items: center;
            justify-content: center;

            margin-bottom: 26px;

            width: 65px;
            height: 65px;

            background: $yellow;
            border-radius: 15px;

            img{
                max-width: 100%;
            }
        }

        &__title{
            max-width: 250px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            font-family: 'Roboto';
            color: $gray;
            margin: 0 auto;
        }

        &__caption{
            margin-top: 25px;
            font-family: 'Roboto';
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            max-width: 345px;
            color: $border;
        }
    }

    @media (max-width: 767px) {
        .advants-card{
            align-items: center;
            flex-direction: row;
            max-width: 315px;
            margin-left: auto;
            margin-right: auto;

            &__icon{
                margin-right: 25px;
                margin-bottom: 0;

                width: 45px;
                height: 45px;

                padding: 10px;
            }

            &__title{
                text-align: left;
                margin: 0;
                
            }

            &__caption{
                text-align: left;
                margin-top: 5px;
            }
        }
    }
</style>

