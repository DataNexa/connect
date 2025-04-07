<template>

    <div v-if="!loading" class="container-fluid bg-dark-blue bgx" style="overflow:auto; position: fixed; height:100%; background-image: url('/datanexa_connect_bg_login.png');">

        <div class="row justify-content-center py-4">

            <div class="col-10 col-md-8 col-lg-3 modald" style="display: block;">
                
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

    <LoadingFull v-else :percent="percent"/>

</template>

<style scoped>

.bgx {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 110%;
}

</style>

<script lang="ts">
import login from '@/pages/auth/widgets/login.vue';
import code from '@/pages/auth/widgets/code.vue';
import forgot from '@/pages/auth/widgets/forgot.vue';
import LoadingFull from '@/components/LoadingFull.vue';
import NewPass from '@/pages/auth/widgets/newPass.vue';
import create from './widgets/create.vue';

import { defineComponent } from 'vue'


export default defineComponent({

    components:{ login, code, forgot, LoadingFull, NewPass, create },

    created() {
        this.loadData()
    },

    data() {
        return {
            component:'login',
            loading:false,
            percent:0,
            dataUser:{
                logged:false
            }
        }
    },

    methods: {
        goTo(page:string){
            this.component = page
        },
        async loadData(){
            this.loading = true 
            // todo
            // fake sem uma sessão
            this.component = 'login'

            //this.$emit('logged')
            this.loading = false
            return

            await new Promise<void>(resolve => {
                this.percent = 0
                const interval = setInterval(() => {
                    if(this.percent == 100){
                        resolve()
                        clearInterval(interval)
                        return
                    }
                    this.percent += 10
                }, 500)
            })

            setTimeout(() => {
                
                this.loading = false
                // fake com uma sessão
                this.$emit('logged')
            }, 1000)
        }
    },

})

</script>