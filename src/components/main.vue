<template>
  <div class="vsc-main">
    <aside class="icons-apps">
      <ul class="up">
        <li id="selected" class="icon"><i class='bx bx-file-blank'></i></li>
        <li class="icon"><i class='bx bx-search'></i></li>
        <li class="icon"><i class='bx bx-git-branch'></i></li>
        <li class="icon"><i class='bx bxs-right-arrow'></i></li>
        <li class="icon"><i class='bx bx-customize'></i></li>
      </ul>
      <ul class="down">
        <li class="icon"><i class='bx bx-user-circle'></i></li>
        <li class="icon" id="theme">
          <i class='bx bx-cog' @click="openChangeTheme()"></i>
          <div class="themes" v-if="showThemeMenu">
            <h1><i class='bx bx-brush'></i> themes</h1>
            <ul>
              <li @click="changeTheme('light')"><i class='bx bx-chevron-right' style='color:#ffffff'></i> Light</li>
              <li @click="changeTheme('default')"><i class='bx bx-chevron-right' style='color:#ffffff'></i> Default</li>
              <li @click="changeTheme('blue')"><i class='bx bx-chevron-right' style='color:#ffffff'></i> Blue</li>
              <li @click="changeTheme('red')"><i class='bx bx-chevron-right' style='color:#ffffff'></i> Red</li>
              <li @click="changeTheme('purple')"><i class='bx bx-chevron-right' style='color:#ffffff'></i> Purple</li>
              <li @click="changeTheme('other')"><i class='bx bx-chevron-right' style='color:#ffffff'></i> other</li>
            </ul>
          </div>
        </li>
      </ul>
    </aside>
    <!-- Sidebar -->
    <section class="vsc-sidebar">
      <div class="sidebar-header">
        <h3>EXPLORER</h3>
      </div>
      <div class="sidebar-name">
        <h3><i class='bx bx-chevron-down'></i>CAMILO-SERRANO</h3>
      </div>
      <ul class="file-list">
        <!-- Folder: Projects -->
        <li class="file-item folder" id="projects" @click="expandFolder('projects')">
          <i :class="expandedFolders.projects ? 'bx bx-chevron-down' : 'bx bx-chevron-right'"></i>
          <i class='bx bxs-folder'></i>projects
        </li>
        <!-- Example UL for Projects -->
        <ul v-if="expandedFolders.projects" class="projects-list">
          <li class="skill-item" id="cinecampus" @click="openFile('CineCampus.js', cineCampusCont(), 'bx bxl-nodejs')">
            <i class='bx bxl-nodejs'></i> CineCampus.js
          </li>
          <li class="skill-item" id="spotify" @click="openFile('Spotify.js', spotifyCont(), 'bx bxl-javascript')">
            <i class='bx bxl-javascript'></i> Spotify.js
          </li>
          <li class="skill-item" id="portfolio" @click="openFile('Portfolio.vue', portfolioCont(), 'bx bxl-vuejs')">
            <i class='bx bxl-vuejs'></i> Portfolio.vue
          </li>
          <li class="skill-item" id="e-commerce" @click="openFile('e-commerce.html', eCommerceCont(), 'bx bxl-html5')">
            <i class='bx bxl-html5'></i> e-commerce.html
          </li>
        </ul>
        <!-- Folder: Skills -->
        <li class="file-item folder" id="skills" @click="expandFolder('skills')">
          <i :class="expandedFolders.skills ? 'bx bx-chevron-down' : 'bx bx-chevron-right'"></i>
          <i class='bx bxs-folder'></i>skills
        </li>
        <ul v-if="expandedFolders.skills" class="skills-list">
          <li class="skill-item" id="frontend" @click="openFile('Frontend.html', frontendCont(), 'bx bxl-html5')">
            <i class='bx bxl-html5'></i>Frontend.html
          </li>
          <li class="skill-item" id="backend" @click="openFile('Backend.js', backendCont(), 'bx bxl-javascript')">
            <i class='bx bxl-javascript'></i>Backend.js
          </li>
          <li class="skill-item" id="devtools" @click="openFile('.DevTools', devToolsCont(), 'bx bxl-git')">
            <i class='bx bxl-git'></i>.DevTools
          </li>
          <li class="skill-item" id="social" @click="openFile('SocialSkills.txt', socialCont(), 'bx bxs-file-txt')">
            <i class='bx bxs-file-txt'></i>SocialSkills.txt
          </li>
        </ul>
        <!-- Folder: Documents -->
        <li class="file-item folder" id="documents" @click="expandFolder('documents')">
          <i :class="expandedFolders.documents ? 'bx bx-chevron-down' : 'bx bx-chevron-right'"></i>
          <i class='bx bxs-folder'></i>storage
        </li>
        <ul v-if="expandedFolders.documents" class="storage-list">
          <li class="skill-item" id="cv" @click="openFile(`cv.pdf`, cvCont(), 'bx bxs-file-pdf')">
            <i class='bx bxs-file-pdf'></i>cv.pdf
          </li>
        </ul>
        <!-- Other Files -->
        <li class="file-item md" id="about" @click="openFile('ABOUT.md', aboutCont(), 'bx bxs-file-md')"><i
            class='bx bxs-file-md'></i>ABOUT.md</li>
        <li class="file-item json" id="languages"
          @click="openFile('languages.json', languajesCont(), 'bx bxs-file-json')"><i
            class='bx bxs-file-json'></i>languages.json</li>
        <li class="file-item json" id="certifications"
          @click="openFile('certifications-lock.json', certificationCont(), 'bx bxs-file-json')"><i
            class='bx bxs-file-json'></i>certifications-lock.json</li>
            <li class="file-item json" id="communication"
          @click="openFile('communicate.js', communicateCont(), 'bx bxl-nodejs')"><i
            class='bx bxl-nodejs'></i>communicate.js</li>
      </ul>
    </section>

    <!-- Main Content -->
    <section class="vsc-editor">
      <!-- Tabs -->
      <div class="tab-bar">
        <div v-for="(tab, index) in tabs" :key="index" :class="['tab', { active: tab.active }]"
          @click="activateTab(index)">
          <i :class="tab.icon" class="tab-icon"></i> <!-- Add this line for the icon -->
          {{ tab.name }}
          <i class="bx bx-x" @click.stop="removeTab(index)"></i>
        </div>
      </div>
      <!-- Editor Content -->
      <div class="editor-content">
        <component :is="activeTabComponent" />
      </div>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line vue/no-unused-components
