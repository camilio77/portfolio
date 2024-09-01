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
        <li class="icon"><i class='bx bx-cog'></i></li>
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
          <li class="skill-item" id="cinecampus" @click="openFile('CineCampus.js', 'Node.js Content')">
            <i class='bx bxl-nodejs'></i> CineCampus.js
          </li>
          <li class="skill-item" id="spotify" @click="openFile('Spotify.js', 'JavaScript Content')">
            <i class='bx bxl-javascript'></i> Spotify.js
          </li>
          <li class="skill-item" id="portfolio" @click="openFile('Portfolio.vue', 'Vue.js Content')">
            <i class='bx bxl-vuejs'></i> Portfolio.vue
          </li>
        </ul>
        <!-- Folder: Skills -->
        <li class="file-item folder" id="skills" @click="expandFolder('skills')">
          <i :class="expandedFolders.skills ? 'bx bx-chevron-down' : 'bx bx-chevron-right'"></i>
          <i class='bx bxs-folder'></i>skills
        </li>
        <ul v-if="expandedFolders.skills" class="skills-list">
          <li class="skill-item" id="frontend" @click="openFile('Frontend.html', frontendCont())">
            <i class='bx bxl-html5'></i>Frontend.html
          </li>
          <li class="skill-item" id="backend" @click="openFile('Backend.js', backendCont())">
            <i class='bx bxl-javascript'></i>Backend.js
          </li>
          <li class="skill-item" id="social" @click="openFile('SocialSkills.txt', socialCont())">
            <i class='bx bxs-file-txt'></i>SocialSkills.txt
          </li>
        </ul>
        <!-- Folder: Documents -->
        <li class="file-item folder" id="documents" @click="expandFolder('documents')">
          <i :class="expandedFolders.documents ? 'bx bx-chevron-down' : 'bx bx-chevron-right'"></i>
          <i class='bx bxs-folder'></i>storage
        </li>
        <ul v-if="expandedFolders.documents" class="storage-list">
          <li class="skill-item" id="cv" @click="openFile(`cv.pdf`, 'PDF Content')">
            <i class='bx bxs-file-pdf'></i>cv.pdf
          </li>
        </ul>
        <!-- Other Files -->
        <li class="file-item md" id="about" @click="openFile('ABOUT.md', 'PDF Content')"><i
            class='bx bxs-file-md'></i>ABOUT.md</li>
        <li class="file-item json" id="languages" @click="openFile('languages.json', 'PDF Content')"><i
            class='bx bxs-file-json'></i>languages.json</li>
      </ul>
    </section>

    <!-- Main Content -->
    <section class="vsc-editor">
      <!-- Tabs -->
      <div class="tab-bar">
        <div v-for="(tab, index) in tabs" :key="index" :class="['tab', { active: tab.active }]"
          @click="activateTab(index)">
          {{ tab.name }}
          <i class="bx bx-x" @click.stop="removeTab(index)"></i>
        </div>
      </div>
      <!-- Editor Content -->
      <div class="editor-content" v-html="activeTabContent"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      tabs: [
        {
          name: 'main.js', active: true, content: `
<h1>Main Component</h1>
<p>This is the main component.</p>
        `}
      ],
      expandedFolders: {
        projects: false,
        skills: false,
        documents: false
      },
    };
  },
  computed: {
    activeTabContent() {
      const activeTab = this.tabs.find(tab => tab.active);
      return activeTab ? activeTab.content : '';
    }
  },
  methods: {
    openFile(fileName, fileContent) {
      const existingTab = this.tabs.find(tab => tab.name === fileName);
      if (existingTab) {
        this.activateTab(this.tabs.indexOf(existingTab));
      } else {
        this.tabs.push({ name: fileName, active: false, content: fileContent });
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
      return `<h2>Frontend Development</h2>
            <p>This section covers HTML, CSS, and JavaScript for building user interfaces.</p>`;
    },
    backendCont() {
      return `<h2>Backend Development</h2>
            <p>This section focuses on server-side programming, APIs, and database management.</p>`;
    },
    socialCont() {
      return `<h2>Social Skills</h2>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem-Solving</li>
            </ul>`;
    }
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

.icon:hover i {
  color: #e2e1e1;
}

#selected {
  border-left: 3px solid #4063e0;
}

#selected i {
  color: #e2e1e1;
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

.skills-list {
  list-style: none;
}

.skills-list i {
  margin-right: 1vh;
}

.skill-item {
  padding-left: 4vh;
  width: 100%;
  cursor: pointer;
}

.skill-item:hover {
  background-color: #373737;
}

#cinecampus i {
  color: #288605;
}

#spotify i,
#backend i {
  color: #f0cc2d;
}

#social i {
  color: #2174c1;
}

#frontend i {
  color: #bc642a;
}

#cv i {
  color: #9d1313;
}

#portfolio i {
  color: #0b906a;
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
  display: flex;
  align-items: center;
}

.tab i {
  opacity: 0;
  margin-left: 1vh;
}

.tab i:hover {
  background: #333333;
  border-radius: 3px;
}

.tab.active {
  background-color: #333333;
  border-top: 2px solid #4063e0;
  /* Active tab background */
}

.tab:hover {
  background-color: #444444;
}

.tab:hover i {
  opacity: 1;
}

.editor-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #333333;
  color: #d4d4d4;
  overflow-y: auto;
  margin: 0;
}
</style>