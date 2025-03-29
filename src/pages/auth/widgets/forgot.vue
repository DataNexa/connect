<template>

    <h4 class="text-center c-text">Recuperação de Conta</h4>
    <p class="text-center c-text">Digite seu e-mail abaixo:</p>

    <form class="py-2">
        <div class="col-auto py-1">
            <label for="email" class="visually-hidden">Email</label>
            <input type="text" class="form-control" id="email" placeholder="E-mail">
            <div class="row px-1">
                <div class="col-6">
                    <button class="btn btn-sm btn-outline-primary mt-3" @click="() => $emit('goTo', 'login')" type="button">voltar para login</button>
                </div>
                <div class="col-6">
                    <button class="btn btn-primary my-2 ms-auto d-block" type="button">Enviar</button>
                </div>
            </div>
        </div>
    </form>

</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({})

</script>