import MainContent from "./mainCont.vue";
import FrontendContent from "./frontCont.vue";
import BackendContent from "./backCont.vue";
import SocialContent from "./socialCont.vue";
import CineCampusContent from "./cineCampus.vue";
import SpotifyContent from "./spotify.vue";
import PortfolioContent from "./portfolio.vue";
import CvContent from "./cv.vue";
import AboutContent from "./about.vue";
import LanguajesContent from "./languajes.vue";
import DevToolsContent from "./devTools.vue";
import CertificationContent from "./certificationCont.vue";
import ECommerceContent from "./e-commerce.vue";
import SendContent from "./send.vue";

export default {
  name: 'MainComponent',
  components: {
    MainContent,
    FrontendContent,
    BackendContent,
    SocialContent,
    CineCampusContent,
    SpotifyContent,
    PortfolioContent,
    CvContent,
    AboutContent,
    LanguajesContent,
    DevToolsContent,
    CertificationContent,
    ECommerceContent,
    SendContent,
  },
  data() {
    return {
      tabs: [
        {
          name: 'main.js', active: true, content: MainContent, icon: 'bx bx-star'
        }
      ],
      expandedFolders: {
        projects: false,
        skills: false,
        documents: false
      },
      showThemeMenu: false,
    };
  },
  computed: {
    activeTabComponent() {
      const activeTab = this.tabs.find(tab => tab.active);
      return activeTab ? activeTab.content : null; // Use the actual component reference
    }
  },
  methods: {
    openChangeTheme() {
      this.showThemeMenu = !this.showThemeMenu;
    },
    changeTheme(theme) {
      const themeLink = document.getElementById('theme-style');
      if (themeLink) {
        themeLink.href = `./css/variables-${theme}.css`;
      }
      this.showThemeMenu = false;
    },
    openFile(fileName, fileContent, iconClass) {
      const existingTab = this.tabs.find(tab => tab.name === fileName);
      if (existingTab) {
        this.activateTab(this.tabs.indexOf(existingTab));
      } else {
        this.tabs.push({ name: fileName, active: false, content: fileContent, icon: iconClass });
        this.activateTab(this.tabs.length - 1);
      }
    },
    removeTab(index) {
      if (this.tabs.length > 1) {
        this.tabs.splice(index, 1);
        if (this.tabs[index] && this.tabs[index].active) {
          this.activateTab(index);
        } else if (index > 0) {
          this.activateTab(index - 1);
        } else {
          this.activateTab(0);
        }
      }
    },
    activateTab(index) {
      this.tabs.forEach((tab, i) => {
        tab.active = i === index;
      });
    },
    expandFolder(folderName) {
      this.expandedFolders[folderName] = !this.expandedFolders[folderName];
    },
    frontendCont() {
      return `FrontendContent`;
    },
    backendCont() {
      return `BackendContent`;
    },
    socialCont() {
      return `SocialContent`;
    },
    cineCampusCont() {
      return `CineCampusContent`;
    },
    spotifyCont() {
      return `SpotifyContent`;
    },
    portfolioCont() {
      return `PortfolioContent`;
    },
    cvCont() {
      return `CvContent`;
    },
    aboutCont() {
      return `AboutContent`;
    },
    languajesCont() {
      return `LanguajesContent`;
    },
    devToolsCont() {
      return `DevToolsContent`; // Make sure this matches your component or content reference
    },
    certificationCont() {
      return `CertificationContent`; // Make sure this matches your component or content reference
    },
    eCommerceCont() {
      return `ECommerceContent`; // Make sure this matches your component or content reference
    },
    communicateCont() {
      return `SendContent`; // Make sure this matches your component or content reference
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: CascadiaMono;
  src: url(../../public/storage/font/CascadiaMonoPL-Regular.otf);
}

.vsc-main {
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--editor-background);
  color: var(--font-color);
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
  color: var(--icon-color);
}

.icon:hover i {
  color: var(--icon-hover-color);
}

#selected {
  border-left: 3px solid var(--border-color);
}

