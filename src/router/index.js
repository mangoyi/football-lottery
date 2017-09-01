import Vue from 'vue';
import Router from 'vue-router';
import foo from '@/components/foo/foo';
import bar from '@/components/bar/bar';
import skt from '@/components/skt/skt';
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/', name: 'foo', component: foo
  }, {
    path: '/', name: 'bar', component: bar
  }, {
    path: '/', name: 'skt', component: skt
  }
  ]
});
