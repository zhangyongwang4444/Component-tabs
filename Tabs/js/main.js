// function Tabs(selector) {
//     this.elements = $(selector)
//     this.elements.each(function (index, elements) {
//         $(elements).children('.tabs-bar').children('li').eq(0).addClass('active')
//         $(elements).children('.tabs-content').children('li').eq(0).addClass('active')
//     })
//     this.elements.on('click', '.tabs-bar > li', function (e) {
//         var $li = $(e.currentTarget)
//         $li.addClass('active').siblings().removeClass('active')
//         var index = $li.index()
//         var $content = $li.closest('.tabs').find('.tabs-content >li').eq(index)
//         $content.addClass('active').siblings().removeClass('active')
//     })
// }

// var tabs = new Tabs('.xxx')

//利用原型优化

// function Tabs(selector) {
//     this.elements = $(selector)
//     this.init()
//     this.bindEvents()
// }

// Tabs.prototype.init = function () {
//     this.elements.each(function (index, elements) {
//         $(elements).children('.tabs-bar').children('li').eq(0).addClass('active')
//         $(elements).children('.tabs-content').children('li').eq(0).addClass('active')
//     })
// }

// Tabs.prototype.bindEvents = function () {
//     this.elements.on('click', '.tabs-bar > li', function (e) {
//         var $li = $(e.currentTarget)
//         $li.addClass('active').siblings().removeClass('active')
//         var index = $li.index()
//         var $content = $li.closest('.tabs').find('.tabs-content >li').eq(index)
//         $content.addClass('active').siblings().removeClass('active')
//     })
// }

// var tabs = new Tabs('.xxx')


//利用ES6的语法再次优化组件

class Tabs {
    constructor(selector) {
        this.elements = $(selector)
        this.init()
        this.bindEvents()
    }
    init() {
        this.elements.each(function (index, elements) {
            $(elements).children('.tabs-bar').children('li').eq(0).addClass('active')
            $(elements).children('.tabs-content').children('li').eq(0).addClass('active')
        })
    }
    bindEvents() {
        this.elements.on('click', '.tabs-bar > li', function (e) {
            var $li = $(e.currentTarget)
            $li.addClass('active').siblings().removeClass('active')
            var index = $li.index()
            var $content = $li.closest('.tabs').find('.tabs-content >li').eq(index)
            $content.addClass('active').siblings().removeClass('active')
        })
    }
}

var tabs = new Tabs('.xxx')