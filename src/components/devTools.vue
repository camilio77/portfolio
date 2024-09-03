<template>
    <div class="all">
      <div class="content">
        <h2>Developer tools</h2>
        <h2>Developer tools</h2>
        <h1>Developer tools</h1>
      </div>
      <div class="devTools">
            <div class="skills">
                <div class="skill">
                    <img src="../assets/25231.png" alt="">
                    <h3>GITHUB</h3>
                </div>
            </div>
            <div class="skills">
                <div class="skill">
                    <img src="../assets/Git-Icon-1788C.png"
                        alt="">
                    <h3>GIT</h3>
                </div>
            </div>
            <div class="skills">
                <div class="skill">
                    <img src="../assets/git-branch.svg" alt="">
                    <h3>GIT BRANCH</h3>
                </div>
            </div>
            <div class="skills">
                <div class="skill">
                    <img src="../assets/Figma-Logo-PNG-Picture.png" alt="">
                    <h3>FIGMA</h3>
                </div>
            </div>
            <div class="skills">
                <div class="skill">
                    <img src="../assets/Termius.png" alt="">
                    <h3>TERMIUS</h3>
                </div>
            </div>
            <div class="skills">
                <div class="skill">
                    <img src="../assets/Microsoft.VisualStudio.Services.Icons.png" alt="">
                    <h3>CONVENTIONAL</h3>
                </div>
            </div>
            <div class="skills">
                <div class="skill">
                    <img src="../assets/1681039084chatgpt-icon.webp" alt="">
                    <h3>GPT</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DevToolsContent'
    }
</script>

<style>
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

.devTools {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 1vh;
    margin-top: 2vh;
    padding-top: 2vh;
    border-top: 3px solid var(--border-color-skills);
}

.skills {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.skill {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1vh;
    box-sizing: border-box;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
}

.skill:hover {
    box-shadow: -1px 1px 11px 4px var(--border-color-shadow);
    border: 1px solid var(--border-color);
    background: var(--special-background);
    filter: brightness(130%);
    transform: scale(1.02);
    cursor: pointer;
}

.skill img {
    width: 15vh;
    height: 15vh;
    object-fit: contain;
}

.skill h3 {
    font-size: 4vh;
    height: min-content;
    color: var(--font-color);
}
</style>