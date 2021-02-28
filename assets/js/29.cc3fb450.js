(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{420:function(t,e,a){"use strict";a.r(e);var s=a(17),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("h4",{attrs:{id:"生命周期是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期是什么"}},[t._v("#")]),t._v(" 生命周期是什么？")]),t._v(" "),a("p",[t._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")]),t._v(" "),a("h4",{attrs:{id:"各个生命周期的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各个生命周期的作用"}},[t._v("#")]),t._v(" 各个生命周期的作用")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("生命周期")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("beforeCreate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例被创建之初，组件的属性生效之前")])]),t._v(" "),a("tr",[a("td",[t._v("created")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用")])]),t._v(" "),a("tr",[a("td",[t._v("beforeMount")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用")])]),t._v(" "),a("tr",[a("td",[t._v("mounted")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")])]),t._v(" "),a("tr",[a("td",[t._v("beforeUpdate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")])]),t._v(" "),a("tr",[a("td",[t._v("update")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件数据更新之后")])]),t._v(" "),a("tr",[a("td",[t._v("activited")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 专属，组件被激活时调用")])]),t._v(" "),a("tr",[a("td",[t._v("deactivated")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("keep-alive 专属，组件被销毁时调用")])]),t._v(" "),a("tr",[a("td",[t._v("beforeDestory")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件销毁前调用")])]),t._v(" "),a("tr",[a("td",[t._v("destoryed")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件销毁后调用")])])])]),t._v(" "),a("h4",{attrs:{id:"vue-的父组件和子组件生命周期钩子函数执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-的父组件和子组件生命周期钩子函数执行顺序"}},[t._v("#")]),t._v(" Vue 的父组件和子组件生命周期钩子函数执行顺序？")]),t._v(" "),a("p",[t._v("Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：")]),t._v(" "),a("p",[a("strong",[t._v("加载渲染过程")])]),t._v(" "),a("p",[t._v("父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted")]),t._v(" "),a("p",[a("strong",[t._v("子组件更新过程")])]),t._v(" "),a("p",[t._v("父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated")]),t._v(" "),a("p",[a("strong",[t._v("父组件更新过程")])]),t._v(" "),a("p",[t._v("父 beforeUpdate -> 父 updated")]),t._v(" "),a("p",[a("strong",[t._v("销毁过程")])]),t._v(" "),a("p",[t._v("父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed")]),t._v(" "),a("h4",{attrs:{id:"在哪个生命周期内调用异步请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在哪个生命周期内调用异步请求"}},[t._v("#")]),t._v(" 在哪个生命周期内调用异步请求？")]),t._v(" "),a("p",[t._v("可以在钩子函数 "),a("code",[t._v("created")]),t._v("、"),a("code",[t._v("beforeMount")]),t._v("、"),a("code",[t._v("mounted")]),t._v(" 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。")]),t._v(" "),a("p",[t._v("但是本人推荐在 "),a("code",[t._v("created")]),t._v(" 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("能更快获取到服务端数据，减少页面 loading 时间；")])]),t._v(" "),a("li",[a("p",[t._v("ssr 不支持 "),a("code",[t._v("beforeMount")]),t._v("、 "),a("code",[t._v("mounted")]),t._v(" 钩子函数，所以放在 "),a("code",[t._v("created")]),t._v(" 中有助于一致性；")])])]),t._v(" "),a("h4",{attrs:{id:"在什么阶段才能访问操作-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在什么阶段才能访问操作-dom"}},[t._v("#")]),t._v(" 在什么阶段才能访问操作 DOM？")]),t._v(" "),a("p",[t._v("在钩子函数 "),a("code",[t._v("mounted")]),t._v(" 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 "),a("code",[t._v("mounted")]),t._v(" 中可以访问操作 DOM。")]),t._v(" "),a("h4",{attrs:{id:"父组件可以监听到子组件的生命周期吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件可以监听到子组件的生命周期吗"}},[t._v("#")]),t._v(" 父组件可以监听到子组件的生命周期吗？")]),t._v(" "),a("p",[t._v("比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parent.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child @mounted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doSomething"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Child.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mounted"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Parent.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Child @hook"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("mounted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doSomething"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Child"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'父组件监听到 mounted 钩子函数 ...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  Child.vue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'子组件触发 mounted 钩子函数 ...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以上输出顺序为：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件触发 mounted 钩子函数 ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件监听到 mounted 钩子函数 ...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。")]),t._v(" "),a("h4",{attrs:{id:"谈谈你对-keep-alive-的了解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对-keep-alive-的了解"}},[t._v("#")]),t._v(" 谈谈你对 keep-alive 的了解？")]),t._v(" "),a("p",[t._v("keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一般结合路由和动态组件一起使用，用于缓存组件；")])]),t._v(" "),a("li",[a("p",[t._v("提供 "),a("code",[t._v("include")]),t._v(" 和 "),a("code",[t._v("exclude")]),t._v(" 属性，两者都支持字符串或正则表达式， "),a("code",[t._v("include")]),t._v(" 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 "),a("code",[t._v("exclude")]),t._v(" 的优先级比 "),a("code",[t._v("include")]),t._v(" 高；")])]),t._v(" "),a("li",[a("p",[t._v("对应两个钩子函数 "),a("code",[t._v("activated")]),t._v(" 和 "),a("code",[t._v("deactivated")]),t._v(" ，当组件被激活时，触发钩子函数 "),a("code",[t._v("activated")]),t._v("，当组件被移除时，触发钩子函数 "),a("code",[t._v("deactivated")]),t._v("。")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);