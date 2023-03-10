<template>
    <section class="tt:py-[100px] py-7">
        <div class="container">
            <h1 class="text-center text-[#1F2937] font-semibold	text-4xl">Почему Coozin?</h1>
            <ul class="whyus__box flex mt-[50px] flex-wrap justify-around items-center">
                <li class="px-5 whyus__item">
                    <img class="block object-cover m-auto h-[125px]" src="../assets/whyus/1.png"
                        alt="rocket">
                    <h1 class="text-center mt-2 text-[#1F2937] text-lg leading-4 font-semibold">Универсальная платформа</h1>
                    <p class="text-center mt-3 text-[#4B5563] text-base font-normal">Предназначенная для самозанятых женщин
                        превратить свое хобби в прибыльный бизнес</p>
                </li>
                <li class="px-5 whyus__item">
                    <img class="block object-cover m-auto h-[125px]" src="../assets/whyus/2.png"
                        alt="rocket">
                    <h1 class="text-center mt-2 text-[#1F2937] text-lg leading-4 font-semibold">Универсальная платформа</h1>
                    <p class="text-center mt-3 text-[#4B5563] text-base font-normal">Предназначенная для самозанятых женщин
                        превратить свое хобби в прибыльный бизнес</p>
                </li>
                <li class="px-5 whyus__item">
                    <img class="block object-cover m-auto h-[125px]" src="../assets/whyus/3.png"
                        alt="rocket">
                    <h1 class="text-center mt-2 text-[#1F2937] text-lg leading-4 font-semibold">Универсальная платформа</h1>
                    <p class="text-center mt-3 text-[#4B5563] text-base font-normal">Предназначенная для самозанятых женщин
                        превратить свое хобби в прибыльный бизнес</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    components: 'WhyUs'
}
</script>

<style lang="scss" scoped>
.whyus__box{
    @media (max-width: 1024px) {
        row-gap: 50px;
    }
}
.whyus__item{
    width: 33%;
    @media (max-width: 1024px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
        max-width: 576px;
    }
}
</style>