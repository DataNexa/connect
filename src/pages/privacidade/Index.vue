<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 ">
                <h2 class="text-center">Privacidade</h2>
                <p class="c-text">Sua privacidade é nossa prioridade. Garantimos total sigilo sobre seus dados pessoais e não os compartilhamos com nenhuma outra empresa. Você pode solicitar a <a href="#" target="_blank">remoção permanente dos seus dados</a> a qualquer momento. <br><br>
                Para mais informações, acesse nossa <a href="#" target="_blank">Política de Privacidade</a>.
                </p>
            </div>
            <div class="col-12 mt-5">
                <div class="row justify-content-center pt-2">
                    <h2 class="text-center mb-4">Notificações</h2>
                    <NotifiConfigItem  
                        @switchedOption="switchedOption"
                        v-for="notify, k of notifications"
                        :keyn="k" 
                        :notifytext="notify.text" 
                        :options="notify.options"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>

    import { defineComponent } from 'vue'
    import NotifiConfigItem from './widgets/NotifiConfigItem.vue';

    export default defineComponent({

        components:{ NotifiConfigItem },

        methods: {
            switchedOption(keyNotify:number, keyOption:number){
                this.notifications[keyNotify].options[keyOption].value = !this.notifications[keyNotify].options[keyOption].value
            }
        },

        data() {
            return {
                notifications:[
                    {
                        text:"Receber notificações por e-mail de:",
                        options:[
                            {
                                text:"novas atividades dos serviços",
                                value:true
                            },
                            {
                                text:"novidades da plataforma",
                                value:true
                            },
                            {
                                text:"novos acessos na conta",
                                value:true
                            }
                        ]
                    },
                    {
                        text:"Receber notificações push de:",
                        options:[
                            {
                                text:"novas atividades dos serviços",
                                value:true
                            },
                            {
                                text:"novidades da plataforma",
                                value:true
                            },
                            {
                                text:"novos acessos na conta",
                                value:true
                            }
                        ]
                    }
                ]
            }
        },
    })

</script>