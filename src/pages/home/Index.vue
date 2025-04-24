<template>

    <Toast :type-toast="'error'" :message="'Este serviço só pode ser acessado pelo plano pago'" :show="showToast" @hiddenToast="hiddenToast"/>
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-12">
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <div class="profile-container">
                            <div class="profile-image">
                                <svg class="d-block mx-auto mt-2" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                            </div>
                            <button class="edit-button">✎</button>
                        </div>
                    </div>
                    <div class="col-4 pt-3 d-none d-md-block">
                        <h3 class="c-text">Bem vindo, Andrei Feitosa Coelho!</h3>
                        <p><small>Gerencie suas contas, privacidade, pagamentos e os demais serviços</small></p>
                    </div>
                </div>
            </div>
            <div class="col-6 d-md-none">
                <h3 class="c-text">Bem vindo, Andrei Feitosa Coelho!</h3>
                <p><small>Gerencie suas contas, privacidade, pagamentos e os demais serviços</small></p>
            </div>
        </div>
        <div class="row pt-5">
            <Loading v-if="services.length == 0" />
            <BtnService @toasted="toasted" v-for="service,key of services" 
                :key="key" 
                :serviceName="service.name" 
                :serviceDescription="service.description"
                :serviceLink="service.link"
                :blocked="service.blocked"
                >
            </BtnService>
        </div>

    </div>
    
</template>

<script lang="ts">

    import Toast from '@/components/Toast.vue';
    import Loading from '@/components/Loading.vue';
    import BtnService from '@/pages/home/widgets/BtnService.vue';
    import Modal from '@/components/Modal.vue';

    import { defineComponent } from 'vue';
import { SessionManager } from '@/model/libs/SessionManager';

    interface data {
        showToast:boolean,
        services:{name:string, description:string, link:string, blocked:boolean}[]
    }

    export default defineComponent({

        components:{ BtnService, Toast, Loading, Modal },

        data():data {
            return {
                showToast:false,
                services:[
                    {
                        name:"Monitoramento",
                        description:"Gerencie noticias e publicações de redes sociais",
                        link:"https://monitoramento.datanexa.com.br",
                        blocked:true
                    },
                    {
                        name:"Admin",
                        description:"Gerenciamento de clientes",
                        link:"https://admin.datanexa.com.br",
                        blocked:true
                    }
                ]
            }
        },

        methods: {
            toasted(){
                console.log(SessionManager.getSessionToken());
                
                this.showToast = true
            },
            hiddenToast(){
                this.showToast = false
            },
        },

    })

</script>

<style scoped>


.profile-container {
    position: relative;
    width: 150px;
    height: 150px;
}
.profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ccc;
}
.edit-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.edit-button:hover {
    background-color: white;
    color:black;    
}

.profile-image svg {
    fill: #777;
    width: 80%;
}
</style>