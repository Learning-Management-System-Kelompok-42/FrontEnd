<template>
    <div>
        <sideBar/>
        <router-view/>
    </div>
</template>

<script>
import sideBar from '../components/SideBar.vue'
export default {
    components: sideBar
}
</script>