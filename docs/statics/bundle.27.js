(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{154:function(e,t,n){var s={"./bash":141,"./bash.js":141,"./css":142,"./css.js":142,"./htmlbars":143,"./htmlbars.js":143,"./javascript":144,"./javascript.js":144,"./scss":145,"./scss.js":145,"./typescript":146,"./typescript.js":146};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=154},544:function(e,t,n){"use strict";var s=n(151),a=(n(152),n(153)),r=(n(155),function(){return s.createElement(s.Fragment,{},s.createElement("h1",{id:"form-schema扩展规范",className:"react-demo-h1"},"Form Schema扩展规范"),s.createElement("h2",{id:"背景",className:"react-demo-h2"},"背景"),s.createElement("p",{className:"react-demo-p"},"虽然JSON Schema是可以轻松描述数据结构，但是，原生标准规范却不支持UI相关的描述，所以，我们只能通过扩展json schema来做UI描述"),s.createElement("h2",{id:"ui组件描述",className:"react-demo-h2"},"UI组件描述"),s.createElement("p",{className:"react-demo-p"},"为了描述具体UI组件，虽然我们有了基本数据类型(string/number/boolean/object/array/date)，但是对于一些扩展组件还是需要一些特殊属性来描述，而且也有可能存在同一种数据类型，但UI展示却是不一样的情况，所以，对于UI组件描述，我们使用了 ",s.createElement("strong",{className:"react-demo-strong"},"x-component")," 属性来指定对应的UI组件"),s.createElement(a,{code:'{\n  type:"string",\n  "x-component":"radio"\n}\n',justCode:!0,lang:"json"}),s.createElement("h2",{id:"表单校验描述",className:"react-demo-h2"},"表单校验描述"),s.createElement("p",{className:"react-demo-p"},"在表单场景中，校验是必不可少的，同样，为了描述字段的校验规则，我们又扩展了 ",s.createElement("strong",{className:"react-demo-strong"},"x-rules")," 来描述字段的校验规则"),s.createElement(a,{code:'{\n  type:"string",\n  "x-component":"radio",\n  "x-rules":[{pattern:"\\\\d+",message:"必须是数字"}]\n}\n',justCode:!0,lang:"json"}),s.createElement("h2",{id:"表单组件属性描述",className:"react-demo-h2"},"表单组件属性描述"),s.createElement("p",{className:"react-demo-p"},"每个表单组件其实都会有自己的一套属性，有控制交互行为的，也有控制样式的，但是这些都与json-schema无关，所以我们只能继续扩展 ",s.createElement("strong",{className:"react-demo-strong"},"x-props")," 来给传递给具体的表单UI组件"),s.createElement(a,{code:'{\n  type:"string",\n  "x-rules":[{pattern:"\\\\d+",message:"必须是数字"}],\n  "x-props":{multiple:true}\n}\n',justCode:!0,lang:"json"}),s.createElement("h2",{id:"表单字段顺序描述",className:"react-demo-h2"},"表单字段顺序描述"),s.createElement("p",{className:"react-demo-p"},"因为json-schema描述对象型数据结构同样是使用对象结构来描述，但是想要映射到UI界面上，就会存在一个显示顺序的问题，对象key是无序的，所以，我们就扩展了 ",s.createElement("strong",{className:"react-demo-strong"},"x-index")," 来控制字段顺序"),s.createElement(a,{code:'{\n  type:"object",\n  properties:{\n    aa:{\n      type:"string",\n      "x-rules":[{pattern:"\\\\d+",message:"必须是数字"}],\n      "x-props":{multiple:true},\n      "x-index":1\n    },\n    bb:{\n      type:"string",\n      "x-rules":[{pattern:"\\\\d+",message:"必须是数字"}],\n      "x-props":{multiple:true},\n      "x-index":0\n    }\n  }\n}\n',justCode:!0,lang:"json"}))});r.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=r}}]);
//# sourceMappingURL=bundle.27.js.map