(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(n,e,t){n.exports=t(79)},43:function(n,e){},47:function(n,e){},49:function(n,e){},68:function(n,e){},69:function(n,e){},7:function(n,e){function t(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=7},70:function(n,e){},77:function(n,e,t){},78:function(n,e,t){},79:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),c=t(28),i=t.n(c),o=t(29),u=t(30),s=t(34),l=t(31),f=t(11),p=t(35),h=t(15),g=t(32),m=t.n(g),d=t(33),w=t.n(d),v={rowsBeginning:/^DATE$/g,rowsEnding:/^NEW BALANCE$/g,rowBeginning:/^[A-Z]{3} [0-9]{2}$/g,rowEnding:null,ignoreNumeric:!0,replacements:[{search:"CALGARY AB",replace:""},{search:/^([A-Z]{3} [0-9]{2})[ ]{2,4}[A-Z]{3} [0-9]{2}[ ]{1,2}(.*)$/g,replace:"$1{SPLIT}$2"},{search:/\$([0-9]),([0-9]{3})/g,replace:"$1$2"},{search:/(\-?)\$([0-9]+\.[0-9]{2})$/g,replace:"$1$2"}],joins:[{search:/^Foreign Currency\-(.*)$/g,replace:" ($1",join:1},{search:/^Exchange rate\-(.*)$/g,replace:" - Rate $1)",join:1}],columnTitles:["Date","Description","Amount"],dateColumn:0,inputDatePattern:"ll DD",outputDatePattern:"L"},E=function n(e,t,r){return t=t||1,r=r||[v.columnTitles],e.getPage(t).then(function(a){return a.getTextContent().then(function(a){var c;return(c=r).push.apply(c,Object(h.a)(function(n){var e=[],t=[],r=!1;n.forEach(function(n){if(n.str.match(v.rowsBeginning))r=!0;else if(n.str.match(v.rowsEnding))r=!1;else if(v.ignoreNumeric&&!isNaN(n.str));else if(r){var t=n.str;v.replacements.forEach(function(n){t=t.replace(n.search,n.replace)});var a=(t=t.trim()).split(/\{SPLIT\}/g).map(function(n){return n.trim()}).filter(function(n){return n.length>0});e.push.apply(e,Object(h.a)(a))}});var a=function(n){n[v.dateColumn]=w()(n[v.dateColumn],v.inputDatePattern).format(v.outputDatePattern),n.forEach(function(e,t){v.joins.forEach(function(e){n[t].search(e.search)>-1&&(n[t]=n[t].replace(e.search,e.replace),n[e.join]+=n[t],n.splice(t,1))})}),t.push(n),n.length!==v.columnTitles.length&&console.warn("Invalid row length",n)},c=[];return e.forEach(function(n){v.rowBeginning&&n.match(v.rowBeginning)?(c.length>0&&(a(c),c=[]),c.push(n)):v.rowEnding&&n.match(v.rowEnding)?(c.push(n),a(c),c=[]):c.push(n)}),c.length>0&&(a(c),c=[]),t}(a.items))),t<e.numPages?n(e,t+1,r):r})})},A=function(n){return m.a.getDocument(n).then(function(n){return E(n)}).then(function(n){return n.map(function(n){return n.map(function(n){return'"'.concat(n,'"')}).join(",")}).join("\n")})},$=(t(77),function(n){function e(){var n,t;Object(o.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(s.a)(this,(n=Object(l.a)(e)).call.apply(n,[this].concat(a)))).state={encodedCsv:"",fileName:""},t.handleUpload=function(n){var e=t._input.files[0].name.replace(".pdf",".csv"),r=new FileReader,a=Object(f.a)(t);r.onload=function(){var n=this.result;A(n).then(function(n){a.setState({encodedCsv:"data:text/csv;charset=utf-8,".concat(encodeURI(n).replace(/#/g,"-")),fileName:e})})},r.readAsArrayBuffer(t._input.files[0])},t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-intro"},a.a.createElement("input",{className:"App-input",type:"file",ref:function(e){return n._input=e},onChange:this.handleUpload}),a.a.createElement("a",{className:"App-link",ref:function(e){return n._link=e},href:this.state.encodedCsv,download:this.state.fileName},this.state.fileName)))}}]),e}(r.Component));t(78);i.a.render(a.a.createElement($,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f96dd1d9.chunk.js.map