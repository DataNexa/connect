<template>
    <authvue></authvue>
</template>

<script lang="ts">

import mainpage from '@/pages/Index.vue'
import authvue from '@/pages/auth/Index.vue'

import { defineComponent } from 'vue';

export default defineComponent({

    components: { mainpage, authvue }

})

</script>