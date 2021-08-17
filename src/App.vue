<template>
  <div>
    <!-- MODAL -->
    <Modal
      :data="data"
      :unitNumber="unitNumber"
      v-if="modalState == true"
      @closeModal="modalState = false"
    />
    <!-- HEADER -->
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-6 logo">
            <router-link to="/">REVUE</router-link>
          </div>
          <div class="col-md-6 menu">
            <ul>
              <li><router-link to="/">HOME</router-link></li>
              <li><router-link to="/unit">UNITS</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- CONTENT -->
    <router-view
      :title="title"
      :date="date"
      :data="data"
      @openModal="
        modalState = true;
        unitNumber = $event;
      "
    ></router-view>

    <!-- FOOTER -->
    <footer>
      <small>&copy; copyright 2021</small>
    </footer>
  </div>
</template>

<script>
// components
// import Card from "./components/Card.vue";
import Modal from "./components/Modal.vue";
// data
import data from "./assets/data";

export default {
  name: "App",
  data() {
    return {
      data: data,
      unitNumber: 0,
      modalState: false,
      getState: [],
      title: [],
      date: [],
    };
  },
  components: {
    // Card: Card,
    Modal: Modal,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* ---------- HEADER ---------- */
header {
  background-color: #47b883;
  height: 54px;
  margin-bottom: 66px;
  position: sticky;
  top: 0;
  z-index: 98;
}
header .logo {
  color: #fff;
  font-size: 32px;
}

header .menu ul {
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
}
header .menu ul li {
  list-style-type: none;
  margin-left: 10px;
}
header .menu ul li a {
  color: #fff;
  text-decoration: none;
}
header .logo a {
  color: #fff;
  text-decoration: none;
}
/* ---------- MAIN CONTENT ---------- */
.main-content {
  margin-top: 54px;
  min-height: 90vh;
}
/* ---------- FOOTER ---------- */
footer {
  min-height: 106px;
  background-color: #344952;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer small {
  color: white;
}
</style>
