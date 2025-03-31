<template>
    <h5 class="text-center c-text">Código enviado</h5>
    <p class="text-center c-text">Digite o código recebido via e-mail:</p>
    <form class="py-2">
        <div class="col-auto py-1">
            <label for="email" class="visually-hidden">Código</label>
            <input type="text" class="form-control" id="email" placeholder="Código">
            <div v-if="enviandoCodigo" class="spinner-border text-primary  my-2 ms-auto d-block" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div v-else class="col-12">
                <div class="row">
                    <div class="col-6">
                        <button class="btn btn-sm btn-outline-primary mt-3" @click="() => $emit('goTo', 'login')" type="button">voltar para login</button>
                    </div>
                    <div class="col-6">
                        <button @click="sendCode" :class="`btn ${btnClass} my-2 ms-auto d-block`" type="button">{{ textButton }}</button>
                    </div>
                </div>
            </div>
            
        </div>
    </form>
</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        data() {
            return {
                enviandoCodigo:true,
                codigoEnviado:false,
                textButton:'reenviar código (30)',
                btnClass:'btn-outline-dark',
                sec:30
            }
        },

        created() {
            this.sendCode()
        },

        methods: {

            async sendCode(){
                if(this.codigoEnviado){
                    return
                }
                this.enviandoCodigo = true
                await new Promise((resolve) => {
                    setTimeout(resolve, 2000)
                })
                this.enviandoCodigo = false
                // todo
                this.codigoEnviado = true
                this.timeout()
            },
            
            timeout(){
                this.btnClass = 'btn-outline-dark'
                this.sec = 30
                const timer = setInterval(() => {
                    if(this.sec < 0){
                        this.codigoEnviado = false
                        this.btnClass = `btn-primary`
                        this.textButton = 'reenviar código'
                        clearInterval(timer)
                        return
                    }
                    this.textButton = `reenviar código (${this.sec})`
                    this.sec--
                }, 1000)
            }

        },

    })

</script>