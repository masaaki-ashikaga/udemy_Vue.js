<template>
    <div>
    <slot :user="user" text="text"></slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                firstName: 'Jack',
                lastName: 'Donald'
            }
        }
    }
};
</script>

<style scoped>
  div{
    border: 1px solid blue;
  }
  h1{
    color: red;
  }
</style>
