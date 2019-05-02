<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Oak Island</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
       <!-- <b-navbar-nav>
          <b-nav-item href="#" id="episodios">Episodios</b-nav-item>
          <b-nav-item href="#">Como assistir ?</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      msg: "test"
    };
  }
};
</script>

<style>
</style>
