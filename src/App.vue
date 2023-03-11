<script setup>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'
import Features from './components/Features.vue'
import WhyUs from './components/WhyUs.vue'
import TheForm from './components/TheForm.vue'
import TheEvents from './components/TheEvents.vue'
import TheFeedback from './components/TheFeedback.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<script>
export default {
  components: {
    TheHeader,
    TheMain,
    Features,
    WhyUs,
    TheForm,
    TheEvents,
    TheFeedback,
    TheFooter,
  }
}
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <TheMain />
    <Features />
    <div class="side"></div>
  </div>
  <div class="wrapper__two">
    <WhyUs />
    <TheForm />
    <div class="side"></div>
  </div>
  <TheEvents />
  <TheFeedback />
  <TheFooter />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0px 80px;

  @media (max-width: 1280px) {
    padding: 0px 40px;
  }

  @media (max-width: 992px) {
    padding: 0px 12px;
  }
}

.wrapper,
.wrapper__two {
  position: relative;

  .side {
    background: url('./assets/side.png');
    background-position: top;
    background-size: contain;
    position: absolute;
    width: 80px;
    height: 100%;
    top: 0;

    @media (max-width: 1280px) {
      width: 40px;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }
}

.wrapper {
  overflow: hidden;

  .side {
    right: -10px;
  }
}

.wrapper__two {
  overflow: hidden;

  .side {
    left: -15px;
  }
}
</style>