#selected i {
  color: var(--icon-hover-color);
  font-weight: 500;
}

.themes {
  width: 25vh;
  height: 30vh;
  position: absolute;
  background: var(--theme-background);
  box-shadow: -1px 1px 9px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  left: 8vh;
  bottom: 5vh;
  padding: 1%;
  box-sizing: border-box;
}

.themes h1 {
  width: 100%;
  border-bottom: 2px solid var(--theme-header-border);
  margin-bottom: 1vh;
}

.themes ul {
  list-style-type: none;
}

.themes li:hover {
  background-color: var(--theme-hover);
  color: #ffffff;
}

.themes li {
  color: var(--font-color);
  height: 3vh;
  display: flex;
  align-items: center;
  padding-left: 2vh;
  cursor: pointer;
}

.vsc-sidebar {
  width: 15%;
  background-color: var(--sidebar-color);
  border-left: 1px solid var(--sidebar-border);
  border-right: 1px solid var(--sidebar-border);
}

.sidebar-header {
  color: var(--font-color);
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
  color: var(--font-color);
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

.skills-list {
  list-style: none;
}

.skills-list i {
  margin-right: 1vh;
}

ul {
  list-style: none;
}

.skill-item {
  padding-left: 4vh;
  width: 100%;
  cursor: pointer;
}

.skill-item:hover {
  background-color: var(--file-item-hover);
}

#cinecampus i {
  color: var(--cinecampus-color);
}

#spotify i,
#backend i,
#communication i {
  color: var(--spotify-color);
}

#social i {
  color: var(--social-color);
}

#frontend i {
  color: var(--frontend-color);
}

#cv i {
  color: var(--cv-color);
}

#e-commerce i {
  color: var(--frontend-color);
}

#devtools i {
  color: var(--devtools-color);
}

#portfolio i {
  color: var(--portfolio-color);
}

.file-item.md i {
  color: var(--md-color);
  margin-right: 1vh;
}

