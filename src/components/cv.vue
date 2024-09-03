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
    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color); /* Replaced with variables */
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 16px;
}

*::-webkit-scrollbar-track {
    background: var(--scrollbar-track-color); /* Replaced with variable */
}

*::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color); /* Replaced with variable */
    border-radius: 10px;
    border: 3px none var(--scrollbar-track-color); /* Replaced with variable */
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
    border-bottom: 3px solid var(--border-light-opacity-color); /* Replaced with variable */
    padding-bottom: 10px;
    margin-bottom: 20px; /* Add some margin */
    display: flex;
    align-items: center;
}

h1 i {
    font-size: 30px;
    margin-right: 10px;
    text-shadow: 
        0 0 6px var(--shadow-color-light), 
        0 0 10px var(--shadow-color-medium), 
        0 0 14px var(--shadow-color-dark), 
        0 0 18px var(--shadow-color-extra-dark), 
        0 0 22px var(--shadow-color-medium-dark), 
        0 0 26px var(--shadow-color-darker), 
        0 0 30px var(--shadow-color-darkest); /* Replaced with variables */
}

img {
    max-width: 90%; /* Changed from width to max-width */
    height: auto;
    object-fit: contain;
}

</style>