<template>
    <div class="solutions">
        <div class="solutions__title">{{ title }}</div >
            <ul class="solutions__list">
                <li class="solutions__item" v-for="(item, index) in items" :key="index">
                    <div class="solutions__icon">
                    <img src="~/assets/img/check.svg" alt="">
                    </div>

                    <div class="solutions__data">
                    <div class="solutions__caption">{{ item.caption }}</div>
                    <div class="solutions__text">{{ item.text }}</div>
                    </div>

                </li>
            </ul>
        </div>
</template>

<style lang="scss" scoped>
    .solutions{
        padding: 74px 53px;

        &__title{
            font-size: 25px;
            line-height: 40px;
            color: $white;
            max-width: 190px;
        }

        &__list{
            margin: 65px 0 0 0;
            padding: 0;
            list-style-type: none;
        }

        &__item{
            display: flex;
            align-items: center;

            margin-bottom: 25px;

            color: $white;

            &:last-child{
                margin-bottom: 0;
            }
        }

        &__icon{
            display: flex;
            flex-shrink: 0;
            justify-content: center;
            align-items: center;

            width: 45px;
            height: 45px;

            margin-right: 25px;

            background: rgba(255, 255, 255, 0.2);
            border-radius: 45px;
        }

        &__caption{
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
        }

        &__text{
            font-size: 14px;
            line-height: 24px;
            font-family: 'Roboto';
        }
    }
</style>

<script>
    export default {
        props: {
            items: {
                type: Array, // тип свойства - массив
                required: true // свойство обязательно для передачи
            },
            title: {
                type: String,
            }
        }
    }
</script>
