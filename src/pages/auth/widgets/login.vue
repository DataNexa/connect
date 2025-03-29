<template>

    <h4 class="text-center c-text">Login</h4>
    <p class="text-center c-text">Entre com e-mail e senha</p>
    <form class="py-2">
        <div class="col-auto py-1">
            <label for="email" class="visually-hidden">Email</label>
            <input type="text" class="form-control" id="email" placeholder="E-mail">
        </div>
        <div class="col-auto py-1">
            <label for="senha" class="visually-hidden">Senha</label>
            <input type="Senha" class="form-control" id="senha" placeholder="Senha">
        </div>
        <div class="row px-1">
            <div class="col-6">
                <button class="btn btn-sm btn-link mt-3" @click="() => $emit('goTo', 'forgot')" type="button">esqueci minha senha</button>
            </div>
            <div class="col-6">
                <button class="btn btn-outline-primary my-2 ms-auto d-block" type="button">Entrar</button>
            </div>
        </div>
    </form>


</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({})

</script>