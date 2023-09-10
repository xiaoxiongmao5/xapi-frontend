"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[187],{4393:function(he,Q,c){c.d(Q,{Z:function(){return J}});var Y=c(94184),S=c.n(Y),l=c(98423),s=c(67294),R=c(53124),q=c(98675),ce=c(87564),F=c(56440),de=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},N=e=>{var{prefixCls:t,className:n,hoverable:a=!0}=e,r=de(e,["prefixCls","className","hoverable"]);const{getPrefixCls:i}=s.useContext(R.E_),o=i("card",t),d=S()(`${o}-grid`,n,{[`${o}-grid-hoverable`]:a});return s.createElement("div",Object.assign({},r,{className:d}))},E=c(14747),H=c(67968),G=c(45503);const ge=e=>{const{antCls:t,componentCls:n,headerHeight:a,cardPaddingBase:r,tabsMarginBottom:i}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:a,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,E.dF)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},E.vS),{[`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:i,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},_=e=>{const{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:a,lineWidth:r}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${r}px 0 0 0 ${n},
      0 ${r}px 0 0 ${n},
      ${r}px ${r}px 0 0 ${n},
      ${r}px 0 0 0 ${n} inset,
      0 ${r}px 0 0 ${n} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},k=e=>{const{componentCls:t,iconCls:n,actionsLiMargin:a,cardActionsIconSize:r,colorBorderSecondary:i,actionsBg:o}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:o,borderTop:`${e.lineWidth}px ${e.lineType} ${i}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,E.dF)()),{"& > li":{margin:a,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:e.cardActionsIconSize*2,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${n}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${n}`]:{fontSize:r,lineHeight:`${r*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${i}`}}})},Z=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,E.dF)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},E.vS),"&-description":{color:e.colorTextDescription}}),ee=e=>{const{componentCls:t,cardPaddingBase:n,colorFillAlter:a}=e;return{[`${t}-head`]:{padding:`0 ${n}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${n}px`}}},X=e=>{const{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},pe=e=>{const{antCls:t,componentCls:n,cardShadow:a,cardHeadPadding:r,colorBorderSecondary:i,boxShadowTertiary:o,cardPaddingBase:d,extraColor:g}=e;return{[n]:Object.assign(Object.assign({},(0,E.Wf)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${n}-bordered)`]:{boxShadow:o},[`${n}-head`]:ge(e),[`${n}-extra`]:{marginInlineStart:"auto",color:g,fontWeight:"normal",fontSize:e.fontSize},[`${n}-body`]:Object.assign({padding:d,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,E.dF)()),[`${n}-grid`]:_(e),[`${n}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${t}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${n}-actions`]:k(e),[`${n}-meta`]:Z(e)}),[`${n}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${i}`,[`${n}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${n}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:a}},[`${n}-contain-grid`]:{[`${n}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${n}-loading) ${n}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${n}-contain-tabs`]:{[`> ${n}-head`]:{[`${n}-head-title, ${n}-extra`]:{paddingTop:r}}},[`${n}-type-inner`]:ee(e),[`${n}-loading`]:X(e),[`${n}-rtl`]:{direction:"rtl"}}},te=e=>{const{componentCls:t,cardPaddingSM:n,headerHeightSM:a,headerFontSizeSM:r}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:a,padding:`0 ${n}px`,fontSize:r,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:n}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{minHeight:a,paddingTop:0,display:"flex",alignItems:"center"}}}}};var K=(0,H.Z)("Card",e=>{const t=(0,G.TS)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[pe(t),te(t)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+e.padding*2,headerHeightSM:e.fontSize*e.lineHeight+e.paddingXS*2,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText})),U=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};function ne(e){return e.map((t,n)=>s.createElement("li",{style:{width:`${100/e.length}%`},key:`action-${n}`},s.createElement("span",null,t)))}var ae=s.forwardRef((e,t)=>{const{prefixCls:n,className:a,rootClassName:r,style:i,extra:o,headStyle:d={},bodyStyle:g={},title:b,loading:f,bordered:p=!0,size:y,type:u,cover:v,actions:C,tabList:O,children:x,activeTabKey:z,defaultActiveTabKey:B,tabBarExtraContent:h,hoverable:$,tabProps:M={}}=e,P=U(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:ie,direction:W,card:w}=s.useContext(R.E_),oe=T=>{var j;(j=e.onTabChange)===null||j===void 0||j.call(e,T)},le=s.useMemo(()=>{let T=!1;return s.Children.forEach(x,j=>{j&&j.type&&j.type===N&&(T=!0)}),T},[x]),m=ie("card",n),[se,D]=K(m),L=s.createElement(ce.Z,{loading:!0,active:!0,paragraph:{rows:4},title:!1},x),$e=z!==void 0,xe=Object.assign(Object.assign({},M),{[$e?"activeKey":"defaultActiveKey"]:$e?z:B,tabBarExtraContent:h});let ye;const A=(0,q.Z)(y),Se=!A||A==="default"?"large":A,ue=O?s.createElement(F.Z,Object.assign({size:Se},xe,{className:`${m}-head-tabs`,onChange:oe,items:O.map(T=>{var{tab:j}=T,we=U(T,["tab"]);return Object.assign({label:j},we)})})):null;(b||o||ue)&&(ye=s.createElement("div",{className:`${m}-head`,style:d},s.createElement("div",{className:`${m}-head-wrapper`},b&&s.createElement("div",{className:`${m}-head-title`},b),o&&s.createElement("div",{className:`${m}-extra`},o)),ue));const ve=v?s.createElement("div",{className:`${m}-cover`},v):null,Ce=s.createElement("div",{className:`${m}-body`,style:g},f?L:x),Oe=C&&C.length?s.createElement("ul",{className:`${m}-actions`},ne(C)):null,je=(0,l.Z)(P,["onTabChange"]),Ee=S()(m,w==null?void 0:w.className,{[`${m}-loading`]:f,[`${m}-bordered`]:p,[`${m}-hoverable`]:$,[`${m}-contain-grid`]:le,[`${m}-contain-tabs`]:O&&O.length,[`${m}-${A}`]:A,[`${m}-type-${u}`]:!!u,[`${m}-rtl`]:W==="rtl"},a,r,D),ze=Object.assign(Object.assign({},w==null?void 0:w.style),i);return se(s.createElement("div",Object.assign({ref:t},je,{className:Ee,style:ze}),ye,ve,Ce,Oe))}),re=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},V=e=>{const{prefixCls:t,className:n,avatar:a,title:r,description:i}=e,o=re(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:d}=s.useContext(R.E_),g=d("card",t),b=S()(`${g}-meta`,n),f=a?s.createElement("div",{className:`${g}-meta-avatar`},a):null,p=r?s.createElement("div",{className:`${g}-meta-title`},r):null,y=i?s.createElement("div",{className:`${g}-meta-description`},i):null,u=p||y?s.createElement("div",{className:`${g}-meta-detail`},p,y):null;return s.createElement("div",Object.assign({},o,{className:b}),f,u)};const I=ae;I.Grid=N,I.Meta=V;var J=I},66828:function(he,Q,c){c.d(Q,{Z:function(){return e}});var Y=c(94184),S=c.n(Y),l=c(67294),s=c(74443),R=c(53124),q=c(98675),F=l.createContext({}),me=t=>{let{children:n}=t;return n};function N(t){return t!=null}var H=t=>{const{itemPrefixCls:n,component:a,span:r,className:i,style:o,labelStyle:d,contentStyle:g,bordered:b,label:f,content:p,colon:y}=t,u=a;return b?l.createElement(u,{className:S()({[`${n}-item-label`]:N(f),[`${n}-item-content`]:N(p)},i),style:o,colSpan:r},N(f)&&l.createElement("span",{style:d},f),N(p)&&l.createElement("span",{style:g},p)):l.createElement(u,{className:S()(`${n}-item`,i),style:o,colSpan:r},l.createElement("div",{className:`${n}-item-container`},(f||f===0)&&l.createElement("span",{className:S()(`${n}-item-label`,{[`${n}-item-no-colon`]:!y}),style:d},f),(p||p===0)&&l.createElement("span",{className:S()(`${n}-item-content`),style:g},p)))};function G(t,n,a){let{colon:r,prefixCls:i,bordered:o}=n,{component:d,type:g,showLabel:b,showContent:f,labelStyle:p,contentStyle:y}=a;return t.map((u,v)=>{let{label:C,children:O,prefixCls:x=i,className:z,style:B,labelStyle:h,contentStyle:$,span:M=1,key:P}=u;return typeof d=="string"?l.createElement(H,{key:`${g}-${P||v}`,className:z,style:B,labelStyle:Object.assign(Object.assign({},p),h),contentStyle:Object.assign(Object.assign({},y),$),span:M,colon:r,component:d,itemPrefixCls:x,bordered:o,label:b?C:null,content:f?O:null}):[l.createElement(H,{key:`label-${P||v}`,className:z,style:Object.assign(Object.assign(Object.assign({},p),B),h),span:1,colon:r,component:d[0],itemPrefixCls:x,bordered:o,label:C}),l.createElement(H,{key:`content-${P||v}`,className:z,style:Object.assign(Object.assign(Object.assign({},y),B),$),span:M*2-1,component:d[1],itemPrefixCls:x,bordered:o,content:O})]})}var _=t=>{const n=l.useContext(F),{prefixCls:a,vertical:r,row:i,index:o,bordered:d}=t;return r?l.createElement(l.Fragment,null,l.createElement("tr",{key:`label-${o}`,className:`${a}-row`},G(i,t,Object.assign({component:"th",type:"label",showLabel:!0},n))),l.createElement("tr",{key:`content-${o}`,className:`${a}-row`},G(i,t,Object.assign({component:"td",type:"content",showContent:!0},n)))):l.createElement("tr",{key:o,className:`${a}-row`},G(i,t,Object.assign({component:d?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))},k=c(50344);function Z(t,n,a){let r=t;return(a===void 0||a>n)&&(r=Object.assign(Object.assign({},t),{span:n})),r}const ee=t=>(0,k.Z)(t).map(n=>n==null?void 0:n.props);function X(t,n){const a=[];let r=[],i=n;return t.filter(o=>o).forEach((o,d)=>{const g=o==null?void 0:o.span,b=g||1;if(d===t.length-1){r.push(Z(o,i,g)),a.push(r);return}b<i?(i-=b,r.push(o)):(r.push(Z(o,i,b)),a.push(r),i=n,r=[])}),a}var te=(t,n,a)=>(0,l.useMemo)(()=>Array.isArray(n)?X(n,t):X(ee(a),t),[n,a,t]),K=c(14747),U=c(67968),ne=c(45503);const be=t=>{const{componentCls:n,labelBg:a}=t;return{[`&${n}-bordered`]:{[`${n}-view`]:{border:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${n}-item-label, ${n}-item-content`]:{padding:`${t.padding}px ${t.paddingLG}px`,borderInlineEnd:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${n}-item-label`]:{color:t.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}},[`${n}-row`]:{borderBottom:`${t.lineWidth}px ${t.lineType} ${t.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${n}-middle`]:{[`${n}-item-label, ${n}-item-content`]:{padding:`${t.paddingSM}px ${t.paddingLG}px`}},[`&${n}-small`]:{[`${n}-item-label, ${n}-item-content`]:{padding:`${t.paddingXS}px ${t.padding}px`}}}}},ae=t=>{const{componentCls:n,extraColor:a,itemPaddingBottom:r,colonMarginRight:i,colonMarginLeft:o,titleMarginBottom:d}=t;return{[n]:Object.assign(Object.assign(Object.assign({},(0,K.Wf)(t)),be(t)),{["&-rtl"]:{direction:"rtl"},[`${n}-header`]:{display:"flex",alignItems:"center",marginBottom:d},[`${n}-title`]:Object.assign(Object.assign({},K.vS),{flex:"auto",color:t.colorText,fontWeight:t.fontWeightStrong,fontSize:t.fontSizeLG,lineHeight:t.lineHeightLG}),[`${n}-extra`]:{marginInlineStart:"auto",color:a,fontSize:t.fontSize},[`${n}-view`]:{width:"100%",borderRadius:t.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${n}-row`]:{"> th, > td":{paddingBottom:r},"&:last-child":{borderBottom:"none"}},[`${n}-item-label`]:{color:t.colorTextTertiary,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${o}px ${i}px`},[`&${n}-item-no-colon::after`]:{content:'""'}},[`${n}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${n}-item-content`]:{display:"table-cell",flex:1,color:t.colorText,fontSize:t.fontSize,lineHeight:t.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${n}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${n}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${n}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${n}-row`]:{"> th, > td":{paddingBottom:t.paddingSM}}},"&-small":{[`${n}-row`]:{"> th, > td":{paddingBottom:t.paddingXS}}}})}};var re=(0,U.Z)("Descriptions",t=>{const n=(0,ne.TS)(t,{});return[ae(n)]},t=>({labelBg:t.colorFillAlter,titleMarginBottom:t.fontSizeSM*t.lineHeightSM,itemPaddingBottom:t.padding,colonMarginRight:t.marginXS,colonMarginLeft:t.marginXXS/2,extraColor:t.colorText})),fe=function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(a[r[i]]=t[r[i]]);return a};const V={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function I(t,n){if(typeof t=="number")return t;if(typeof t=="object")for(let a=0;a<s.c.length;a++){const r=s.c[a];if(n[r]&&t[r]!==void 0)return t[r]||V[r]}return 3}const J=t=>{const{prefixCls:n,title:a,extra:r,column:i=V,colon:o=!0,bordered:d,layout:g,children:b,className:f,rootClassName:p,style:y,size:u,labelStyle:v,contentStyle:C,items:O}=t,x=fe(t,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:z,direction:B,descriptions:h}=l.useContext(R.E_),$=z("descriptions",n),[M,P]=l.useState({}),ie=I(i,M),W=(0,q.Z)(u),w=te(ie,O,b),[oe,le]=re($),m=(0,s.Z)();l.useEffect(()=>{const D=m.subscribe(L=>{typeof i=="object"&&P(L)});return()=>{m.unsubscribe(D)}},[]);const se=l.useMemo(()=>({labelStyle:v,contentStyle:C}),[v,C]);return oe(l.createElement(F.Provider,{value:se},l.createElement("div",Object.assign({className:S()($,h==null?void 0:h.className,{[`${$}-${W}`]:W&&W!=="default",[`${$}-bordered`]:!!d,[`${$}-rtl`]:B==="rtl"},f,p,le),style:Object.assign(Object.assign({},h==null?void 0:h.style),y)},x),(a||r)&&l.createElement("div",{className:`${$}-header`},a&&l.createElement("div",{className:`${$}-title`},a),r&&l.createElement("div",{className:`${$}-extra`},r)),l.createElement("div",{className:`${$}-view`},l.createElement("table",null,l.createElement("tbody",null,w.map((D,L)=>l.createElement(_,{key:L,index:L,colon:o,prefixCls:$,vertical:g==="vertical",bordered:d,row:D}))))))))};J.Item=me;var e=J}}]);
