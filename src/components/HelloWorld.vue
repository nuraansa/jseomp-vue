<template>
  <div class="overlay glow">L I L Y <br> J E W E L S</div>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://i.postimg.cc/L58N3rGj/wall1.png" class="car d-block" alt="..." loading="lazy" />
      </div>
      <div class="carousel-item">
        <img src="https://i.postimg.cc/kMp909w6/wall4.png" class="car d-block" alt="..." loading="lazy" />
      </div>
      <div class="carousel-item">
        <img src="https://i.postimg.cc/t4vk9SZg/wall2.png" class="car d-block" alt="..." loading="lazy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sea {
  background-color: #f4cea9;
  color: #92700f;
  border: 1px solid #92700f;
}

.sea:hover {
  background-color: #e8c39e;
  color: white;
  border: white;
}

.glow {
  font-size: 60px;
  color: #92700f;
  text-align: center;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #b58912, 0 0 40px #92700f, 0 0 50px #92700f, 0 0 60px #92700f, 0 0 70px #92700f;
  }

  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e2ac1a, 0 0 50px #e2ac1a, 0 0 60px #e2ac1a, 0 0 70px #e2ac1a, 0 0 80px #e2ac1a;
  }
}

.bg {
  background-image: url(https://i.postimg.cc/QtqKB98r/ljc2.png);
  background-size: cover;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
}

.carousel-item {
  width: 100%;
}

.car {
  width: 100%;
  height: 100%;
}

.roo {
  margin: 1rem;
  padding: 0 !important;
}

.about-img {
  height: 90%;
  width: 100%;
  /* margin: 2rem; */
}

.mid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  font-size: 15px;
}
</style>
