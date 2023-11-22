<script setup>
import { ref } from 'vue';
import {Side} from "@/components/models/Side";

const props = defineProps({
  front: {
    type: Side,
    required: true,
  },
  back: {
    type: Side,
    required: true,
  },
});

const flipped = ref(false);

function flip() {
  flipped.value = !flipped.value;
}
</script>

<template>
  <div class="wrapper" @click="flip">
    <div class="card" :class="flipped ? 'flipped' : null">
      <article class="front">
        <h1>Vue Firebase Auth Starter</h1>
        <p>
          This project provides the most basic account handling features for firebase apps to save
          you re-writing them every time you want to start a new project!
        </p>
      </article>
      <article class="back">
        <h1>I hope it helps</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  perspective: 2000px;
  width: 80%;
  max-width: 800px;
  height: 500px;
  margin: auto;
  cursor: pointer;
}

article {
  border-radius: 1em;
}

.card {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  backface-visibility: hidden;
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  backface-visibility: hidden;
  border: 2px solid rgba(255, 255, 255, 0);
  transition: all 0.2s ease;
}

.front:hover {
  border: 2px solid rgba(255, 255, 255, 0.05);
}

.back:hover {
  border: 2px solid rgba(255, 255, 255, 0.05);
}

.back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>
