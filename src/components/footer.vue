<template>
    <div class="vsc-footer">
        <section class="part1">
            <div class="logo"><i class='bx bx-collapse-alt' ></i></div>
            <div class="links">
                <a href="https://github.com/camilio77">GITHUB <i class='bx bxl-github' ></i></a>
                <a href="https://www.linkedin.com/in/camilo-andrés-serrano-jimenez-6870b3311">LINKEDIN <i class='bx bxl-linkedin-square' ></i></a>
            </div>
        </section>
        <section class="part2">
            <div class="cc">
                <h2><i class='bx bx-copyright'></i> All rights reserved. 2024</h2>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
    .vsc-footer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--footer-background); /* Replaced with variable */
}

.part1, .part2 {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}

.logo {
    width: 6%;
    height: 100%;
    background-color: var(--logo-background); /* Replaced with variable */
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo i {
    font-size: 20px;
    font-weight: 300;
    color: var(--font-color); /* Replaced with variable */
}

.links {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s ease-in-out;
}

.links a {
    color: var(--font-color); /* Replaced with variable */
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
    background: none;
    padding: 0 3vh;
}

.links a:hover {
    color: #fff; /* White color on hover (No change needed) */
    background: var(--link-hover-background); /* Replaced with variable */
}

.cc {
    width: 100%;
    display: flex;
    justify-content: end;
}

.cc h2 {
    font-size: 12px;
    font-weight: 300;
    color: var(--font-color); /* Replaced with variable */
    margin-right: 10px;
    transition: 0.3s ease-in-out;
}

</style>