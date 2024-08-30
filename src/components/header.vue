<template>
    <header class="vsc-header">
        <section class="options">
            <div class="icon">
                <i class="bx bxl-visual-studio"></i>
            </div>
            <div class="option">
                <h2>Archivo</h2>
            </div>
            <div class="option">
                <h2>Editar</h2>
            </div>
            <div class="option">
                <h2>Seleccion</h2>
            </div>
            <div class="option">
                <h2>Ver</h2>
            </div>
            <div class="option">
                <h2>Ir</h2>
            </div>
            <div class="option">
                <h2>Ejecutar</h2>
            </div>
            <div class="option">
                <h2>···</h2>
            </div>
        </section>
        <section class="searcher">
            <div class="arrows">
                <i class="bx bx-left-arrow-alt"></i>
                <i class="bx bx-right-arrow-alt"></i>
            </div>
            <div class="search">
                <i class="bx bx-search"></i>
                <h2>portfolio</h2>
            </div>
        </section>
        <section class="options2">
            <i class="bx bx-minus"></i>
            <i class="bx bx-windows"></i>
            <i class="bx bx-x"></i>
        </section>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent', // Name of the component
    data() {

    },
};
</script>

<style scoped>
.vsc-header {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    background-color: #1e1e1e;
    /* VS Code dark header color */
    color: #d4d4d4;
    /* Light gray text color */
    padding: 5px 10px;
    box-sizing: border-box;
    gap: 1%;
    border-bottom: 1px solid #333333;
}

.options,
.searcher,
.options2 {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

.icon {
    margin-right: 15px;
    color: #007acc;
    font-size: 25px;
}

.option h2 {
    margin: 0 10px;
    font-size: 14px;
    cursor: pointer;
}

.option h2:hover {
    color: #ffffff;
    /* White color on hover */
}

.searcher {
    display: flex;
    align-items: center;
    margin: 0 20px;
}

.arrows i {
    color: #d4d4d4;
    font-size: 18px;
    margin-right: 10px;
    cursor: pointer;
}

.search {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    padding: 0 5px;
    border-radius: 3px;
    width: 80%;
}

.search i {
    color: #d4d4d4;
    font-size: 14px;
    margin-right: 5px;
}

.search h2 {
    background-color: #333333;
    border: none;
    color: #d4d4d4;
    outline: none;
    padding: 5px;
    font-size: 12px;
}

.search input::placeholder {
    color: #666666;
}

.options2 {
    display: flex;
    justify-content: end;
}

.options2 i {
    color: #d4d4d4;
    font-size: 20px;
    margin: 0 8px;
    cursor: pointer;
}

.options2 i:hover {
    color: #ffffff;
    /* White color on hover */
}
</style>