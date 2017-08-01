/**
 * Created by Micheal Xiao on 2017/8/1.
 */
import Vue from 'vue'
import app from '@/main'

describe('app test', () => {
    // const Constructor = Vue.extend(Hello)
    // const vm = new Constructor().$mount()

    it('login should render correct contents', () => {
        expect(app.$el.querySelector('h3.title').textContent)
            .to.equal('联蔚DMCS微服务开发框架')
    })

    // it('should render correct contents', () => {
    //
    //     expect(app.$el.querySelector('h2:first').textContent)
    //         .to.equal('这是首页')
    // })
})