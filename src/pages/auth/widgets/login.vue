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
    <hr>
    <p class="text-center c-text">Entre usando:</p>

    <div class="btn-group w-100 mb-2" role="group">
        <span class="border border-primary bg-white px-2" style="height:50px;"><img class="" src="/facebook.png" style="height:40px; margin-top:5px;" alt=""></span>
        <button class="btn btn-primary w-100" style="height:50px">Login com Facebook</button>
    </div>
    
    <div class="btn-group w-100 mb-4" role="group">
        <span class="border border-danger bg-white px-2" style="height:50px;"><img class="" src="/google.png" style="height:40px; margin-top:5px;" alt=""></span>
        <button class="btn btn-danger w-100" style="height:50px">Login com Google</button>
    </div>

    <hr>

    <p class="text-center c-text">Ou Crie uma Conta:</p>

    <button class="btn btn-primary my-2 ms-auto d-block w-100 mb-4" type="button">CRIAR CONTA</button>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({})

</script>