<template>
    <div class="all">
        <div class="ey">
            <div class="content">
                <h2>Hi, i'm Camilo Serrano</h2>
                <h2>Hi, i'm Camilo Serrano</h2>
                <h1>Hi, i'm Camilo Serrano</h1>
            </div>
            <i class='bx bxs-hand' @click="animateIcon"></i>
        </div>
        <h3>Web <h2 class="blue" >Fullstack developer</h2>
        </h3>
        <p>It's a pleasure to meet you. Here, you'll find more about me. I'm currently learning new skills, but I'm
            always ready for new opportunities!</p>
    </div>
</template>

<script>
export default {
    name: 'CvContent',
    methods: {
        animateIcon(event) {
            // Add the animation class
            const icon = event.target;
            icon.classList.add('tilt-shaking');

            // Remove the class after animation ends to allow re-triggering
            icon.addEventListener('animationend', () => {
                icon.classList.remove('tilt-shaking');
            }, { once: true });
        }
    }
}
</script>


<style scoped>
@keyframes tilt-shaking {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }

    10% {
        transform: translate(5px, 5px) rotate(15deg);
    }

    20% {
        transform: translate(0, 0) rotate(0deg);
    }

    30% {
        transform: translate(-5px, 5px) rotate(-15deg);
    }

    40% {
        transform: translate(0, 0) rotate(0deg);
    }

    50% {
        transform: translate(5px, 5px) rotate(15deg);
    }

    60% {
        transform: translate(0, 0) rotate(0deg);
    }

    70% {
        transform: translate(-5px, 5px) rotate(-15deg);
    }

    80% {
        transform: translate(0, 0) rotate(0deg);
    }

    90% {
        transform: translate(5px, 5px) rotate(15deg);
    }

    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}

.all {
    width: 100%;
    height: 100%;
    padding-left: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.ey {
    width: 100%;
    height: 12vh;
    display: flex;
    align-items: center;
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
    color: #fff;
    font-size: 10vh;
    position: absolute;
}

.content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
}

.content h2:nth-child(2) {
    color: #03a9f4;
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

i {
    font-size: 10vh;
    color: rgb(245, 233, 0);
    cursor: pointer;
    rotate: 10deg;
    transition: transform 0.3s;
}

.tilt-shaking {
    animation: tilt-shaking 1s ease-in-out;
    /* Adjust duration as needed */
}

h3 {
    font-size: 4vh;
    width: 100%;
    display: flex;
}

.blue {
    margin-left: 1vh;
    font-size: 4vh;
    border-bottom: 3px solid #03a9f4;
}

p {
    font-size: 2.5vh;
    width: 70%;
    text-wrap: wrap;
}
</style>