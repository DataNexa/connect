<template>
    <h5 class="text-center c-text">Código enviado</h5>
    <p class="text-center c-text">Digite o código recebido via e-mail:</p>
    <form class="py-2">
        <div class="col-auto py-1">
            <label for="email" class="visually-hidden">Código</label>
            <input type="text" class="form-control" id="email" placeholder="Código">
        </div>
    </form>
</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({})

</script>