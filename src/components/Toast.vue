<template>
    <div id="toast" :class="`toast-container ${typeToast} ${internalShow ? '' : 'hidden'}`" style="z-index: 9999999999999;">
        <div class="toast-message">{{ message }}</div>
    </div>
</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({
        created() {
            if(this.internalShow){
                this.showToast()
            }
        },

        props:{
            message:{
                type:String, // error | message
                required:true
            },
            typeToast:{
                type:String,
                required:true 
            },
            show:{
                type:Boolean,
                required:true
            }
        },

        data() {
            return {
                internalShow: this.show
            };
        },

        methods: {
            showToast() {
                setTimeout(() => {
                    this.hideToast()
                }, 3000); // Esconde o toast após 3 segundos
            },

            hideToast() {
                this.internalShow = false
                this.$emit('hiddenToast')
            }
        },  

        watch: {
            show(newValue) {
                this.internalShow = newValue;
                if (newValue) {
                    this.showToast();
                }
            }
        },
    })

</script>

<style scoped>
.toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 1;
    transition: opacity 0.5s ease;
}

.error {
    background-color: #dc3545;
    color: white;
}

.message {
    background-color: #383bff;
    color: white;
}

.toast-container.hidden {
    opacity: 0;
    pointer-events: none;
}

.toast-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
}
</style>