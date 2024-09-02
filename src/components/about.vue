<template>
    <div class="all">
        <h1 class="text_shadows">About me</h1>
        <p>This is the about component.</p>
    </div>
</template>

<script>
    export default {
        name: 'AboutContent'
    }
</script>

<style scoped>
.all {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
}

.text_shadows {
  text-shadow: 3px 3px 0 #3ebffb, 6px 6px 0 #1eb8ff,
    9px 9px #009de5, 12px 12px 0 #0097dd;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 8vh;
  text-align: center;
  margin: 0;
  color: #0097dd;
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: 0.4rem;
  padding-bottom: 1vh;
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 #3ebffb;
  }
  20% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff;
  }
  30% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff, 9px 9px #009de5;
  }
  40% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff, 9px 9px #009de5,
      12px 12px 0 #0097dd;
  }
  50% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff, 9px 9px #009de5,
      12px 12px 0 #0097dd;
  }
  60% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff, 9px 9px #009de5,
      12px 12px 0 #0097dd;
  }
  70% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff, 9px 9px #009de5;
  }
  80% {
    text-shadow: 3px 3px 0 #3ebffb,
      6px 6px 0 #1eb8ff;
  }
  90% {
    text-shadow: 3px 3px 0 #3ebffb;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

p {
    padding-top: 2vh;
    border-top: 3px solid rgb(70, 70, 70);
    width: 100%;
}
</style>