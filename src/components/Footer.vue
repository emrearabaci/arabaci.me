<template>
    <div>

        <v-footer color="transparent">
            <v-row class="align-center justify-center">
                <v-col class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center">
                    <v-btn icon>
                        <a class="iconColor--text" href="mailto:a.emrearabaci@gmail.com">
                            <v-icon size="24px">mdi-at</v-icon>
                        </a>
                    </v-btn>
                </v-col>
                <v-col class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                    <BreakLine/>
                </v-col>
                <v-col class="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-10 text-center font-weight-light font-italic">
                    <p>{{ new Date().getFullYear() }}&copy; <span>arabaci.me</span></p>
                </v-col>
            </v-row>
        </v-footer>

    </div>
</template>

<script>
import BreakLine from '@/components/BreakLine'

export default {
    name: 'Footer',
    components: { BreakLine },
    data: () => ({})
}
</script>
