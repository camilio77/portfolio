<template>
    <div class="custom-cursor site-wide" ref="cursor">
        <div class="pointer"></div>
    </div>
</template>

<script>
export default {
    name: 'CustomCursor',
    mounted() {
        const cursor = this.$refs.cursor; // Reference to the cursor element

        // Event listeners for cursor interactions
        document.addEventListener('mouseenter', () => (cursor.style.display = 'block'));
        document.addEventListener('mouseleave', () => (cursor.style.display = 'none'));
        document.addEventListener('mousemove', this.trackCursor);
        document.addEventListener('mousedown', () => cursor.classList.add('active'));
        document.addEventListener('mouseup', () => cursor.classList.remove('active'));
    },
    methods: {
        // Method to track cursor movement and update its position
        trackCursor(event) {
            const cursor = this.$refs.cursor;
            const w = cursor.clientWidth;
            const h = cursor.clientHeight;

            // Set cursor position based on mouse event
            cursor.style.transform = `translate(${event.clientX + window.scrollX - w / 2}px, ${event.clientY + window.scrollY - h / 2}px)`;
        }
    }
};
</script>

<style scoped>
.custom-cursor {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: none;
    pointer-events: none;
    /* Ensure the custom cursor does not block interactions */
}

.site-wide {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgb(0, 255, 166);
}

.site-wide .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(0, 255, 166);
    transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}

.site-wide.active .pointer {
    width: 14px;
    height: 14px;
}
</style>