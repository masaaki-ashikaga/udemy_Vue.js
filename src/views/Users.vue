<template>
    <div>
        <h3>User</h3>
        <router-link to="/users/1">ユーザー１</router-link>
        <router-link to="/users/2">ユーザー２</router-link>
        <hr>
        <h1>User No. {{ id }}</h1>
        <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja#next-user'">次のユーザー</router-link>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default{
    props: ['id'],
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-acitve{
  transition: opacity 0.5s;
}
</style>