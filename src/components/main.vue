<template>
    <div class="vsc-main">
        <aside class="icons-apps">
            <ul class="up">
                <li id="selected" class="icon"><i class='bx bx-file-blank'></i></li>
                <li class="icon"><i class='bx bx-search'></i></li>
                <li class="icon"><i class='bx bx-git-branch' ></i></li>
                <li class="icon"><i class='bx bxs-right-arrow'></i></li>
                <li class="icon"><i class='bx bx-customize'></i></li>
            </ul>
            <ul class="down">
                <li class="icon"><i class='bx bx-user-circle'></i></li>
                <li class="icon"><i class='bx bx-cog'></i></li>
            </ul>
        </aside>
        <!-- Sidebar -->
        <section class="vsc-sidebar">
            <div class="sidebar-header">
                <h3>EXPLORER</h3>
            </div>
            <div class="sidebar-name">
                <h3><i class='bx bx-chevron-down' ></i>CAMILO-SERRANO</h3>
            </div>
            <ul class="file-list">
                <li class="file-item folder" id="projects"><i class='bx bx-chevron-right' ></i><i class='bx bxs-folder' ></i>projects</li>
                <li class="file-item folder" id="skills"><i class='bx bx-chevron-right' ></i><i class='bx bxs-folder' ></i>skills</li>
                <li class="file-item folder" id="documents"><i class='bx bx-chevron-right' ></i><i class='bx bxs-folder' ></i>storage</li>
                <li class="file-item md" id="about"><i class='bx bxs-file-md' ></i>ABOUT.md</li>
                <li class="file-item json" id="languajes"><i class='bx bxs-file-json' ></i>languages.json</li>
            </ul>
        </section>

        <!-- Main Content -->
        <section class="vsc-editor">
            <!-- Tabs -->
            <div class="tab-bar">
                <div class="tab">main.js</div>
                <div class="tab active">Header.vue</div>
                <div class="tab">App.vue</div>
                <div class="tab">style.css</div>
            </div>
            <!-- Editor Content -->
            <div class="editor-content">
                <pre>
            <code>
  import { createApp } from 'vue'
  import App from './App.vue'
  import HeaderComponent from './components/header.vue'
  import CustomCursor from './components/mouse.vue'
  
  createApp(App).mount('#app')
  createApp(CustomCursor).mount('#cursor')
  createApp(HeaderComponent).mount('#header')
            </code>
          </pre>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'MainComponent',

  }
</script>

<style scoped>
@font-face {
    font-family: CascadiaMono;
    src: url(../../public/storage/font/CascadiaMonoPL-Regular.otf);
}

.vsc-main {
    display: flex;
    height: 100%;
    background-color: #1e1e1e;
    /* Dark background like VS Code */
    color: #d4d4d4;
    /* Light text */
}

.icons-apps {
    width: 3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.icon {
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon i {
    font-size: 24px;
    color: #aaaaaa;
}

#selected {
    border-left: 3px solid #4063e0;
}

#selected i {
    color: #d4d4d4;
    font-weight: 500;
}

.vsc-sidebar {
    width: 15%;
    background-color: #252526;
    /* Sidebar color */
    border-left: 1px solid #333333;
    border-right: 1px solid #333333;
}

.sidebar-header {
    color: #d4d4d4;
    height: 5vh;
    display: flex;
    align-items: center;
    padding-left: 2vh;
}

.sidebar-header h3 {
    font-size: 15px;
    font-weight: 500;
}

.sidebar-name { 
    color: #d4d4d4;
    width: 100%;
    height: 4vh;
    display: flex;
    align-items: center;
}

.sidebar-name h3 {
    font-size: 15px;
    font-weight: 500;
}

.file-list {
    list-style: none;
    padding: 0 1vh;
}

.file-item {
    width: 100%;
    padding-left: 2vh;
    cursor: pointer;
}

.file-item.folder {
    padding-left: 0 !important;
}

.file-item.folder i:last-child {
    margin-right: 1vh;
}

.file-item.md i {
    color: #3a90b5;
    margin-right: 1vh;
}

.file-item.json i {
    color: #b62a2a;
    margin-right: 1vh;
}

.file-item:hover {
    background-color: #373737;
}

.vsc-editor {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.tab-bar {
    display: flex;
    background-color: #1e1e1e;
}

.tab {
    padding: 8px 12px;
    cursor: pointer;
    color: #d4d4d4;
}

.tab.active {
    background-color: #333333;
    border-top: 2px solid #4063e0;
    /* Active tab background */
}

.tab:hover {
    background-color: #444444;
}

.editor-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #333333;
    color: #d4d4d4;
    overflow-y: auto;
}

pre {
    margin: 0;
}

pre code {
    font-family: 'CascadiaMono';
    font-size: 14px;
    font-weight: 200;
}
</style>