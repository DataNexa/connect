<template>
    <h4 class="text-center c-text">Criação de Conta</h4>
    <p class="text-center c-text">Preencha todos os campos abaixo:</p>

    <form class="py-2">
        <div class="col-auto py-1">
            <label for="nome" class="visually-hidden">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Nome">
            <label for="email" class="visually-hidden">Email</label>
            <input type="text" class="form-control mt-2" id="email" placeholder="E-mail">
            <div class="col-auto py-1 position-relative" style="padding-right: 40px;">
                <label for="senha" class="visually-hidden">Senha</label>
                <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="senha"
                    placeholder="Senha"
                    v-model="senha"
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
                <label for="confirm" class="visually-hidden">Confirme a Senha</label>
                <input
                    :type="showConfirm ? 'text' : 'password'"
                    class="form-control"
                    id="confirm"
                    placeholder="Confirme a Senha"
                    v-model="confirm"
                >
                <button
                    type="button"
                    class="btn btn-sm position-absolute"
                    @click="() => showConfirm = !showConfirm"
                    style="top: 50%; right: 10px; transform: translateY(-50%); z-index: 2;background-color: transparent; cursor: pointer;"
                >
                    <i :class="showConfirm ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                </button>
            </div>
            <div class="row px-1">
                <div class="col-6">
                    <button class="btn btn-sm btn-outline-primary mt-3" @click="() => $emit('goTo', 'login')" type="button">voltar para login</button>
                </div>
                <div class="col-6">
                    <button class="btn btn-primary my-2 ms-auto d-block" type="button">Criar</button>
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
                showPassword:false,
                showConfirm:false,
                senha:'',
                confirm:''
            }
        },

    })

</script>