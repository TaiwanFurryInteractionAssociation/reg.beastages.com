(window.webpackJsonp=window.webpackJsonp||[]).push([[38,8,21,28],{370:function(t,e,n){"use strict";n.r(e);var r=n(135),o=n.n(r),c={props:{type:{type:String,default:"primary"}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=n(21),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(370).default})},377:function(t,e,n){"use strict";n.r(e);n(31),n(22),n(38),n(10),n(48),n(35),n(49);var r=n(13);n(89);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n(135),d=n.n(l),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:d.a}},computed:{computedErrorStyle:function(){return{color:d.a.negative.background}}}},m=n(21),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my:8"},[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+"\n  ")]):t._e(),t._v(" "),t._t("default",null,null,c(c({},t.$props),t.$attrs)),t._v(" "),t.error?e("div",{staticClass:"font-size:0.8rem mt:4",style:t.computedErrorStyle},[t._v("\n    "+t._s(t.error.join("\n"))+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);var r=n(135),o=n.n(r),c={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},l=n(21),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+" :\n  ")]):t._e(),t._v(" "),e("select",{style:t.computedStyle,attrs:{required:t.required},domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Select:n(381).default})},523:function(t,e,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("17b9e7ca",content,!0,{sourceMap:!1})},542:function(t,e,n){"use strict";n(523)},543:function(t,e,n){var r=n(62)(!1);r.push([t.i,'.dataField[data-v-265ef146]{padding-right:8px}.dataInfo[data-v-265ef146]{padding:4px 0}.dataInfo span[data-v-265ef146]{font-size:1.2rem;padding:4px 8px;background-color:#e5e4e2;border-radius:4px;font-family:"Courier New",monospace;letter-spacing:2px}',""]),t.exports=r},574:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(20),n(10),n(35),n(45),n(50),n(1)),c=n(68),l=n(502),d={layout:"admin",components:{},data:function(){return{loading:!1,sourceWebcamID:null,ticket:null,searchTicketToken:null,error:null}},mounted:function(){var t=this;this.codeReader=new l.BrowserQRCodeReader,this.codeReader.getVideoInputDevices().then((function(e){var n=document.getElementById("webcamSourceSelect");e.forEach((function(element){var t=document.createElement("option");t.text=element.label,t.value=element.deviceId,n.appendChild(t)})),n.onchange=function(){t.sourceWebcamID=n.value,t.clearData()},t.sourceWebcamID=e[0].deviceId,t.clearData()}))},watch:{},methods:{clearData:function(){this.ticket=null,this.searchTicketToken=null,this.error=null,this.codeReader.reset(),this.initCodeReader()},initCodeReader:function(){var t=this;this.codeReader.decodeFromInputVideoDeviceContinuously(this.sourceWebcamID,"webcamVideoStream",(function(e,n){if($nuxt.$route.path.includes("onsite/checkin/visitors")){if(!t.searchTicketToken)return n?(n instanceof l.NotFoundException&&console.log("No QR code found."),n instanceof l.ChecksumException&&console.log("A code was found, but it's read value was not valid."),void(n instanceof l.FormatException&&console.log("A code was found, but it was in a invalid format."))):void(e&&(document.getElementById("webcamVideoStream").pause(),console.log("Found correct QRCode"),t.searchTicketToken=e.text,t.findTicket()))}else t.codeReader.reset()}))},findTicket:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.ticket=null,n=t,e.next=5,t.$axios.get("/api/admin/checkin/visitor/".concat(t.searchTicketToken)).then((function(e){t.ticket=e.data.ticket,10==t.ticket.ticket_status&&o.a.nextTick((function(){n.$refs.checkin.button.focus()}))})).catch((function(e){e.response.data?t.error=e.response.data.code:c.a.showRequestError(e)}));case 5:t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},checkin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("確定使用本入場券嗎？")){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,t,e.next=6,t.$axios.post("/api/admin/checkin/visitor/".concat(t.ticket.ticket_id,"/use")).then((function(e){t.clearData(),alert("入場成功")})).catch((function(t){c.a.showRequestError(t)}));case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()},undoCheckin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("確定要刪除本入場券的使用記錄嗎？")){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,t,e.next=6,t.$axios.delete("/api/admin/checkin/visitor/".concat(t.ticket.ticket_id,"/use")).then((function(e){t.clearData(),alert("已取消入場紀錄")})).catch((function(t){c.a.showRequestError(t)}));case 6:t.loading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},f=(n(542),n(21)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p:16 overflow:auto"},[e("Loading",{attrs:{value:t.loading}}),t._v(" "),e("div",{staticClass:"font-size:2rem"},[t._v("參加者驗票")]),t._v(" "),e("div",[e("Field",{attrs:{field:"切換鏡頭"}},[e("select",{staticClass:"max-w:full",attrs:{id:"webcamSourceSelect"}})]),t._v(" "),t._m(0)],1),t._v(" "),t.ticket?e("div",[e("div",[e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n        狀態\n      ")]),t._v(" "),e("div",{staticClass:"text:center@<=sm"},[10==t.ticket.ticket_status?e("div",{staticClass:"round border drop-shadow p:16|32 bg:#dce9d5 mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md w:full@<=sm"},[t._v("\n          可入場\n        ")]):e("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md w:full@<=sm"},[t._v("\n          入場券已被使用\n        ")]),t._v(" "),e("div",{staticClass:"mt:8"},[e("span",[t._v("入場券編號： "+t._s(t.ticket.ticket_id))]),t._v(" "),e("span",[t._v("訂單編號： "+t._s(t.ticket.ticket_order_id))])])])]),t._v(" "),e("div",[e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n        "+t._s(t.$t("admin.checkin.actions.title"))+"\n      ")]),t._v(" "),e("div",{staticClass:"flex@>sm mt:8 center@<=sm"},[10==t.ticket.ticket_status?e("Button",{ref:"checkin",staticClass:"mr:8 mr:0@<=sm w:full@<=sm",on:{click:t.checkin}},[t._v("\n          確認入場\n        ")]):e("Button",{staticClass:"mr:8 mr:0@<=sm w:full@<=sm",attrs:{type:"negative"},on:{click:t.undoCheckin}},[t._v("\n          取消入場紀錄\n        ")]),t._v(" "),e("Button",{staticClass:"mr:8 mr:0@<=sm w:full@<=sm mt:8@<=sm",attrs:{type:"secondary"},on:{click:t.clearData}},[t._v("\n          重新掃描\n        ")])],1)])]):t._e(),t._v(" "),t.error?e("div",[e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n        錯誤\n      ")]),t._v(" "),e("div",{staticClass:"text:center@<=sm"},[e("div",{staticClass:"round border drop-shadow p:16|32 bg:#eecdcd mt:8 flex w:fit-content font-size:1.4rem flex-direction:column@<md w:full@<=sm"},[t._v("\n            "+t._s(t.$t(t.error))+"\n        ")]),t._v(" "),e("div",{staticClass:"flex mt:16"},[e("Button",{ref:"checkin",staticClass:"w:full@<=sm",on:{click:t.clearData}},[t._v("\n            重新掃描\n          ")])],1)])]):t._e()],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"text:center@<=sm"},[t("video",{staticClass:"w:256 h:256",staticStyle:{border:"1px solid gray","object-fit":"cover"},attrs:{id:"webcamVideoStream"}})])}],!1,null,"265ef146",null);e.default=component.exports;installComponents(component,{Loading:n(136).default,Select:n(381).default,Field:n(377).default,Button:n(370).default})}}]);