<template>
    <div class="vsc-footer">
        <section class="part1">
            <div class="logo"><i class='bx bx-collapse-alt' ></i></div>
            <div class="links">
                <a href="https://github.com/camilio77">GITHUB <i class='bx bxl-github' ></i></a>
                <a href="https://www.linkedin.com/in/camilo-andrés-serrano-jimenez-6870b3311">LINKEDIN <i class='bx bxl-linkedin-square' ></i></a>
            </div>
        </section>
        <section class="part2"></section>
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
        background-color: #2d6cca;
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
        background-color: #1e7a17;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo i {
        font-size: 20px;
        font-weight: 300;
        color: #d4d4d4;
    }

    .links {
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: 0.3s ease-in-out;
    }

    .links a {
        color: #d4d4d4;
        text-decoration: none;
    }
</style>