<template>
    <div>

        <v-app-bar fixed
                   elevate-on-scroll
                   color="white">
            <v-list color="transparent">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="iconColor--text header-font">arabaci.me</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-spacer/>
            <div>
                <v-btn class="ma-1" icon>
                    <a class="iconColor--text" href="https://github.com/emrearabaci" target="_blank">
                        <v-icon size="24px">mdi-github</v-icon>
                    </a>
                </v-btn>
                <v-btn class="ma-1" icon>
                    <a class="iconColor--text" href="mailto:a.emrearabaci@gmail.com">
                        <v-icon size="24px">mdi-at</v-icon>
                    </a>
                </v-btn>
            </div>
        </v-app-bar>

    </div>
</template>

<script>
export default {
    name: 'Navigation',
    components: {},
    data: () => ({})
}
</script>
