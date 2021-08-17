<template>
  <div>
    <div class="container">
      <div class="row detail-info"></div>
    </div>
    <div class="container detail-container">
      <div class="detail-img-box">
        <img :src="data[$route.params.id].image1" alt="room-image" />
      </div>
      <div class="detail-img-box">
        <img :src="data[$route.params.id].image2" alt="room-image" />
      </div>
      <div class="detail-img-box">
        <img :src="data[$route.params.id].image3" alt="room-image" />
      </div>
      <div class="detail-img-box">
        <img :src="data[$route.params.id].image4" alt="room-image" />
      </div>
      <div class="detail-img-box">
        <img :src="data[$route.params.id].image5" alt="room-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    data: Array,
  },
  mounted() {
    // detail-img-box 0 opacity, scale
    window.addEventListener("scroll", function() {
      var height = window.scrollY;
      var y = (-1 / 500) * height + 3;
      document.querySelectorAll(".detail-img-box")[0].style.opacity = y;
      var z = (-1 / 5000) * height + 6 / 5;
      document.querySelectorAll(
        ".detail-img-box"
      )[0].style.transform = `scale(${z})`;
    });
    // detail-img-box 1 opacity, scale
    window.addEventListener("scroll", function() {
      var height = window.scrollY;
      var y = (-1 / 450) * height + 205 / 45;
      document.querySelectorAll(".detail-img-box")[1].style.opacity = y;
      var z = (-1 / 4500) * height + 61 / 45;
      document.querySelectorAll(
        ".detail-img-box"
      )[1].style.transform = `scale(${z})`;
    });
    // detail-img-box 2 opacity, scale
    window.addEventListener("scroll", function() {
      var height = window.scrollY;
      var y = (-1 / 300) * height + 9;
      document.querySelectorAll(".detail-img-box")[2].style.opacity = y;
      var z = (-1 / 6600) * height + (660 + 204) / 660;
      document.querySelectorAll(
        ".detail-img-box"
      )[2].style.transform = `scale(${z})`;
    });
    // detail-img-box 3 opacity, scale
    window.addEventListener("scroll", function() {
      var height = window.scrollY;
      var y = (-1 / 300) * height + 11;
      document.querySelectorAll(".detail-img-box")[3].style.opacity = y;
      var z = (-1 / 6500) * height + (65 + 27) / 65;
      document.querySelectorAll(
        ".detail-img-box"
      )[3].style.transform = `scale(${z})`;
    });
    // detail-img-box 4 opacity, scale
    window.addEventListener("scroll", function() {
      var height = window.scrollY;
      var y = (-1 / 400) * height + 39 / 4;
      document.querySelectorAll(".detail-img-box")[4].style.opacity = y;
      var z = (-1 / 5500) * height + (335 + 550) / 550;
      document.querySelectorAll(
        ".detail-img-box"
      )[4].style.transform = `scale(${z})`;
    });
  },
};
</script>

<style>
.detail-info {
  text-align: center;
}

/* to make scroll area */
.detail-container {
  height: 3600px;
  margin-top: 300px;
  margin-bottom: 600px;
}
.detail-container .detail-img-box {
  position: sticky;
  top: 200px;
  margin-top: 200px;
  transition: all 0.2s;
  opacity: 1;
}
.detail-container .detail-img-box img {
  display: block;
  margin: auto;
  max-width: 80%;
}
</style>
