<template>
  <main>
    <header>
      <RouterLink to="/">
        <img src="@/assets/images/logo.svg" alt="YelpCamp logo">
      </RouterLink>
    </header>

    <section class="hero__wrapper">
      <div class="hero">
        <img 
        src="@/assets/images/HeroImage-Mobile.jpg" 
        alt="an image of people camping"
        class="hero__img--mobile"
        v-if="mobile"
        >
        <img 
        src="@/assets/images/HeroImage.jpg" 
        alt="an image of people camping"
        class="hero__img--desktop"
        v-else
        >

      </div>
    </section>
    


    <section class="content__wrapper">
      <section class="home-content">
        <h1>
          Explore the best camps on Earth.
        </h1>
        <p>
          YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.
        </p>
        <ul class="feedback--list">
          <li class="feedback--item">
            <img src="@/assets/images/Checkmark.svg" alt="Checkmark">
            <span>Add your own camp suggestions.</span>
          </li>
          <li class="feedback--item">
            <img src="@/assets/images/Checkmark.svg" alt="Checkmark">
            <span>Leave reviews and experiences.</span>
          </li>
          <li class="feedback--item">
            <img src="@/assets/images/Checkmark.svg" alt="Checkmark">
            <span>See locations for all camps.</span>
          </li>
        </ul>
        <RouterLink to="/about" class="cta">View Campgrounds</RouterLink>
      </section>
      <section class="sponsors">
        <p>Partnered with:</p>
        <ul>
          <li>
            <img src="@/assets/images/Airbnb.svg" alt="airbnb logo">
          </li>
          <li>
            <img src="@/assets/images/Booking.svg" alt="booking.com logo">
          </li>
          <li>
            <img src="@/assets/images/PlumGuide.svg" alt="plum Guide logo">
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  components: {
    
  },
  setup() {
    const mobile = ref(null);
    const windowWidth = ref(null);
    function checkScreen() {
      windowWidth.value = window.innerWidth;
      if (windowWidth.value > 991) {
        mobile.value = false
      } else {
        mobile.value = true
      }
    }
    onMounted(() => {
      checkScreen();
      window.addEventListener("resize", checkScreen);
    })

    return {
      mobile
    }
  }
}
</script>

<style scoped>
  header {
    padding: 1.5em 1em;
  }

  .hero__img--mobile {
    min-height: 15em;
    object-fit: cover;
  }
  .hero {
    height: 100%;
  }
  .hero__img--desktop {
    height: inherit;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
    line-height: 1;
  }
  .home-content {
    padding: 1.5em 1.2em 0;
  }
  .home-content > * {
    margin-bottom: .5em;
  }
  .feedback--list {
    margin-top: .8em;
  }
  .feedback--item {
    display: flex;
    align-items: center;
    gap: .5em;
    line-height: 1;
  }
  .feedback--item + .feedback--item {
    margin-top: .8em;
  }
  .cta {
    background-color: black;
    padding: 1em 2em;
    border-radius: 6px;
    color: #fff;
    margin-top: 1em;
  }
  .sponsors {
    padding: 1em 1.2em;
  }
  .sponsors ul {
    display: flex;
    align-items: center;

  }

  @media (min-width: 992px) {
    main {
      display: grid;
      grid-template-rows: 6em calc(100vh - 6em);
      grid-template-columns: .2fr 1.5fr 1fr;
      /* align-items: center; */
    }
    header {
      grid-row: 1;
      grid-column: 2;
    }
    .hero__wrapper {
      grid-column: 3;
      grid-row: 1/-1;
    }
    .content__wrapper {
      grid-row: 2;
      grid-column: 2;
      align-self: center;
    }
  } 
</style>
