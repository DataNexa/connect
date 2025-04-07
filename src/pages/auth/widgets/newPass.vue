<template>

    <h4 class="text-center c-text">Nova Senha</h4>
    <p class="text-center c-text">Crie uma nova senha:</p>
    <form class="py-2">
        <div class="col-auto py-1 position-relative" style="padding-right: 40px;">
            <label for="senha1" class="visually-hidden">Senha</label>
            <input
                :type="showPassword1 ? 'text' : 'password'"
                class="form-control"
                id="senha1"
                placeholder="Senha"
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
            <label for="senha2" class="visually-hidden">Confirme a Senha</label>
            <input
                :type="showPassword2 ? 'text' : 'password'"
                class="form-control"
                id="senha2"
                placeholder="Confirme a Senha"
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
        <button class="btn btn-outline-primary my-2 ms-auto d-block" type="button">Salvar Senha</button>
    </form>

</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        data() {
            return {
                showPassword1:false,
                showPassword2:false
            }
        },

    })

</script>