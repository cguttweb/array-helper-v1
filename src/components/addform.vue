<template>
    <div>
        <b-form inline>
            <b-form-input placeholder="Method Name" type="text"></b-form-input>
            <b-form-input placeholder="Method" type="text"></b-form-input>
            <b-button type="submit" class="example" @click="addMethod">Add Method</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    methods: {
    addMethod: function(){
        this.arrayMethods.push({
            name: this.newMethod
        });
        this.newMethod = '';
    },
}
 
}
</script>

