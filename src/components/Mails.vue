<template>
  <div class="mails">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Mails
          </h1>
          <h2 class="subtitle">
            Mail, listes de diffusion
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-boxed is-medium">
            <ul>
              <router-link tag="li" to="outlook">
                <a>Outlook</a>
              </router-link>
              <router-link tag="li" to="webmail">
                <a>WebMail</a>
              </router-link>
              <router-link tag="li" to="app">
                <a>Configurer une app</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="container my-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Mails',
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