.file-item.json i {
  color: var(--json-color);
  margin-right: 1vh;
}

.file-item:hover {
  background-color: var(--file-item-hover);
}

.vsc-editor {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 82%;
  box-sizing: border-box;
  overflow-y: hidden;
}

.tab-bar {
  display: flex;
  background-color: var(--editor-background);
  height: 6%;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
.tab-bar {
    scrollbar-width: thin;
    scrollbar-color: var(--file-item-hover) var(--scrollbar-track-color); /* Replaced with variables */
}

/* Chrome, Edge, and Safari */
.tab-bar::-webkit-scrollbar {
    width: 5px;
}

.tab-bar::-webkit-scrollbar-track {
    background: var(--scrollbar-track-color); /* Replaced with variable */
}

.tab-bar::-webkit-scrollbar-thumb {
    background-color: var(--file-item-hover); /* Replaced with variable */
    border-radius: 10px;
    border: 3px none var(--scrollbar-track-color); /* Replaced with variable */
}

.tab {
  padding: 8px 12px;
  cursor: pointer;
  color: var(--font-color);
  display: flex;
  align-items: center;
}

.tab i:first-child {
  margin-right: 1vh;
}

.tab i:last-child {
  opacity: 0;
  margin-left: 1vh;
}

.tab i:last-child:hover {
  background: var(--sidebar-border);
  border-radius: 3px;
}

.tab.active {
  border-bottom: 2px solid var(--active-tab-border);
}

.tab:hover {
  background-color: var(--tab-hover);
}

.tab:hover i {
  opacity: 1;
}

.editor-content {
  flex-grow: 1;
  padding: 20px;
  background-color: var(--editor-content-background);
  color: var(--font-color);
  overflow-y: auto;
  height: 94%;
  box-sizing: border-box;
}

.editor-content {
  background: linear-gradient(45deg, var(--gradient-color-start) 0%, var(--gradient-color-start) 29%, var(--gradient-color-end) 66%, var(--gradient-color-end) 100%);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  overflow: hidden;
  position: relative;
}

.editor-content::before,
.editor-content::after {
  content: "";
  width: 70vmax;
  height: 70vmax;
  position: absolute;
  background: var(--gradient-light-overlay);
  left: -20vmin;
  top: -20vmin;
  animation: morph 15s linear infinite alternate, spin 20s linear infinite;
  z-index: 1;
  will-change: border-radius, transform;
  transform-origin: 55% 55%;
  pointer-events: none;
}

.editor-content::after {
  width: 70vmin;
  height: 70vmin;
  left: auto;
  right: -10vmin;
  top: auto;
  bottom: 0;
  animation: morph 10s linear infinite alternate, spin 26s linear infinite reverse;
  transform-origin: 20% 20%;
}

/* Animation definitions */
@-webkit-keyframes Gradient {
  0% {
    background-position: 0 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0 50%
  }
}

@keyframes morph {
  0% {
    border-radius: 40% 60% 30% 70% / 30% 40% 60% 70%
  }

  100% {
    border-radius: 70% 40% 60% 30% / 60% 50% 70% 30%
  }
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.st0 {
  display: none;
}

.st1 {
  display: inline;
}

.st2 {
  opacity: 0.29;
}

.st3 {
  fill: #FFFFFF;
}

.st4 {
  clip-path: url(#SVGID_2_);
  fill: #FFFFFF;
}

.st5 {
  clip-path: url(#SVGID_4_);
}

.st6 {
  clip-path: url(#SVGID_6_);
}

.st7 {
  clip-path: url(#SVGID_8_);
}

.st8 {
  clip-path: url(#SVGID_10_);
}

.st9 {
  fill: none;
}

.st10 {
  clip-path: url(#SVGID_12_);
}

.st11 {
  opacity: 0.7;
}

.st12 {
  clip-path: url(#SVGID_14_);
}

.st13 {
  opacity: 0.2;
}

.st14 {
  clip-path: url(#SVGID_16_);
}

.st15 {
  opacity: 0.3;
  fill: #FFFFFF;
  enable-background: new;
}

#theme {
  user-select: none;
}
</style>