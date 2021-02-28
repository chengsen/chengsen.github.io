(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{419:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[s._v("#")]),s._v(" 基础语法")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul")]),a("p"),s._v(" "),a("h4",{attrs:{id:"v-show-与-v-if-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show-与-v-if-有什么区别"}},[s._v("#")]),s._v(" v-show 与 v-if 有什么区别？")]),s._v(" "),a("p",[s._v("v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被"),a("strong",[s._v("销毁")]),s._v("和"),a("strong",[s._v("重建")]),s._v("；")]),s._v(" "),a("p",[s._v("也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),s._v(" "),a("p",[s._v("v-show 就简单得多——不管初始条件是什么，元素"),a("strong",[s._v("总是会被渲染")]),s._v("，并且只是简单地基于 CSS 的 "),a("code",[s._v("display")]),s._v(" 属性进行切换。")]),s._v(" "),a("p",[s._v("所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。")]),s._v(" "),a("h4",{attrs:{id:"class-与-style-如何动态绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-与-style-如何动态绑定"}},[s._v("#")]),s._v(" Class 与 Style 如何动态绑定？")]),s._v(" "),a("p",[s._v("Class 可以通过"),a("code",[s._v("对象语法")]),s._v("和"),a("code",[s._v("数组语法")]),s._v("进行动态绑定：")]),s._v(" "),a("p",[a("strong",[s._v("对象语法")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("v-bind:")]),s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{ active: isActive, "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("text-danger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v(": hasError }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  isActive"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  hasError"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("数组语法")])]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("v-bind:")]),s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("[isActive ? activeClass : "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v(", errorClass]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  activeClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  errorClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text-danger'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"怎样理解-vue-的单向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎样理解-vue-的单向数据流"}},[s._v("#")]),s._v(" 怎样理解 Vue 的单向数据流？")]),s._v(" "),a("p",[s._v("所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。")]),s._v(" "),a("p",[s._v("这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。")]),s._v(" "),a("p",[s._v("额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。")]),s._v(" "),a("p",[s._v("子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。")]),s._v(" "),a("h4",{attrs:{id:"computed-和-watch-的区别和运用的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别和运用的场景"}},[s._v("#")]),s._v(" computed 和 watch 的区别和运用的场景？")]),s._v(" "),a("p",[a("strong",[s._v("computed")]),s._v("： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；")]),s._v(" "),a("p",[a("strong",[s._v("watch")]),s._v("： 更多的是「观察」的作用，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。")]),s._v(" "),a("p",[a("strong",[s._v("运用场景")]),s._v("：")]),s._v(" "),a("p",[s._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),s._v(" "),a("p",[s._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")]),s._v(" "),a("h4",{attrs:{id:"直接给一个数组项赋值-vue-能检测到变化吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接给一个数组项赋值-vue-能检测到变化吗"}},[s._v("#")]),s._v(" 直接给一个数组项赋值，Vue 能检测到变化吗？")]),s._v(" "),a("p",[s._v("由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue")])]),s._v(" "),a("li",[a("p",[s._v("当你修改数组的长度时，例如：vm.items.length = newLength")])])]),s._v(" "),a("p",[s._v("为了解决第一个问题，Vue 提供了以下操作方法：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Vue.set")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vm.$set，Vue.set的一个别名")]),s._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("$set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array.prototype.splice")]),s._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("为了解决第二个问题，Vue 提供了以下操作方法：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Array.prototype.splice")]),s._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);