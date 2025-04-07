<template>
<ol class="list-group">
    <li v-for="device of devices" class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="h8">{{ device.name }} <i>({{ device.navigator }})</i> <b class="text-primary"><small> {{ device.isAtual ? '- Dipostitivo Atual' : '' }}</small></b></div>
            <button class="btn btn-sm btn-outline-danger">desconectar</button>
        </div>
        <img :src="`/${device.type}.png`" style="width:30px;">
    </li>
</ol>
</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        props:{
            devices:Array<{name:string, navigator:string, type:string, isAtual:boolean}>
        }

    })

</script>
