(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6a0S":function(e,t,n){e.exports={box:"anvil-search-box__box___16M9-"}},"7sTU":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("6a0S"),i=n.n(o);t.a=function(e){return r.a.createElement("div",{className:i.a.box},e.children)}},D0dy:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("q1tI"),r=n.n(a),o=n("bJi6"),i=n.n(o);function l(e){return r.a.createElement("div",{className:i.a["blank-content"]},e.children)}},zJBT:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),r=(n("y8nQ"),n("Vl3Y")),o=(n("5NDa"),n("5rEg")),i=n("q1tI"),l=n.n(i),c=n("/MKj"),u=n("D0dy"),s=n("7sTU"),p=n("Y+p1"),f=n.n(p),d=(n("g9YV"),n("wCAj")),y=(n("miYZ"),n("tsqr")),h=(n("P2fV"),n("NJEC")),m=(n("/zsF"),n("PArb")),b=(n("OaEy"),n("2fM7"));function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){O(e,t,n[t])})}return e}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=S(t).call(this,e),n=!r||"object"!==v(r)&&"function"!==typeof r?E(a):r,O(E(n),"index",0),O(E(n),"cacheOriginData",{}),O(E(n),"toggleEditable",function(e){return function(t){t.preventDefault();var a=n.state.data.map(function(e){return g({},e)}),r=n.getRowByKey(e,a);r&&(r.editable||(n.cacheOriginData[e]=g({},r)),r.editable=!r.editable,n.setState({data:a}))}}),O(E(n),"newMember",function(){var e=n.state.data.map(function(e){return g({},e)});e.push({id:"NEW_TEMP_ID_".concat(n.index),realName:"",username:"",position:"",department:"",roleId:null,editable:!0,isNew:!0}),n.index+=1,n.setState({data:e})}),O(E(n),"getColumns",function(){var e=n.props.userState.roleComboList;return[{title:"\u59d3\u540d",width:"15%",dataIndex:"realName",render:function(e,t){return t.editable?l.a.createElement(o.a,{value:e,autoFocus:!0,onChange:n.handleFieldChange("realName",t.id),onKeyPress:n.handleKeyPress(t.id),placeholder:"\u6210\u5458\u59d3\u540d"}):e}},{title:"\u7528\u6237\u540d",width:"15%",dataIndex:"username",render:function(e,t){return t.editable?l.a.createElement(o.a,{value:e,onChange:n.handleFieldChange("username",t.id),onKeyPress:n.handleKeyPress(t.id),placeholder:"\u5de5\u53f7"}):e}},{title:"\u90e8\u95e8\u4fe1\u606f",width:"20%",dataIndex:"department",render:function(e,t){return t.editable?l.a.createElement(o.a,{value:e,onChange:n.handleFieldChange("department",t.id),onKeyPress:n.handleKeyPress(t.id),placeholder:"\u6240\u5c5e\u90e8\u95e8"}):e}},{title:"\u804c\u4f4d",width:"15%",dataIndex:"position",render:function(e,t){return t.editable?l.a.createElement(o.a,{placeholder:"\u804c\u4f4d",value:e,onChange:n.handleFieldChange("position",t.id),onKeyPress:n.handleKeyPress(t.id)}):e}},{title:"\u89d2\u8272\u540d\u79f0",width:"15%",dataIndex:"roleName",render:function(t,a){return a.editable?l.a.createElement(b.a,{placeholder:"\u9009\u62e9\u89d2\u8272",style:{width:"100%"},value:a.roleId,onChange:n.handleFieldChange("roleId",a.id),onKeyPress:n.handleKeyPress(a.id)},e.map(function(e){return l.a.createElement(b.a.Option,{key:e.id,value:e.id},e.roleName)})):t}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){var a=n.state.loading;return t.editable&&a?null:t.editable?t.isNew?l.a.createElement("span",null,l.a.createElement("a",{onClick:n.handleSaveRow(t.id)},"\u6dfb\u52a0"),l.a.createElement(m.a,{type:"vertical"}),l.a.createElement(h.a,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:n.handleRemove(t.id)},l.a.createElement("a",null,"\u5220\u9664"))):l.a.createElement("span",null,l.a.createElement("a",{onClick:n.handleSaveRow(t.id)},"\u4fdd\u5b58"),l.a.createElement(m.a,{type:"vertical"}),l.a.createElement("a",{onClick:n.handleCancel(t.id)},"\u53d6\u6d88")):l.a.createElement("span",null,l.a.createElement("a",{onClick:n.toggleEditable(t.id)},"\u7f16\u8f91"),l.a.createElement(m.a,{type:"vertical"}),l.a.createElement("a",{onClick:n.handleToDistributionProject(t)},"\u5206\u914d\u9879\u76ee"),l.a.createElement(m.a,{type:"vertical"}),l.a.createElement(h.a,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:n.handleRemove(t.id)},l.a.createElement("a",null,"\u5220\u9664")))}}]}),O(E(n),"handleToDistributionProject",function(e){return function(){var t=n.props.dispatch;t({type:"user/setUserVis",payload:{data:{distributionVis:!0}}}),t({type:"user/setState",payload:{userNow:e}}),t({type:"user/fetchUserApplicationAssign"})}}),n.state={data:e.value,loading:!1,value:e.value},n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,i["PureComponent"]),n=t,c=[{key:"getDerivedStateFromProps",value:function(e,t){return f()(e.value,t.value)?null:{data:e.value,value:e.value}}}],(r=[{key:"getRowByKey",value:function(e,t){var n=this.state.data;return(t||n).filter(function(t){return t.id===e})[0]}},{key:"handleRemove",value:function(e){var t=this;return function(){var n=t.state.data,a=t.props.onChange,r=n.filter(function(t){return t.id!==e});t.setState({data:r}),a(r)}}},{key:"handleKeyPress",value:function(e){var t=this;return function(n){"Enter"===n.key&&t.handleSaveRow(n,e)}}},{key:"handleFieldChange",value:function(e,t){var n=this;return function(a){var r=n.state.data.map(function(e){return g({},e)}),o=n.getRowByKey(t,r);o&&(a.target?(o[e]=a.target.value,n.setState({data:r})):(o[e]=a,n.setState({data:r})))}}},{key:"handleSaveRow",value:function(e){var t=this;return function(n){n.persist(),t.setState({loading:!0}),setTimeout(function(){if(t.clickedCancel)t.clickedCancel=!1;else{var a=t.getRowByKey(e)||{};if(!a.realName||!a.username||!a.roleId)return y.a.error("\u8bf7\u586b\u5199\u5b8c\u6574\u6210\u5458\u4fe1\u606f\u3002"),n.target.focus(),void t.setState({loading:!1});delete a.isNew,t.toggleEditable(n,e);var r=t.state.data;(0,t.props.onChange)(r),t.setState({loading:!1})}},500)}}},{key:"handleCancel",value:function(e){var t=this;return function(n){t.clickedCancel=!0,n.preventDefault();var a=t.state.data.map(function(e){return g({},e)}),r=t.getRowByKey(e,a);t.cacheOriginData[e]&&(Object.assign(r,t.cacheOriginData[e]),delete t.cacheOriginData[e]),r.editable=!1,t.setState({data:a}),t.clickedCancel=!1}}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.data;return l.a.createElement(i.Fragment,null,l.a.createElement(d.a,{rowKey:"id",loading:t,columns:this.getColumns(),dataSource:n,pagination:!1,size:"middle"}),l.a.createElement(a.a,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:this.newMember,icon:"plus"},"\u65b0\u589e\u6210\u5458"))}}])&&w(n.prototype,r),c&&w(n,c),t}();O(P,"defaultProps",{onChange:function(){}});var j=Object(c.connect)(function(e){return{userState:e.userState}})(P),k=(n("2qtc"),n("kLXV")),_=(n("T2oS"),n("W9HT")),K=(n("8R5B"),n("aJyg"));function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return a=this,r=(e=N(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==T(r)&&"function"!==typeof r?x(a):r,I(x(n),"getTransferDataSource",function(){var e=n.props,t=e.applicationState.applicationComboList,a=e.userState.targetKeys;return t.filter(function(e){return!a.includes(e.id)}).map(function(e){return{key:e.id,title:e.applicationName}})}),I(x(n),"handleTransferChange",function(e){(0,n.props.dispatch)({type:"user/setState",payload:{targetKeys:e}})}),I(x(n),"handleTransferSelectChange",function(e,t){(0,n.props.dispatch)({type:"user/setState",payload:{selectedKeys:[].concat(D(e),D(t))}})}),I(x(n),"handleDistributionApplication",function(){(0,n.props.dispatch)({type:"user/updateUserApplicationAssign"})}),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,l.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"application/fetchApplicationCombo"})}},{key:"render",value:function(){var e=this.props,t=e.applicationState,n=e.userState,a=e.onClose,r=t.applicationListLoading,o=n.userVis,i=n.userNow,c=n.selectedKeys,u=n.targetKeys;return l.a.createElement(k.a,{visible:o.distributionVis,title:"\u7ed9".concat(i.username," \u5206\u914d\u9879\u76ee"),onCancel:a,onOk:this.handleDistributionApplication},l.a.createElement(_.a,{spinning:r},l.a.createElement(K.a,{rowKey:function(e){return e.key},render:function(e){return e.title},selectedKeys:c,targetKeys:u,dataSource:this.getTransferDataSource(),onChange:this.handleTransferChange,onSelectChange:this.handleTransferSelectChange})))}}])&&R(n.prototype,a),r&&R(n,r),t}(),L=Object(c.connect)(function(e){return{userState:e.userState,applicationState:e.applicationState}})(F);function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return a=this,r=(e=M(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==V(r)&&"function"!==typeof r?U(a):r,q(U(n),"handleChange",function(e){(0,n.props.dispatch)({type:"user/setState",payload:{username:e.target.key}})}),q(U(n),"handleSearch",function(){(0,n.props.dispatch)({type:"user/fetchUserList"})}),q(U(n),"handleClose",function(e){return function(){(0,n.props.dispatch)({type:"user/setUserVis",payload:{data:q({},e,!1)}})}}),n}var n,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,l.a.Component),n=t,(i=[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"user/fetchUserList"}),e({type:"user/fetchRoleComboList"})}},{key:"render",value:function(){var e=this.props,t=e.userState,n=e.form,i=t.userList,c=n.getFieldDecorator;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(r.a,{layout:"inline"},l.a.createElement(r.a.Item,null,c("keyword")(l.a.createElement(o.a,{placeholder:"\u8bf7\u8f93\u5165",onChange:this.handleChange,onPressEnter:this.handleSearch}))),l.a.createElement(r.a.Item,null,l.a.createElement(a.a,{type:"primary",onClick:this.handleSearch},"\u641c\u7d22")))),l.a.createElement(j,{value:i,pagination:!1})),l.a.createElement(L,{onClose:this.handleClose("distributionVis")}))}}])&&B(n.prototype,i),c&&B(n,c),t}();t.default=Object(c.connect)(function(e){return{userState:e.userState}})(r.a.create()(Y))}}]);
//# sourceMappingURL=11.6a9f2ec8.js.map