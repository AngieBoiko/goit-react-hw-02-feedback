(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={statList:"Statistics_statList__1rBBh",statItem:"Statistics_statItem__3vGGd"}},,function(t,e,a){t.exports={btnList:"FeedbackOptions_btnList__bdZ-H",btnItem:"FeedbackOptions_btnItem__15_Jd"}},,,,function(t,e,a){t.exports={title:"Section_title__g4uiA"}},function(t,e,a){t.exports={item:"Notification_item__3I5Pu"}},,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(5),i=a.n(s),o=a(6),r=a(7),d=a(11),l=a(10),b=a(4),u=a.n(b),j=a(0),h=[{id:1,name:"Good"},{id:2,name:"Neutral"},{id:3,name:"Bad"}];function m(t){var e=t.onLeaveFeedback;return Object(j.jsx)("ul",{className:u.a.btnList,children:h.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{type:"button",onClick:e,className:u.a.btnItem,children:t.name})},t.id)}))})}var x=a(2),O=a.n(x);function f(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return c?Object(j.jsxs)("ul",{className:O.a.statList,children:[Object(j.jsxs)("li",{className:O.a.statItem,children:["Good:",e]}),Object(j.jsxs)("li",{className:O.a.statItem,children:["Neutral:",a]}),Object(j.jsxs)("li",{className:O.a.statItem,children:["Bad:",n]}),Object(j.jsxs)("li",{className:O.a.statItem,children:["Total:",c]}),Object(j.jsxs)("li",{className:O.a.statItem,children:["Positive feedback:",s||" ","%"]})]}):Object(j.jsx)(j.Fragment,{})}var v=a(8),g=a.n(v);function k(t){var e=t.title,a=t.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:g.a.title,children:e}),a]})}var p=a(9),_=a.n(p);function N(t){return t.totalFeedbacks?Object(j.jsx)(j.Fragment,{}):Object(j.jsx)("p",{className:_.a.item,children:"No feedback given"})}var F=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.feedbackCounter=function(e){t.setState((function(t){return"good"===e.target.textContent.toLowerCase()?{good:t.good+1}:"neutral"===e.target.textContent.toLowerCase()?{neutral:t.neutral+1}:"bad"===e.target.textContent.toLowerCase()?{bad:t.bad+1}:void 0}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}))},t.positivePercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{title:"Please leave your feedback",children:Object(j.jsx)(m,{onLeaveFeedback:this.feedbackCounter})}),Object(j.jsxs)(k,{title:"Statistics",children:[Object(j.jsx)(N,{totalFeedbacks:this.countTotalFeedback()}),Object(j.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.positivePercentage()})]})]})}}]),a}(n.Component);a(17);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c5a68d5c.chunk.js.map