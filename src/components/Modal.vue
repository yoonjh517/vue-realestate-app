<template>
  <div class="black-bg">
    <div class="slide-container-container">
      <div class="slide-container">
        <div class="slide-box">
          <img :src="data[unitNumber].image1" />
        </div>
        <div class="slide-box">
          <img :src="data[unitNumber].image2" />
        </div>
        <div class="slide-box">
          <img :src="data[unitNumber].image3" />
        </div>
        <div class="slide-box">
          <img :src="data[unitNumber].image4" />
        </div>
        <div class="slide-box">
          <img :src="data[unitNumber].image5" />
        </div>
      </div>

      <i class="fas fa-times-circle closeBtn" @click="$emit('closeModal')"></i>

      <div class="slide-buttons">
        <button class="slide-1" @click="showImg1()">1</button>
        <button class="slide-1" @click="showImg2()">2</button>
        <button class="slide-1" @click="showImg3()">3</button>
        <button class="slide-1" @click="showImg4()">4</button>
        <button class="slide-1" @click="showImg5()">5</button>
      </div>

      <div class="move-buttons">
        <i
          class="fas fa-arrow-alt-circle-left prevBtn"
          @click="moveBefore()"
        ></i>
        <i
          class="fas fa-arrow-alt-circle-right nextBtn"
          @click="moveNext()"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      currentImg: 1,
    };
  },
  props: {
    data: Array,
    unitNumber: Number,
  },

  methods: {
    // carousel number buttons
    showImg1() {
      document.querySelector(".slide-container").style.transform =
        "translateX(0)";
    },
    showImg2() {
      document.querySelector(".slide-container").style.transform =
        "translateX(-100vw)";
    },
    showImg3() {
      document.querySelector(".slide-container").style.transform =
        "translateX(-200vw)";
    },
    showImg4() {
      document.querySelector(".slide-container").style.transform =
        "translateX(-300vw)";
    },
    showImg5() {
      document.querySelector(".slide-container").style.transform =
        "translateX(-400vw)";
    },

    // next/previous button

    moveNext() {
      if (
        this.currentImg <
        document.querySelector(".slide-container").childElementCount
      ) {
        document.querySelector(".slide-container").style.transform =
          "translateX(-" + this.currentImg + "00vw)";
        this.currentImg++;
      }
    },
    moveBefore() {
      if (this.currentImg > 0) {
        document.querySelector(
          ".slide-container"
        ).style.transform = `translateX(-${this.currentImg - 2}00vw)`;
        this.currentImg--;
      }
    },
  },
};
</script>

<style>
.black-bg {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 99;
}

/* CAROUSEL */
.slide-box {
  width: 100vw;
  float: left;
  text-align: center;
}
.slide-container-container {
  overflow: hidden;
  position: relative;
  height: fit-content;
}
.slide-container {
  width: 500vw;
  transition: transform 1s;
}
.slide-box img {
  width: 100%;
}
.black-bg .slide-buttons {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.slide-1 {
  border: none;
  color: white;
  background-color: #344952;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 3px;
  transition: all 0.3s;
}
.slide-1:hover {
  transform: scale(1.2);
}

.closeBtn {
  position: absolute;
  z-index: 99;
  top: 5%;
  right: 5%;
  font-size: 55px;
  cursor: pointer;
  opacity: 0.7;
  color: #344952;
  transition: transform 0.2s;
}
.closeBtn:hover {
  transform: scale(1.1);
  color: #47b883;
}
/* prev/next button */
.move-buttons {
  position: absolute;
  top: 50%;
  font-size: 55px;
  opacity: 0.7;
  width: 100%;
  cursor: pointer;
}
.move-buttons .prevBtn {
  float: left;
  transform: translateX(100%);
}
.move-buttons .nextBtn {
  float: right;
  transform: translateX(-100%);
}
.move-buttons .prevBtn:hover,
.move-buttons .nextBtn:hover {
  color: #47b883;
}
</style>
