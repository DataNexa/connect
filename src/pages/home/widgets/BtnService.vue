<template>

    <div @click="irParaServico" class="col-12 col-md-6 col-lg-4 position-relative">
        <div class="service m-2 border rounded ">
            <div class="icon-service d-block mx-auto my-3 pt-4">
                <img :src="`/${serviceName.toLowerCase()}.svg`" class="d-block mx-auto" alt="" style="width:60%;">
            </div>
            <h3 class="text-center">{{ serviceName }}</h3>
            <p class="text-center c-text">{{ serviceDescription }}</p>
            <!-- Ícone de cadeado  -->
            <div v-if="blocked" class="locked-icon position-absolute top-0 end-0 m-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10M8 10V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V10M4 10H20C21.1046 10 22 10.8954 22 12V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V12C2 10.8954 2.89543 10 4 10Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="16" r="2" stroke="#000" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </div>

</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        props:{
            "serviceName":{
                type:String,
                required:true
            },
            "serviceDescription":{
                type:String,
                required:true
            },
            "serviceLink":{
                type:String,
                required:true
            },
            "blocked":{
                type:Boolean,
                required:true
            }
        },

        methods: {
          
            irParaServico(){
                if(this.blocked){
                    this.$emit('toasted')
                    return 
                }

                window.open(this.serviceLink, '_blank');
            }

        },

    })

</script>

<style scoped>

.service {
    cursor: pointer;
}

.service:hover {
    background-color: #F9F9F9;
}

.icon-service {
    background-color: #007bff;
    border-radius: 100px;
    width: 150px;
    height: 150px;
}

</style>