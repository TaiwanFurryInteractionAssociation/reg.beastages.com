(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{417:function(e,n,t){"use strict";t.r(n);t(70);var o={data:function(){return{response:null}},methods:{receiveResponse:function(data){var e=this;data&&(this.$set(this,"response",data),"redirect_to_newebpay"==data.payment_type?setTimeout((function(n){e.$refs.newebpay_form.submit()}),2e3):"refresh"==data.payment_type&&setTimeout((function(e){window.location.reload()}),1e3))}}},r=t(21),component=Object(r.a)(o,(function(){var e=this,n=e._self._c;return n("div",[e.response&&"redirect_to_newebpay"==e.response.payment_type?n("form",{ref:"newebpay_form",staticClass:"display:none",attrs:{method:"POST",action:e.response.payment_info.submit_url}},[n("input",{attrs:{name:"MerchantID"},domProps:{value:e.response.payment_info.merchant_id}}),e._v(" "),n("input",{attrs:{name:"Version"},domProps:{value:e.response.payment_info.version}}),e._v(" "),n("input",{attrs:{name:"TradeInfo"},domProps:{value:e.response.payment_info.trade_info}}),e._v(" "),n("input",{attrs:{name:"TradeSha"},domProps:{value:e.response.payment_info.hash}})]):e._e()])}),[],!1,null,null,null);n.default=component.exports}}]);