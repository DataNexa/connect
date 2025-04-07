<template>
    <Modal v-if="showAlterarSenha">
        <h4 class="text-center c-text">Alterar Senha</h4>
        <p class="text-center c-text">Após alteração, todos os aparelhos serão desconectados</p>
        <form class="py-2">
            <div class="col-auto py-1 position-relative" style="padding-right: 40px;">
                <label for="senhaAtual" class="visually-hidden">Senha Atual</label>
                <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="senhaAtual"
                    placeholder="Senha Atual"
                    v-model="senhaAtual"
                >
                <button
                    type="button"
                    class="btn btn-sm position-absolute"
                    @click="() => showPassword = !showPassword"
                    style="top: 50%; right: 10px; transform: translateY(-50%); z-index: 2;background-color: transparent; cursor: pointer;"
                >
                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
            </div>
            <div class="col-auto py-1 position-relative" style="padding-right: 40px;">
                <label for="novaSenha" class="visually-hidden">Nova Senha</label>
                <input
                    :type="showPassword1 ? 'text' : 'password'"
                    class="form-control"
                    id="novaSenha"
                    placeholder="Nova Senha"
                    v-model="novaSenha"
                >
                <button
                    type="button"
                    class="btn btn-sm position-absolute"
                    @click="() => showPassword1 = !showPassword1"
                    style="top: 50%; right: 10px; transform: translateY(-50%); z-index: 2;background-color: transparent; cursor: pointer;"
                >
                    <i :class="showPassword1 ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
            </div>
            <div class="col-auto py-1 position-relative" style="padding-right: 40px;">
                <label for="confirmSenha" class="visually-hidden">Confirme Nova Senha</label>
                <input
                    :type="showPassword2 ? 'text' : 'password'"
                    class="form-control"
                    id="confirmSenha"
                    placeholder="Confirme Nova Senha"
                    v-model="confirmNovaSenha"
                >
                <button
                    type="button"
                    class="btn btn-sm position-absolute"
                    @click="() => showPassword2 = !showPassword2"
                    style="top: 50%; right: 10px; transform: translateY(-50%); z-index: 2;background-color: transparent; cursor: pointer;"
                >
                    <i :class="showPassword2 ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
            </div>
            <div class="row px-1">
                <div class="col-6">
                    </div>
                <div class="col-6">
                    <button class="btn btn-outline-primary my-2 ms-auto d-block" type="button">Alterar</button>
                </div>
            </div>
        </form>
    </Modal>
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
                        <button class="btn btn-outline-primary" @click="showAlterarSenha = !showAlterarSenha">alterar senha</button>
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

                        <DevicesAccount :devices="devices"/>
                        
                    </div>


                </div>

            </div>
        </div>
    </div>

</template>

<script lang='ts'>

    import { defineComponent } from 'vue'
    import NotifiConfigItem from '../privacidade/widgets/NotifiConfigItem.vue';
    import DevicesAccount from './widgets/DevicesAccount.vue';
    import Modal from '@/components/Modal.vue';

    export default defineComponent({

        components:{ NotifiConfigItem, DevicesAccount, Modal },

        data() {
            return {
                senhaAtual:'',
                novaSenha:'',
                confirmNovaSenha:'',
                showAlterarSenha:false,
                showPassword:false,
                showPassword1:false,
                showPassword2:false,
                devices:[
                    {
                        name:'Android - Galaxy M5',
                        navigator:'Firefox Light 15',
                        type:'smartphone',
                        isAtual:true
                    },
                    {
                        name:'Windows 11',
                        navigator:'Firefox 16',
                        type:'monitor',
                        isAtual:false
                    },
                    {
                        name:'Windows 10',
                        navigator:'Chrome 14',
                        type:'monitor',
                        isAtual:false
                    }
                ]
            }
        },

    })

</script>
