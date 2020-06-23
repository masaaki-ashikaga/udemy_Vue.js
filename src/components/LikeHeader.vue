<template>
    <div>
    <slot>
        <h2>デフォルトのタイトル</h2>
    </slot>
    </div>
</template>

<script>
export default {
    props: ["headerText"]
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
