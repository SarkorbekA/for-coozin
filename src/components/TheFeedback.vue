<template>
    <section class="feedback py-10">
        <div class="container">
            <h1 class="text-center text-[#1F2937] font-semibold notel:text-4xl text-xl">Наши довольные вендоры</h1>
            <swiper :slidesPerView="1"
                :loop="true"
                :spaceBetween="30"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: false,
                }"
                :breakpoints="{
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 25,
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
                :modules="modules"
                class="mySwiper">
                <swiper-slide>
                    <div class="feedback__item">
                        <div class="py-[50px] bg-[#F3F4F6] rounded-2xl">
                            <img class="block m-auto"
                                src="../assets/feedback/mark.svg"
                                alt="mark">
                            <p class="mt-5 w-[80%] m-auto text-center">When our designs need an expert opinion or approval,
                                I
                                know I can rely
                                on your agency Thank you
                                for all your help-I will be recommending you to everyone</p>
                        </div>
                        <div class="arrow"></div>
                        <div class="flex flex-col items-center mt-1">
                            <div class="w-[48px] h-[48px]">
                                <img class="object-cover" src="../assets/feedback/women.png"
                                    alt="person">
                            </div>
                            <h3 class="mt-2 text-[#1F2937] font-semibold	text-base leading-4">Name</h3>
                            <h4 class="mt-2 text-[#1F2937] font-normal text-base leading-4">Designation</h4>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="feedback__item">
                        <div class="py-[50px] bg-[#F3F4F6] rounded-2xl">
                            <img class="block m-auto"
                                src="../assets/feedback/mark.svg"
                                alt="mark">
                            <p class="mt-5 w-[80%] m-auto text-center">When our designs need an expert opinion or approval,
                                I
                                know I can rely
                                on your agency Thank you
                                for all your help-I will be recommending you to everyone</p>
                        </div>
                        <div class="arrow"></div>
                        <div class="flex flex-col items-center mt-1">
                            <div class="w-[48px] h-[48px]">
                                <img class="object-cover" src="../assets/feedback/women.png"
                                    alt="person">
                            </div>
                            <h3 class="mt-2 text-[#1F2937] font-semibold	text-base leading-4">Name</h3>
                            <h4 class="mt-2 text-[#1F2937] font-normal text-base leading-4">Designation</h4>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="feedback__item">
                        <div class="py-[50px] bg-[#F3F4F6] rounded-2xl">
                            <img class="block m-auto"
                                src="../assets/feedback/mark.svg"
                                alt="mark">
                            <p class="mt-5 w-[80%] m-auto text-center">When our designs need an expert opinion or approval,
                                I
                                know I can rely
                                on your agency Thank you
                                for all your help-I will be recommending you to everyone</p>
                        </div>
                        <div class="arrow"></div>
                        <div class="flex flex-col items-center mt-1">
                            <div class="w-[48px] h-[48px]">
                                <img class="object-cover" src="../assets/feedback/women.png"
                                    alt="person">
                            </div>
                            <h3 class="mt-2 text-[#1F2937] font-semibold	text-base leading-4">Name</h3>
                            <h4 class="mt-2 text-[#1F2937] font-normal text-base leading-4">Designation</h4>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="feedback__item">
                        <div class="py-[50px] bg-[#F3F4F6] rounded-2xl">
                            <img class="block m-auto"
                                src="../assets/feedback/mark.svg"
                                alt="mark">
                            <p class="mt-5 w-[80%] m-auto text-center">When our designs need an expert opinion or approval,
                                I
                                know I can rely
                                on your agency Thank you
                                for all your help-I will be recommending you to everyone</p>
                        </div>
                        <div class="arrow"></div>
                        <div class="flex flex-col items-center mt-1">
                            <div class="w-[48px] h-[48px]">
                                <img class="object-cover" src="../assets/feedback/women.png"
                                    alt="person">
                            </div>
                            <h3 class="mt-2 text-[#1F2937] font-semibold	text-base leading-4">Name</h3>
                            <h4 class="mt-2 text-[#1F2937] font-normal text-base leading-4">Designation</h4>
                        </div>
                    </div>
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
            modules: [Autoplay],
        };
    },
}

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper';

</script>

<style lang="scss" scoped>
.swiper {
    width: 100%;
    height: auto;
}

.swiper-slide {
    height: 100%;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-wrapper {
    height: calc(100% - 20px);
    margin-top: 20px !important;
}

.feedback__item {
    width: 100%;
}

.arrow {
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #F3F4F6;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>

<style lang="scss">
.feedback {
    .swiper {
        width: 100%;
        height: 100%;
        margin-top: 48px;

        @media (max-width: 576px) {
            margin-top: 20px;
        }
    }

    .swiper-slide {
        height: 100%;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        // width: 100%;
        // height: 100%;
        object-fit: cover;
    }
}
</style>