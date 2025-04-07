<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <h2 class="text-center">Segurança</h2>
                <p class="c-text text-center">Configurações para ajudar você a manter sua conta segura</p>
            </div>
            <div class="col-12">

                <div class="row justify-content-center">

                    <div class="col-12 col-md-8 border rounded py-2">

                        <h5 class="mt-3">Alteração de Senhas:</h5>
                        <p>Última alteração em 20/07/2025</p>
                        <button class="btn btn-outline-primary">alterar senha</button>
                        <hr>
                        <h5 class="mt-3">Autenticação por 2 fatores:</h5>
                        <p class="text-danger">desabilitado</p>
                        <NotifiConfigItem :keyn="1" :notifytext="''" :options="[
                            {
                                text:'receber um código por e-mail após o login',
                                value:false
                            }
                        ]"/>

                    </div>

                    <div class="col-12 col-md-8 border rounded py-2 mt-3">

                        <h5 class="mt-3">Contas Vinculadas:</h5>

                        <ol class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="h8"><img style="width:40px;" src="/google.png"> google <span class="text-danger"><i>desconectado</i></span></div>
                                </div>
                                <button class="btn btn-sm btn-outline-primary">conectar</button>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="h8"><img style="width:40px;" src="/facebook.png"> meta <span class="text-danger"><i>desconectado</i></span></div>
                                </div>
                                <button class="btn btn-sm btn-outline-primary">conectar</button>
                            </li>
                        </ol>
                    </div>

                    <div class="col-12 col-md-8 border rounded py-2 mt-3">

                        <h5 class="mt-3">Dispositivos Conectados:</h5>

                        <ol class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="h8">Android - Galaxy M5 <i>(Firefox)</i> <b class="text-primary"><small> - Dipostitivo Atual</small></b></div>
                                    <button class="btn btn-sm btn-outline-danger">desconectar</button>
                                </div>
                                <img src="/smartphone.png" style="width:30px;">
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="h8">Windows <i>(Firefox)</i></div>
                                    <button class="btn btn-sm btn-outline-danger">desconectar</button>
                                </div>
                                <img src="/monitor.png" style="width:30px;">
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="h8">Windows <i>(Chrome 14)</i></div>
                                    <button class="btn btn-sm btn-outline-danger">desconectar</button>
                                </div>
                                <img src="/monitor.png" style="width:30px;">
                            </li>
                        </ol>
                    </div>


                </div>

            </div>
        </div>
    </div>

</template>

<script lang='ts'>

    import { defineComponent } from 'vue'
    import NotifiConfigItem from '../privacidade/widgets/NotifiConfigItem.vue';

    export default defineComponent({

        components:{ NotifiConfigItem }

    })

</script>
