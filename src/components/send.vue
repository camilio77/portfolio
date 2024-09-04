<template>
    <div class="all">
      <div class="content">
        <h2>Communicate with me</h2>
        <h2>Communicate with me</h2>
        <h1>Communicate with me</h1>
      </div>
  
      <!-- Communication Form -->
      <form @submit.prevent="sendEmail" class="email-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" rows="4" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    name: 'SendContent',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      async sendEmail() {
        try {
          const result = await emailjs.send('service_9r0uw99', 'template_kay8w3a', this.formData, 'idPW14ZondcLBZGQ1');
          alert('Email sent successfully!');
          this.formData = { name: '', email: '', message: '' }; // Clear form fields
          console.log(result); 
        } catch (error) {
          alert('Failed to send email. Please try again later.');
          console.error('Error sending email:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .all {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
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
  
  /* Communication Form Styles */
  .email-form {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 4vh;
    border-top: 3px solid var(--border-color-skills);
  }
  
  .form-group {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  input, textarea {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: var(--border-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: var(--special-background);
  }
  
  /* Rest of the styles... */
  </style>
  