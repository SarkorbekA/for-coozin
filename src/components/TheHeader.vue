<template>
    <header class="py-6">
        <div class="container flex justify-between items-center	">
            <div class="burger__btn">
                <img src="../assets/header/menu_btn.svg"
                    alt="menu btn">
            </div>
            <div class="logo">
                <img src="../assets/header/logo.svg"
                    alt="">
            </div>
            <nav class="navbar">
                <ul class="flex items-center gap-9">
                    <li>
                        <a class="font-medium text-base leading-4 text-[#374151]"
                            href="#">О нас</a>
                    </li>
                    <li>
                        <a class="font-medium text-base leading-4 text-[#374151]"
                            href="#">Edu Coozin</a>
                    </li>
                    <li>
                        <a class="font-medium text-base leading-4 text-[#374151]"
                            href="#">Почему Coozin?</a>
                    </li>
                    <li>
                        <a class="font-medium text-base leading-4 text-[#374151]"
                            href="#">Мероприятия</a>
                    </li>
                </ul>
            </nav>
            <div class="flex gap-4 items-center">
                <div class="lang cursor-pointer relative">
                    <h4 class="text-[#1F2937] bg-[#F3F4F6] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">UZ</h4>
                    <ul class="absolute opacity-0 duration-700 invisible shadow-lg py-2 top-[98%] flex flex-col left-0 w-full">
                        <li class="text-[#1F2937] bg-white pl-2 text-base font-medium leading-6 py-[2px]">
                            UZ</li>
                        <li
                            class="text-[#1F2937] bg-white pl-2 text-base font-medium leading-6 py-[2px]">
                            RU</li>
                    </ul>
                </div>
                <a href="#"
                    class="login block text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">Присоединиться</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    components: 'TheHeader'
}
</script>

<style lang="scss" scoped>
.burger__btn {
    display: none;

    @media (max-width: 992px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.navbar {
    @media (max-width: 992px) {
        display: none;
    }
}

.lang:hover ul{
    opacity: 1;
    transition: .4s;
    visibility: visible;
}

.login {
    @media (max-width: 992px) {
        display: none;
    }
}
</style>