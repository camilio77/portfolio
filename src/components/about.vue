<template>
  <div class="all">
    <div class="content">
      <h2>About Me</h2>
      <h2>About Me</h2>
      <h1>About Me</h1>
    </div>
    <div class="info">
      <div>
        <p>Hi, my name is Camilo Andres Serrano Jimenez. I’m 17 years old and a backend software developer with a
          passion
          for continuous learning and growth.</p>
        <p>I have a strong foundation in both backend and frontend technologies, programming languages, and development
          tools. Additionally, I possess valuable interpersonal skills, such as teamwork, active listening, and
          effective
          communication, which enable me to perform at my best in collaborative projects.</p>
      </div>
      <img src="../assets/WhatsApp Image 2024-09-02 at 3.34.36 PM.jpeg" alt="">
    </div>
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

.content {
  display: flex;
}

.content h1 {
  font-size: 10vh;
  height: 100%;
  opacity: 0;
  margin-right: 1vh;
}

.content h2 {
  color: var(--font-color);
  /* Replaced with variable */
  font-size: 10vh;
  position: absolute;
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px var(--border-color);
  /* Replaced with variable */
}

.content h2:nth-child(2) {
  color: var(--border-color);
  /* Replaced with variable */
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {

  0%,
  100% {
    clip-path: polygon(0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%);
  }
}

.info {
  width: 100%;
  display: flex;
  padding-top: 2vh;
  border-top: 3px solid var(--border-color-skills);
  justify-content: space-around;
  align-items: center;
}

.info div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
}

p {
  font-size: 20px;
  line-height: 1.5;
}

img {
  width: 30%;
  object-fit: cover;
  border-radius: 20px;
  border: 2px double var(--social-color);
  padding: 1vh;
  animation-duration: 0.3s;
  animation-name: animate-fade;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
}

@keyframes animate-fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>