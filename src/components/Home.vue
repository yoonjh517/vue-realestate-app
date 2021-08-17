<template>
  <div class="LandingPage">
    <p>Style Guide</p>
    <div class="LandingPage-img-box">
      <img src="../images/style-guide.png" alt="" />
    </div>

    <p>Layout</p>
    <div class="LandingPage-img-box">
      <img src="../images/layout.png" alt="" />
    </div>

    <p>Design</p>
    <div class="LandingPage-img-box">
      <img src="../images/design.png" alt="" />
    </div>

    <p>Design for Modal</p>
    <div class="LandingPage-img-box">
      <img src="../images/design-modal.png" alt="" />
    </div>

    <p>Design for Scroll Effect</p>
    <div class="LandingPage-img-box">
      <img src="../images/design-scroll-effect.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: [],
      date: [],
    };
  },
  methods: {},
};
</script>

<style>
.LandingPage-img-box {
  width: 50%;
  margin: 50px auto 150px;
  box-shadow: 1px 1px 2px 0.5px #ddd;
}
.LandingPage p {
  text-align: center;
}
.LandingPage img {
  width: 100%;
}
</style>
