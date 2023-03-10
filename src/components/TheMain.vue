<template>
    <main class="py-10">
        <div class="container flex justify-between h-[600px]">
            <div class="main__box w-6/12 pt-20 flex flex-wrap h-full">
                <div class="w-full">
                    <h1 class="font-semibold notel:text-[40px] notel:leading-10 text-[#1F2937] text-2xl leading-8">Раскрой
                        свой потенциал
                        вместе с Coozin!
                    </h1>
                    <p class="font-normal text-base	leading-6 mt-2.5 tracking-tight	">Универсальная платформа Coozin
                        предоставляют множество
                        возможностей для
                        самозанятых женщин. На платформе
                        можно продавать товары и услуги, а также учиться новым навыкам и развивать свой бизнес</p>
                    <a href="#"
                        class="notel:inline-block block notel:mt-7 mt-5 text-center text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">Присоединиться</a>
                </div>
                <div class="w-full main__progress">
                    <h3 class="title text-[#374151] uppercase tracking-wide text-sm font-semibold leading-5 mb-5">Достижения
                    </h3>
                    <ul class="flex w-full items-center justify-between gap-8 tt:gap-4">
                        <li class="tt:w-[160px] w-[33%]">
                            <h2 class="text-[#1F2937] font-extrabold text-4xl leading-10">1K</h2>
                            <h3 class="text-[#374151] text-base	leading-4 mt-4 font-medium">женщин прошли обучение</h3>
                        </li>
                        <li class="tt:w-[160px] w-[33%]">
                            <h2 class="text-[#1F2937] font-extrabold text-4xl leading-10">130K</h2>
                            <h3 class="text-[#374151] text-base	leading-4 mt-4 font-medium">присоединились
                                в платформу</h3>
                        </li>
                        <li class="tt:w-[160px] w-[33%]">
                            <h2 class="text-[#1F2937] font-extrabold text-4xl leading-10">1K</h2>
                            <h3 class="text-[#374151] text-base	leading-4 mt-4 font-medium">пользователей платформы</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main__img w-[42%] flex flex-col h-full gap-5">
                <div class="main__item">
                    <div>
                        <img class="w-full h-full rounded-2xl object-cover"
                            src="../assets/main/1.png"
                            alt="girls">
                    </div>
                    <div>
                        <img class="w-full h-full rounded-2xl object-cover"
                            src="../assets/main/2.png"
                            alt="laptop">
                    </div>
                </div>
                <div class="main__item">
                    <div>
                        <img class="w-full h-full rounded-2xl object-cover"
                            src="../assets/main/3.png"
                            alt="laptop">
                    </div>
                    <div>
                        <img class="w-full h-full rounded-2xl object-cover"
                            src="../assets/main/4.png"
                            alt="girls">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    components: 'TheMain'
}
</script>

<style lang="scss" scoped>
.container {
    @media (max-width: 992px) {
        flex-direction: column-reverse;
        height: auto;
        gap: 0px;
    }
}

main {
    @media (max-width: 576px) {
        padding: 10px 0px;
    }
}

.main__box {
    @media (max-width: 1024px) {
        width: 53%;
    }

    @media (max-width: 992px) {
        padding-top: 40px;
        width: 100%;
    }

    @media (max-width: 640px) {
        padding-top: 20px;
    }

}

.main__img {
    gap: 20px;

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 992px) {
        width: 100%;
    }

    @media (max-width: 576px) {
        gap: 10px;
    }
}

.main__item {
    height: calc(50% - 10px);
    display: grid;
    gap: 20px;

    @media (max-width: 576px) {
        gap: 10px;
    }

    div {
        height: calc(300px - 10px);

        @media (max-width: 992px) {
            height: calc(400px - 10px);
        }

        @media (max-width: 576px) {
            height: calc(270px - 5px);
        }

        @media (max-width: 440px) {
            height: calc(180px - 5px);
        }
    }
}

.main__item:first-child {
    grid-template-columns: 7fr 3fr;
}

.main__item:last-child {
    grid-template-columns: 3fr 7fr;
}

.main__progress {
    margin-top: 120px;
    text-align: center;

    @media (max-width: 1280px) {
        margin-top: 40px;
    }

    .title {
        @media (max-width: 576px) {
            font-size: 24px;
            margin-bottom: 30px;
        }
    }

    ul {
        @media (max-width: 576px) {
            flex-direction: column;

        }

        li {
            @media (max-width: 576px) {
                width: 100%;
            }
        }
    }
}</style>