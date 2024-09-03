<template>
    <div class="all">
        <div class="content">
            <h2>Certifications</h2>
            <h2>Certifications</h2>
            <h1>Certifications</h1>
        </div>
        <div class="project">
            <!-- eslint-disable-next-line -->
            <swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation
                :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"
                :autoplay="{ delay: 3000, disableOnInteraction: false }" @swiper="onSwiper" @slideChange="onSlideChange"
                class="swiper-container">
                <swiper-slide><img src="../assets/image17.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/image18.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/image19.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/image20.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/image21.png" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/image22.png" alt=""></swiper-slide>
            </swiper>
        </div>
    </div>
</template>


<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; // Import Autoplay module

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
    name: 'CertificationContent',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {

        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay], // Include Autoplay module
        };
    }
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
    font-size: 10vh;
    position: absolute;
}

.content h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px var(--border-color);
}

.content h2:nth-child(2) {
    color: var(--border-color);
    animation: animate 4s ease-in-out infinite;
}

@keyframes animate {

    0%,
    100% {
        clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
        clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
}

.project {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 2vh;
    padding-top: 10vh;
    border-top: 3px solid var(--border-color-skills);
}

.swiper-container {
    width: 100%;
    height: 100%;
    user-select: none;
}

/* Customize Swiper navigation arrows */
.swiper-button-next,
.swiper-button-prev {
    color: var(--active-tab-border); /* Change arrow color */
}

/* Customize Swiper pagination dots */
.swiper-pagination-bullet {
    background-color: var(--active-tab-border); /* Change dot color */
}

/* Add hover effect for navigation arrows */
.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: var(--active-tab-border); /* Ensure the color remains the same on hover */
}

/* Customize active pagination dot */
.swiper-pagination-bullet-active {
    background-color: var(--active-tab-border); /* Change active dot color */
}


.swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.swiper-slide img {
    width: 80%;
    height: 90%;
    object-fit: contain;
    /* Adjust to contain or cover depending on your needs */
    display: block;
    /* Ensure images are displayed as block elements */
}
</style>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: var(--active-tab-border) !important; /* Force arrow color change */
}

.swiper-pagination-bullet {
    background-color: var(--active-tab-border) !important; /* Force dot color change */
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: var(--active-tab-border) !important; /* Ensure hover color remains the same */
}

.swiper-pagination-bullet-active {
    background-color: var(--active-tab-border) !important; /* Force active dot color change */
}
</style>
