<template>
    <div class="cv-container">
        <h1><i class='bx bx-briefcase-alt-2 shining-icon'></i>CV Component</h1>
        <img src="../assets/ENGLISH CV.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'CvContent'
    }
</script>

<style scoped>
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #1e53a2 #ffffff00;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff00;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #1e53a2;
    border-radius: 10px;
    border: 3px none #ffffff00;
  }

.cv-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-y: auto;
    padding: 20px; /* Add some padding */
}

h1 {
    width: 100%;
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 10px;
    margin-bottom: 20px; /* Add some margin */
    display: flex;
    align-items: center;
}

h1 i {
    font-size: 30px;
    margin-right: 10px;
    text-shadow: 0 0 6px #ffffff53, 0 0 10px #4f4f4f, 0 0 14px #3d3d3d, 0 0 18px #240558, 0 0 22px #545454, 0 0 26px #292929, 0 0 30px #040404;
}

img {
    max-width: 90%; /* Changed from width to max-width */
    height: auto;
    object-fit: contain;
}
</style>