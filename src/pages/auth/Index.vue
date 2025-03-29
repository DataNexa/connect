<template>

    <div class="container-fluid bg-dark-blue bgx" style="position: fixed; height:100%; background-image: url('/datanexa_connect_bg_login.png');">

        <div class="row justify-content-center py-4">

            <div class="col-10 col-md-6 col-lg-3 modald" style="display: block;">
                
                <div class="row py-2">
                    <div class="col-12">
                        <img class="d-block mx-auto" src="/datanexa_connect_logo_login.png" alt="DataNexa logo Login">
                    </div>
                </div>

                <hr>    
                
                <component @reload="loadData" @goTo="goTo" :is="component"></component>

            </div>

        </div>

    </div>

</template>

<style scoped>

.bgx {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 110%;
}

</style>

<script lang="ts">
import login from './widgets/login.vue';
import code from './widgets/code.vue';
import forgot from './widgets/forgot.vue';
import { defineComponent } from 'vue'

export default defineComponent({

    components:{login,code,forgot},

    data() {
        return {
            component:'code'
        }
    },

    methods: {
        goTo(page:string){
            this.component = page
        },
        loadData(){

        }
    },

})

</script>