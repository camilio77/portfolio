<template>
    <div class="all">
      <div class="content">
        <h2>Languages</h2>
        <h2>Languages</h2>
        <h1>Languages</h1>
      </div>
      <div class="languages">
        <div class="tilt">
          <img src="../assets/Flag-United-States-of-America.webp" alt="">
          <h2>English</h2>
          <h3>Intermedium</h3>
        </div>
        <div class="tilt">
          <img src="../assets/Bandera_de_España.svg.webp" alt="">
          <h2>Spanish</h2>
          <h3>Native</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LanguajesContent',
    mounted() {
      // Get all elements with class 'tilt'
      const tiltElements = document.getElementsByClassName('tilt');
  
      // Loop through each element
      Array.from(tiltElements).forEach(el => {
        // Add event listeners
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseout', function () {
          el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        });
        el.addEventListener('mousedown', function () {
          el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        });
        el.addEventListener('mouseup', function () {
          el.style.transform = 'perspective(500px) scale(1.01) rotateX(0) rotateY(0)';
        });
      });
    }
  }
  
  // Define the handleMove function outside of the component
  function handleMove(e) {
    const el = e.currentTarget; // Get the element that triggered the event
    const height = el.clientHeight;
    const width = el.clientWidth;
  
    const xVal = e.layerX;
    const yVal = e.layerY;
  
    const yRotation = 5 * ((xVal - width / 2) / width);
    const xRotation = -5 * ((yVal - height / 2) / height);
  
    const transformString = `perspective(500px) scale(1.01) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  
    el.style.transform = transformString;
  }
  </script>

<style scoped>
.all {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    gap: 2vh;
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

.languages {
  width: 100%;
  display: flex;
  margin-top: 2vh;
  padding-top: 2vh;
  border-top: 3px solid var(--border-color-skills);
  justify-content: space-around;
  align-items: center;
}

.languages div {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid var(--border-color);
    background: var(--languages-background);
    border-radius: 10px;
    padding: 3%;
    box-sizing: border-box;
}

.languages div:hover {
    box-shadow: -1px 1px 11px 4px var(--border-color-shadow);
    cursor: pointer;
}

.languages img {
    width: 80%;
    height: 25vh;
    object-fit: cover;
}

.languages h2 {
    font-size: 30px;
    margin-top: 1vh;
}

.languages h3 {
    font-size: 20px;
    margin-top: 1vh;
    color: var(--icon-special-color-alt);
}
</style>