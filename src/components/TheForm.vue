<template>
    <section class="py-8">
        <div class="container flex gap-[40px] items-center justify-between">
            <div class="form__box">
                <h1 class="text-[#1F2937] font-semibold notel:text-[36px] text-xl notel:leading-[56px] leading-8">Готовы присоединиться и развиваться
                    вместе с нами?</h1>
                <h3 class="notel:mt-7 mt-2 text-[#374151] notel:text-xl text-base leading-8">Заполните форму, и мы свяжемся с вами!</h3>
                <form class="notel:mt-7 mt-3">
                    <div class="flex flex-wrap gap-[20px]">
                        <label class="form__label"
                            for="name">
                            <h4 class="text-[#374151] font-medium text-xl">Имя</h4>
                            <input
                                class="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                                id="name"
                                type="text">
                        </label>
                        <label class="form__label"
                            for="surname">
                            <h4 class="text-[#374151] font-medium text-xl">Фамилия</h4>
                            <input
                                class="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                                id="surname"
                                type="text">
                        </label>
                        <label class="form__label"
                            for="tel">
                            <h4 class="text-[#374151] font-medium text-xl">Номер телефона</h4>
                            <input
                                class="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                                type="number"
                                name="num"
                                id="tel"
                                placeholder="+998">
                        </label>
                        <label class="form__label"
                            for="direction">
                            <h4 class="text-[#374151] font-medium text-xl">Направление</h4>
                            <select
                                class="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                                name="direction"
                                id="direction">
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                            </select>
                        </label>
                        <label class="form__label"
                            for="city">
                            <h4 class="text-[#374151] font-medium text-xl">Город</h4>
                            <select
                                class="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                                name="city"
                                id="city">
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                            </select>
                        </label>
                        <label class="form__label"
                            for="district">
                            <h4 class="text-[#374151] font-medium text-xl">Город</h4>
                            <select
                                class="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                                name="district"
                                id="district">
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                                <option value="">Hello</option>
                            </select>
                        </label>
                    </div>
                    <input type="submit"
                        value="Отправить"
                        class="block notel:max-w-[345px] max-w-[100%] m-auto mt-[48px] w-full text-center text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">
                </form>
            </div>
            <div class="form__img">
                <img class="w-full h-full object-cover" src="../assets/theform/girl.png"
                    alt="girl">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    components: 'TheForm'
}
</script>

<style lang="scss" scoped>
.form__label {
    width: calc(50% - 10px);
    @media (max-width: 576px) {
        width: 100%;
    }
}

.form__img{
    width: 37%;
    @media (max-width: 1200px) {
        width: 42%;
    }
    @media (max-width: 1024px) {
        display: none;
    }
}

.form__box{
    width: 60%;
    @media (max-width: 1200px) {
        width: 56%;
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
}
</style>