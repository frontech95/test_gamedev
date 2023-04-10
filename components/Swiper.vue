<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <Solutions title="Зможеш обрати свій варіант" :items="[
                { caption: 'CPA', text: '$25 і вище' },
                { caption: 'REVSHARE', text: 'Піднімай до 60%' },
                { caption: 'Гібрід', text: 'Зробимо як скажеш' }
            ]"></Solutions>
        </div>
        <div class="swiper-slide">
            <Solutions title="Зможеш обрати свій варіант" :items="[
                { caption: 'CPA', text: '$25 і вище' },
                { caption: 'REVSHARE', text: 'Піднімай до 60%' },
                { caption: 'Гібрід', text: 'Зробимо як скажеш' }
            ]"></Solutions>
        </div>
        <div class="swiper-slide">
            <Solutions title="Зможеш обрати свій варіант" :items="[
                { caption: 'CPA', text: '$25 і вище' },
                { caption: 'REVSHARE', text: 'Піднімай до 60%' },
                { caption: 'Гібрід', text: 'Зробимо як скажеш' }
            ]"></Solutions>
        </div>
    </div>
    
    <div class="swiper-actions">
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination">
            <div class="swiper-pagination-bullet is-active"></div>
            <div class="swiper-pagination-bullet"></div>
            <div class="swiper-pagination-bullet"></div>
        </div>
        <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import Solutions from '~/components/Solutions.vue';

export default {
  components:{
    Solutions,
  },
  mounted() {

  },

};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}

.swiper-actions{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 105px;
    z-index: 95;

    .swiper-button-prev, .swiper-button-next{
        position: static !important;
        margin: 0;
    }

    .swiper-button-prev{
        width: 10px;
        height: 7px;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.60588 0.843461C3.33533 0.593724 2.91356 0.610592 2.66382 0.881138L0.509972 3.21444C0.27424 3.46982 0.274238 3.86344 0.509967 4.11882L2.66382 6.45218C2.91355 6.72273 3.33532 6.7396 3.60587 6.48987C3.87642 6.24013 3.89329 5.81836 3.64356 5.54781L2.52248 4.3333L8.99984 4.3333C9.36803 4.3333 9.6665 4.03482 9.6665 3.66663C9.6665 3.29844 9.36803 2.99997 8.99984 2.99997L2.52251 2.99997L3.64355 1.78552C3.89329 1.51497 3.87642 1.0932 3.60588 0.843461Z' fill='%23E6E8EC'/%3E%3C/svg%3E%0A");
        
        &::after{
            display: none;
        }
    }

    .swiper-button-next{
        width: 10px;
        height: 7px;
        transform: rotate(180deg);
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.60588 0.843461C3.33533 0.593724 2.91356 0.610592 2.66382 0.881138L0.509972 3.21444C0.27424 3.46982 0.274238 3.86344 0.509967 4.11882L2.66382 6.45218C2.91355 6.72273 3.33532 6.7396 3.60587 6.48987C3.87642 6.24013 3.89329 5.81836 3.64356 5.54781L2.52248 4.3333L8.99984 4.3333C9.36803 4.3333 9.6665 4.03482 9.6665 3.66663C9.6665 3.29844 9.36803 2.99997 8.99984 2.99997L2.52251 2.99997L3.64355 1.78552C3.89329 1.51497 3.87642 1.0932 3.60588 0.843461Z' fill='%23E6E8EC'/%3E%3C/svg%3E%0A");
        
        &::after{
            display: none;
        }
    }

    .swiper-pagination{
        display: flex;
        align-items: center;
        justify-content: center;

        position: static;

        margin: 0 13px;

        &-bullet{
            margin-right: 10px;

            display: block;
            width: 8px;
            height: 8px;
            background: #E6E8EC;
            border-radius: 50%;
            opacity: 1;

            &.is-active{
                background: #FFD166;
            }


            &:last-child{
                margin-right: 0;
            }
        }
    }
}
</style>