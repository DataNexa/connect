<template>
    <div class="col-12 col-md-6 col-lg-4">
        <h4><b>{{ notifytext }}</b></h4>
        <div class="form-check form-switch" v-for="option,k of options">
            <input @change="changeInput(k)" class="form-check-input" type="checkbox" :id="`swich${k}`" :checked="option.value">
            <label class="form-check-label" :for="`swich${k}`">{{ option.text }}</label>
        </div>
    </div>
</template>

<script lang='ts'>

    import { defineComponent } from 'vue'

    export default defineComponent({

        props:{
            keyn:{
                type:Number,
                required:true
            },
            notifytext:{
                type:String,
                required:true 
            },
            options:{
                type:Array<{value:boolean, text:string}>,
                required:true
            }
        },

        methods: {
            changeInput(keyOption:number){
                this.$emit('switchedOption', this.keyn, keyOption)
            }
        },

    })

</script>