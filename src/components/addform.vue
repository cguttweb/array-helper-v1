<template>
    <div>
        <b-form inline>
            <b-form-input placeholder="Method Name" type="text"></b-form-input>
            <b-form-input placeholder="Method" type="text"></b-form-input>
            <b-button class="primary" type="submit" @click="addMethod">Add Method</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    methods: {
    addMethod(){
        this.arrayMethods.push({
            name: this.newMethod
        });
        this.newMethod = '';
    },
}
 
}
</script>

<style lang="scss" scoped>
.inline {
    float: right;
}
</style>
