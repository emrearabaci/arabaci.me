<template>

    <v-app>
        <Navigation/>
        <v-container class="pt-16">
            <router-view/>
            <Footer class="pt-16"/>
        </v-container>
    </v-app>

</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components: {
        Navigation,
        Footer
    },
    data: () => ({})
}
</script>

<style lang="scss">
@import "src/assets/styles/styles";
</style>
