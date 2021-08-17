<template>
  <div class="container main-content">
    <div class="row">
      <div class="col-md-4" v-for="(a, i) in data" :key="i">
        <div
          class="container card-box"
          @click.self="$router.push({ name: 'detail', params: { id: i } })"
        >
          <div class="row">
            <div class="img-box">
              <img
                :src="data[i].image1"
                alt="room-img"
                @click.self="$emit('openModal', data[i].id)"
              />
            </div>
            <div
              class="row"
              @click="$router.push({ name: 'detail', params: { id: i } })"
            >
              <div class="col-md-8 info">
                <p class="unit-info">
                  <i class="fas fa-user"></i>
                  <span>{{ data[i].room }}</span>
                  <i class="fas fa-bath"></i>
                  <span>{{ data[i].bath }}</span>
                  <i class="fas fa-car"></i>
                  <span>{{ data[i].car }}</span>
                </p>
                <p>{{ data[i].address }}</p>
              </div>
              <div class="col-md-4 price">
                <h2>${{ data[i].price }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    data: Array,
  },
};
</script>

<style>
.img-box {
  height: 189px;
}
.img-box img {
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
  cursor: pointer;
}
.info i {
  margin: 0 5px;
}
.card-box {
  padding-top: 10px;
  margin-bottom: 27px;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 0.5px #ddd;
}
.card-box:hover {
  border: 1px solid #47b883;
}
.unit-info,
.price h2 {
  margin-top: 12px;
}
</style>
