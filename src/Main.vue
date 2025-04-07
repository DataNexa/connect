<template>
    <component @logged="logged" @logout="logout" :is="component"></component>
</template>

<script lang="ts">

import mainpage from '@/pages/Index.vue'
import authvue from '@/pages/auth/Index.vue'

import { defineComponent } from 'vue';

export default defineComponent({

    components: { mainpage, authvue },

    data() {
        return {
            component:'authvue'
        }
    },

    methods: {
        
        logged(){
            this.component = 'mainpage'
        },

        logout(){
            this.component = 'authvue'
        }

    },

})

</script>