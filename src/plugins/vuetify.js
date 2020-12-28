import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                iconColor: colors.grey.darken2,
                textColor: colors.grey.darken4
            },
            dark: {}
        }
    }
})
