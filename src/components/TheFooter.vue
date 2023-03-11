<template>
    <footer class="notel:py-[80px] py-4">
        <div class="container">
            <div class="logo ml:block hidden">
                <img class="block m-auto"
                    src="../assets/footer/logo.png"
                    alt="logo">
            </div>
            <nav class="footer__nav flex justify-center mt-[40px]">
                <ul class="flex items-center gap-8">
                    <li>
                        <a class="font-normal text-base leading-4 text-[#1F2937]"
                            href="#">О нас</a>
                    </li>
                    <li>
                        <a class="font-normal text-base leading-4 text-[#1F2937]"
                            href="#">Edu Coozin</a>
                    </li>
                    <li>
                        <a class="font-normal text-base leading-4 text-[#1F2937]"
                            href="#">Почему Coozin?</a>
                    </li>
                    <li>
                        <a class="font-normal text-base leading-4 text-[#1F2937]"
                            href="#">Присоединиться</a>
                    </li>
                    <li>
                        <a class="font-normal text-base leading-4 text-[#1F2937]"
                            href="#">Мероприятия</a>
                    </li>
                </ul>
            </nav>
            <div class="footer__support mt-[40px] flex justify-center items-center gap-5">
                <h3 class="text-[#374151] font-normal text-sm">При поддержке</h3>
                <div class="flex gap-5 items-center">
                    <img src="../assets/footer/cola.png"
                        alt="cola">
                    <img src="../assets/footer/osce.png"
                        alt="osce">
                </div>
            </div>
            <div class="accordion">
                <div v-for="(section, index) in footerEl"
                    :key="index"
                    class="accordion__section">
                    <button class="accordion__header"
                        @click="toggleSection(index)">
                        <h1 class="text-[#4B5563] text-sm font-medium">{{ section.header }}</h1>
                        <div class="accordion-arrow">
                            <img :class="section.open ? 'accordion-arrow__open' : 'accordion-arrow__close'"
                                src="../assets/footer/arrow.svg"
                                alt="arrow">
                        </div>
                    </button>
                    <div v-if="index == 4"
                        class="accordion__content"
                        :class="section.open ? 'accordion__open' : ''">
                        hello
                    </div>
                    <div v-else-if="index == 3"
                        class="accordion__content"
                        :class="section.open ? 'accordion__open' : ''">
                        hello
                    </div>
                    <div v-else
                        class="accordion__content"
                        :class="section.open ? 'accordion__open' : ''">
                        hello
                    </div>
                </div>
            </div>
            <div class="flex w-full mt-[60px] ml:justify-center justify-between ml:items-center items-end gap-4">
                <h3 class="hidden ml:inline-block">ПОДПИСЫВАЙТЕСЬ НА НАС</h3>
                <div class="w-[64px] ml:block hidden h-[1px] bg-[#1F2937]"></div>
                <ul class="flex items-center gap-6">
                    <li>
                        <a class="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                            href="#">
                            <img src="../assets/footer/facebook.svg"
                                alt="">
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                            href="#">
                            <img src="../assets/footer/insta.svg"
                                alt="">
                        </a>
                    </li>
                    <li>
                        <a class="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                            href="#">
                            <img src="../assets/footer/yt.svg"
                                alt="">
                        </a>
                    </li>
                </ul>
                <div class="logo">
                    <img class="w-[52px] h-[60px] ml:hidden inline-block"
                        src="../assets/footer/logo.png"
                        alt="logo">
                </div>
            </div>
            <h3 class="mt-10 text-center text-[#1F2937] font-normal	ml:text-sm text-xs">2023 Coozin. All Rights Reserved
            </h3>
        </div>
    </footer>
</template>

<script>
export default {
    components: 'TheFeedback',
    data() {
        return {
            footerEl: [
                {
                    header: "О нас",
                    open: false
                },
                {
                    header: "Edu Coozin",
                    open: false
                },
                {
                    header: "Почему Coozin?",
                    open: false
                },
                {
                    header: "При поддержке",
                    open: false
                },
            ]
        };
    },
    methods: {
        toggleSection(index) {
            this.footerEl.forEach((section, i) => {
                if (i === index) {
                    section.open = !section.open;
                } // else {
                //     section.open = false;
                // }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.accordion {
    margin-top: 15px;
    display: none;
    flex-direction: column;
    gap: 15px;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
    }

    &__section {
        background: #FFFFFF;
    }

    // accordion header
    &__header {
        display: flex;
        align-items: center;
        height: 44px;
        gap: 10px;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid #E5E7EB;
    }

    &-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        text-align: left;
        max-width: 240px;
        width: 100%;
    }

    &-arrow {
        transition: 3s;

        &__open {
            transform: rotate(180deg);
            transition: .3s;
        }

        &__close {
            transform: rotate(0deg);
            transition: .3s;
        }
    }

    // accordion content
    &__content {
        height: 0;
        visibility: hidden;
        opacity: 0;
        transition: .2s;
    }

    &__open {
        transition: .1s linear;
        height: auto;
        visibility: visible;
        opacity: 1;
        padding: 14px 0px;
    }
}

.footer__nav {
    @media (max-width: 768px) {
        display: none;
    }
}

.footer__support {
    @media (max-width: 768px) {
        display: none;
    }
}
</style>