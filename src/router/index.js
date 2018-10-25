import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main.vue'
import Editor from '../components/editor.vue'
import homepage from '../components/homepage.vue'
import draft from '../components/draft.vue'
import update from '../components/update.vue'
import collection from '../components/collection.vue'
import peoplewrite from '../components/peoplewrite.vue'
import weekly from '../components/weekly.vue'
import notFound from '../components/notFound.vue'
import guanliyuan from '../components/guanli.vue'
Vue.use(Router)


export default new Router({
    routes: [
        { path: '/',name:'main', redirect: '/main' },
        { path: '/root',name:'root', component: guanliyuan },
        {
            path: '/main',
            component: main,
            children: [
                { name: 'homepage', path: '/homepage', component: homepage },
                { name: 'editor', path: '/editor', component: Editor },
                { name: 'collection', path: '/collection', component: collection },
                { name: 'update', path: '/update', component: update },
                { name: 'draft', path: '/draft', component: draft },
                { name: 'weekly', path: '/weekly', component: weekly },
                { name: 'peoplewrite', path: '/peoplewrite', component: peoplewrite }
            ]
        },
        { path: '/wrong',name:'wrong', component: notFound },
        { path: '*', redirect: '/wrong' },
    ]
})