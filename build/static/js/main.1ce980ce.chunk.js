(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(6),r=n.n(i),a=n(7),c=n(3),l=n(0),d=function(e){var t=e.data;return Object(l.jsxs)("div",{className:"slide",children:[Object(l.jsx)("h3",{children:"Please review your answers:"}),Object(l.jsx)("ul",{children:t.map((function(e,t){return Object(l.jsx)("li",{className:"result",children:"Q #".concat(t+1," - A: ").concat(e.answers[e.answer]||"Not Taken!")},t)}))})]})},o=function(e){var t=e.data,n=e.currentSlide,i=e.updateAnswer,r=Object(s.useState)(t),a=Object(c.a)(r,2),o=a[0];a[1];if(t.length===n)return Object(l.jsx)(d,{data:o});var u=t[n],j=u.answers,h=u.question,b=function(){return Object(l.jsx)("ul",{children:j.map((function(e,t){return Object(l.jsx)("li",{className:"choice ".concat(o[n].answer===t?"selected":""),onClick:function(){i(t)},children:e},t)}))})};return Object(l.jsxs)("div",{className:"slide",children:[Object(l.jsx)("h3",{children:h}),Object(l.jsx)(b,{})]})},u=[{question:"When do you plan on purchasing a new TV?",answers:["Within the month","Within the next six months","Within the year","No current plans"]},{question:"Are you a vegetarian?",answers:["Yes","No"]},{question:"How satisfied are you with your current internet provider?",answers:["Extremely satisfied","Satisfied","Unsatisfied","Extremely Unsatisfied","I do not have an internet provider"]}],j=function(e){var t=e.props,n={width:100/t.slidesCount*t.currentSlide+"%"};return Object(l.jsx)("div",{className:"progress_bar",children:Object(l.jsx)("div",{className:"fill",style:n})})},h=function(e){var t=e.slide,n=e.prevSlide,s=e.disabledNextBtn,i=e.nextSlide;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"arrow arrow_left ".concat(0===t?"inactive":""),onClick:n}),Object(l.jsx)("div",{className:"arrow arrow_right ".concat(s?"inactive":""),onClick:i})]})},b=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(u),d=Object(c.a)(r,2),b=d[0],x=d[1],O=!1;return n!==u.length&&"undefined"!==typeof b[n].answer||(O=!0),Object(l.jsx)("div",{className:"quizz_wrapper",children:Object(l.jsxs)("div",{className:"quizz_container",children:[Object(l.jsx)("h1",{children:"Quizz"}),Object(l.jsxs)("div",{className:"quizz_slides",children:[Object(l.jsx)(o,{data:b,currentSlide:n,updateAnswer:function(e){var t=Object(a.a)(b);t[n].answer=e,x(t)}}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(h,{slide:n,prevSlide:function(){n>0&&i(n-1)},nextSlide:function(){n<u.length&&(0===b[n].answer||b[n].answer)&&i(n+1)},dataLength:u.length,disabledNextBtn:O}),Object(l.jsx)(j,{props:{slidesCount:u.length,currentSlide:n}})]})]})]})})},x=(n(13),function(){return Object(l.jsx)(b,{})});r.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1ce980ce.chunk.js.map