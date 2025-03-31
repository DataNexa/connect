<template>

    <h4 class="text-center c-text">Nova Senha</h4>
    <p class="text-center c-text">Crie uma nova senha:</p>
    <form class="py-2">
        <div class="col-auto py-1">
            <label for="senha1" class="visually-hidden">Senha</label>
            <input type="password" class="form-control" id="senha1" placeholder="Senha">
        </div>
        <div class="col-auto py-1">
            <label for="senha2" class="visually-hidden">Confirme sua Senha</label>
            <input type="password" class="form-control" id="senha2" placeholder="Confirme sua Senha">
        </div>
        <button class="btn btn-outline-primary my-2 ms-auto d-block" type="button">Salvar Senha</button>
    </form>

</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({})

</script>