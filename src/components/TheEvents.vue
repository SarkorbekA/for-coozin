<template>
    <section class="events py-10 mt-10">
        <div class="container">
            <h1 class="text-[#1F2937] text-center relative top-6 font-semibold text-4xl leading-9">Мероприятия</h1>
            <swiper :slidesPerView="1"
                :loop="true"
                :spaceBetween="30"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: false,
                }"
                :breakpoints="{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }"
                :navigation="true"
                :modules="modules"
                class="mySwiper">
                <swiper-slide>
                    <img src="../assets/events/1.png"
                        alt="img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/events/1.png"
                        alt="img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/events/1.png"
                        alt="img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/events/1.png"
                        alt="img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/events/1.png"
                        alt="img">
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
        };
    },
}

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';

</script>

<style lang="scss">
.events {
    .swiper {
        width: 100%;
        height: 590px;

        @media (max-width: 1200px) {
            height: 500px;
        }

        @media (max-width: 768px) {
            height: 450px;
        }
    }

    .swiper-slide {
        height: 100%;
        background: #F3F4F6;
        border-radius: 6px 16px 16px 16px;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px 16px 16px 16px;
    }

    .swiper-button-next,
    .swiper-button-prev {
        top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .swiper-button-prev:after {
        content: ' ' !important;
        background: url('../assets/events/left.svg');
        background-size: contain;
        background-position: center;
        width: 40px;
        height: 40px;
        z-index: 9999;
    }

    .swiper-button-next:after {
        content: ' ' !important;
        background: url('../assets/events/right.svg');
        background-size: contain;
        background-position: center;
        width: 40px;
        height: 40px;
        z-index: 9999;
    }

    .swiper-wrapper {
        height: calc(100% - 60px);
        margin-top: 60px !important;
    }
}
</style>