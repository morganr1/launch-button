import n,{useState as t,useRef as e}from"react";import r,{keyframes as o}from"styled-components";var i=function(){return i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},i.apply(this,arguments)};function a(n,t,e,r){return new(e||(e=Promise))((function(o,i){function a(n){try{s(r.next(n))}catch(n){i(n)}}function l(n){try{s(r.throw(n))}catch(n){i(n)}}function s(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,l)}s((r=r.apply(n,t||[])).next())}))}function l(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function s(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var c,u,f,d,p,b,h,x,g=function(n){return"error"===n?"#FF0000":"fetching"===n?"#FF7900":"#000"},y=o(c||(c=s(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"],["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"]))),m=r.button(u||(u=s(["\n    border: 2;\n    border-color: ",";\n    display: inline-block;\n    border-style: solid;\n    background-color: #ffffff;\n    width: 133px;\n    height: 40px;\n    cursor: pointer;\n    color: ",";\n    &:disabled {\n        opacity: 1;\n        border: 2px solid #000000;\n        cursor: not-allowed;\n        background-color: #f5f5f5;\n        color: rgba(0, 0, 0, 0.7);\n    }\n"],["\n    border: 2;\n    border-color: ",";\n    display: inline-block;\n    border-style: solid;\n    background-color: #ffffff;\n    width: 133px;\n    height: 40px;\n    cursor: pointer;\n    color: ",";\n    &:disabled {\n        opacity: 1;\n        border: 2px solid #000000;\n        cursor: not-allowed;\n        background-color: #f5f5f5;\n        color: rgba(0, 0, 0, 0.7);\n    }\n"])),(function(n){var t=n.status;return g(t)}),(function(n){var t=n.status;return g(t)})),v=r.div(f||(f=s(["\n    color: #ffffff;\n    width: 133px;\n    height: 30px;\n    margin-top: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    cursor: ",";\n    &:after {\n        content: ' ';\n        position: absolute;\n        top: 52px;\n        cursor: ",";\n        border-color: ",";\n        border-width: 16px;\n        border-top-width: 0px;\n        border-style: solid;\n        border-color: transparent transparent\n            "," transparent;\n    }\n"],["\n    color: #ffffff;\n    width: 133px;\n    height: 30px;\n    margin-top: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",";\n    cursor: ",";\n    &:after {\n        content: ' ';\n        position: absolute;\n        top: 52px;\n        cursor: ",";\n        border-color: ",";\n        border-width: 16px;\n        border-top-width: 0px;\n        border-style: solid;\n        border-color: transparent transparent\n            "," transparent;\n    }\n"])),(function(n){var t=n.status;return g(t)}),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){var t=n.status;return g(t)}),(function(n){var t=n.status;return g(t)})),w=r.p(d||(d=s(["\n    font-family: Roboto, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 12px;\n    text-align: center;\n    line-height: 14px;\n"],["\n    font-family: Roboto, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 12px;\n    text-align: center;\n    line-height: 14px;\n"]))),k=r.div(p||(p=s(["\n    width: fit-content;\n    height: fit-content;\n"],["\n    width: fit-content;\n    height: fit-content;\n"]))),O=r.div(b||(b=s(["\n    left: 50%;\n    top: 50%;\n    z-index: 1;\n    width: 20px;\n    margin-left: -4px;\n    height: 20px;\n    box-sizing: border-box;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    border-color: ","\n    border-top: 1px solid;\n    border-right: 1px solid;\n    border-bottom: 1px solid;\n    border-left: 1px solid;\n    -webkit-animation: "," 1s linear infinite;\n    animation: "," 1s linear infinite;\n"],["\n    left: 50%;\n    top: 50%;\n    z-index: 1;\n    width: 20px;\n    margin-left: -4px;\n    height: 20px;\n    box-sizing: border-box;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    border-color: ","\n    border-top: 1px solid;\n    border-right: 1px solid;\n    border-bottom: 1px solid;\n    border-left: 1px solid;\n    -webkit-animation: "," 1s linear infinite;\n    animation: "," 1s linear infinite;\n"])),(function(n){return n.disabled?"#fff":"#ff7900"}),y,y),j=r.div(h||(h=s(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n"],["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n"]))),E=r.p(x||(x=s(["\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    line-height: 14.06px;\n    font-size: 12px;\n    font-weight: 400;\n    cursor: ","};\n"],["\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, sans-serif;\n    line-height: 14.06px;\n    font-size: 12px;\n    font-weight: 400;\n    cursor: ","};\n"])),(function(n){return n.disabled?"not-allowed":"pointer"})),q=function(r){var o=r.disabled,s=void 0!==o&&o,c=r.url;r.ariaLabel;var u=r.requestTimeout,f=r.isFetching,d=void 0!==f&&f,p=r.hasError,b=void 0!==p&&p,h=r.requestCallback,x=r.buttonText,g=r.tooltipText,y=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e}(r,["disabled","url","ariaLabel","requestTimeout","isFetching","hasError","requestCallback","buttonText","tooltipText"]),q=t({fetching:d,error:b}),T=q[0],z=q[1],F=t(!1),R=F[0],C=F[1],P=T.fetching,S=T.error,B=e(null),L=function(n){C(n)},M=function(){var n;P&&z({error:!0,fetching:!1}),B.current&&B.current.abort(),!S&&P||(n={controllerRef:B,requestTimeout:u,url:c,requestCallback:h,setRequestStatus:z},a(void 0,void 0,void 0,(function(){var t,e,r,o,i,a,s,c,u;return l(this,(function(l){switch(l.label){case 0:t=n.controllerRef,e=n.setRequestStatus,r=n.requestCallback,o=n.requestTimeout,i=n.url,a=new AbortController,t.current=a,l.label=1;case 1:return l.trys.push([1,5,,6]),e({fetching:!0,error:!1}),o&&setTimeout((function(){var n;null===(n=t.current)||void 0===n||n.abort()}),o),[4,fetch(i,{signal:t.current.signal})];case 2:return(s=l.sent()).ok?[4,s.json()]:[3,4];case 3:c=l.sent(),r(c),e({fetching:!1,error:!1}),t.current=null,l.label=4;case 4:return[3,6];case 5:return u=l.sent(),r({error:u}),e({fetching:!1,error:!0}),[3,6];case 6:return[2]}}))})))},A=S?"error":P?"fetching":"default",D=S&&!s||!s&&R;return n.createElement(k,{onMouseOver:function(){return L(!0)},onMouseOut:function(){return L(!1)},onFocus:function(){return L(!0)},onBlur:function(){return L(!1)},onKeyDown:function(n){return"Escape"===n.key&&L(!1)}},n.createElement(m,i({id:"api-button-container",type:"button",status:A,onClick:M,disabled:s,"aria-relevant":"text","aria-describedby":"api-button-tooltip"},y),n.createElement(j,null,n.createElement(E,{disabled:s,status:A},x[A]),P&&n.createElement(O,{"data-testid":"api-button-loader",status:A,disabled:s}))),D&&n.createElement(v,{disabled:s,id:"api-button-tooltip","aria-live":"polite","aria-relevant":"text",onFocus:function(){return!s&&L(!0)},onBlur:function(){return!s&&L(!1)},onClick:M,status:A},n.createElement(w,null,g[A])))};export{q as ApiButton};
//# sourceMappingURL=index.js.map
