<template>
    <section class="tt:py-12 py-4 tt:mt-10">
        <div class="container tt:h-[800px] items-center tt:gap-6 gap-10 flex tt:flex-row flex-col justify-between">
            <div class="features__img h-full">
                <img class="w-full h-full object-cover rounded-2xl"
                    src="../assets/features/work.png"
                    alt="working">
            </div>
            <div class="features__box tt:py-[80px]">
                <h1 class="text-[#1F2937] font-semibold	notel:text-4xl text-2xl leading-9">EDU COOZIN</h1>
                <h3 class="text-[#374151] font-normal text-base leading-4 notel:mt-6 mt-3">Онлайн-академия Coozin предоставляет
                    обучение и помощь в развитии бизнеса. </h3>
                <ul class="notel:mt-[56px] mt-5 flex flex-col gap-[20px]">
                    <li>
                        <div class="flex items-center gap-2">
                            <img src="../assets/features/right.svg"
                                alt="right">
                            <h3 class="text-[#374151] leading-5 text-xl font-semibold">Курсы и мастер-классы</h3>
                        </div>
                        <p class="text-[#374151] mt-2 font-normal text-base	">На платформе доступны онлайн-курсы и
                            мастер-классы по различным темам, связанным с бизнесом,
                            такими как управление продажами, маркетинг, финансы и другие.</p>
                    </li>
                    <li>
                        <div class="flex items-center gap-2">
                            <img src="../assets/features/right.svg"
                                alt="right">
                            <h3 class="text-[#374151] leading-5 text-xl font-semibold">Опытные специалисты</h3>
                        </div>
                        <p class="text-[#374151] mt-2 font-normal text-base	">Курсы ведут опытные специалисты, которые
                            делятся своими знаниями и опытом.
                        </p>
                    </li>
                    <li>
                        <div class="flex items-center gap-2">
                            <img src="../assets/features/right.svg"
                                alt="right">
                            <h3 class="text-[#374151] leading-5 text-xl font-semibold">Обучись и начни свое дело</h3>
                        </div>
                        <p class="text-[#374151] mt-2 font-normal text-base	">Пользователи которые успешно прошли курсы
                            имеют возможность
                            присоединиться к торговой площадке Coozin.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    components: 'Features'
}
</script>

<style lang="scss" scoped>

.features__img{
    width: 50%;
    @media (max-width: 992px) {
        width: 100%;
        height: 700px;
    }
    @media (max-width: 576px) {
        height: 380px;
    }
    img{
        object-fit: cover;
        height: 100%;
    }
}
.features__box{
    width: 40%;
    @media (max-width: 1200px) {
        width: 45%;
    }
    @media (max-width: 992px) {
        width: 100%;
    }
}
</style>