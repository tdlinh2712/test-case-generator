(this["webpackJsonptest-case-generator"]=this["webpackJsonptest-case-generator"]||[]).push([[0],{202:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"generateTestCases",(function(){return _})),a.d(n,"resetState",(function(){return F})),a.d(n,"createAttempts",(function(){return z})),a.d(n,"fetchResults",(function(){return H}));var r=a(0),c=a.n(r),s=a(15),i=a.n(s),o=a(32),l=a(97),d=a(130),j=a(8),h=a(18),u=a(141),b=a(257),p=a(260),O=a(258),x=a(205),f=a(259),m=a(57),g=a(249),v=a(206),y=a(207),S=a(208),C=a(33),w=a.n(C),T=a(2),E=function(){return Object(T.jsxs)("div",{children:[Object(T.jsxs)(g.a,{children:[Object(T.jsx)(x.a,{color:"textPrimary",variant:"h6",children:"Problem"})," ","This assignment involves extension to the single source-single destination shortest path problem. ",Object(T.jsx)("br",{}),"The input is constructed as follows",Object(T.jsxs)(v.a,{dense:"true",children:[Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Two integers: nVertices and nEdges, the number of vertices and edges in the graph."})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"nVertices triples consisting of the label and the x\u2010 and y\u2010coordinates of each vertex. (An int followed by two doubles)"})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})}),Object(T.jsx)(f.a,{fontStyle:"italic",children:"nEdges triples consisting of the labels of the start and end vertices of each edge, along with its weight. Note: the weight associated with an edge will be greater than or equal to the Euclidean distance between its start and end vertices as determined by their coordinates. (Two ints followed by a double)"})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})}),Object(T.jsx)(f.a,{fontStyle:"italic",children:"Two labels, the indicating the start and goal vertices for which the paths are required. (Two ints)"})]})]}),"Your C++ program should:",Object(T.jsxs)(v.a,{dense:"true",children:[Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsxs)(f.a,{fontStyle:"italic",children:["Read an undirected graph from the input to ",Object(T.jsx)("b",{children:"stdin"}),"."]})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Find the shortest path between the start and goal vertices specified in the file."})," "]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Print out the vertices on the path, in order from start to goal."})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Print out the length of this path."})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Find the second shortest path between the start and goal vertices specified in the input."})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Print out the vertices on the path, in order from start to goal."})]}),Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:Object(T.jsx)(w.a,{})})," ",Object(T.jsx)(f.a,{fontStyle:"italic",children:"Print out the length of this path. "})]})]})]}),Object(T.jsxs)(g.a,{children:[Object(T.jsxs)(f.a,{children:[Object(T.jsx)(x.a,{color:"textPrimary",variant:"h6",gutterBottom:!0,children:"Sample test case input"})," ",Object(T.jsx)(m.a,{variant:"outlined",color:"primary",href:"https://storage.googleapis.com/test-case-generator/sample_input.txt",target:"_blank",style:{textTransform:"lowercase"},children:"sample_test_case_input.txt"})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(x.a,{color:"textPrimary",variant:"h6",gutterBottom:!0,children:"Sample test case output"}),Object(T.jsxs)(f.a,{style:{borderColor:"rgba(63, 81, 181, 0.5)",color:"#3f51b5",fontWeight:"500",fontSize:"0.875rem",lineHeight:1.75},px:2,pt:1,pb:1,border:.1,borderRadius:3,width:1/3,children:[Object(T.jsx)(x.a,{display:"block",color:"primary",variant:"p",gutterBottom:!0,children:"Shortest path from 2 to 13:"}),Object(T.jsxs)(x.a,{display:"block",color:"primary",variant:"p",gutterBottom:!0,children:["Vertices of path: 2--\x3e13"," "]}),Object(T.jsxs)(x.a,{display:"block",color:"primary",variant:"p",gutterBottom:!0,children:["Length of path: 85"," "]}),Object(T.jsxs)(x.a,{display:"block",color:"primary",variant:"p",gutterBottom:!0,children:[Object(T.jsx)("br",{}),"Second shortest path from 2 to 13:"]}),Object(T.jsxs)(x.a,{display:"block",color:"primary",variant:"p",gutterBottom:!0,children:["Vertices of path: 2--\x3e17--\x3e20--\x3e13"," "]}),Object(T.jsxs)(x.a,{display:"block",color:"primary",variant:"p",gutterBottom:!0,children:["Length of path: 134"," "]})]})]})]})]})},k=a(254),A=a(24),P=a.n(A),B=a(49),R=a(71),D=a.n(R),I="CREATE_ATTEMPTS",N="https://34.70.3.255:9090",_=function(){return function(){var e=Object(B.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("".concat(N,"/testCases"));case 2:a=e.sent,t({type:"GENERATE_TESTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){return function(e){e({type:"RESET_STATE",payload:null})}},z=function(e,t){return function(){var a=Object(B.a)(P.a.mark((function a(n){var r,c,s;return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(a.prev=0,n({type:I,payload:null}),r="".concat(N,"/attempts?testCaseTypes="),c=0;c<t.length;c++)r+=t[c],r+=c<t.length-1?",":"";return a.next=6,D.a.post(r,{code:e});case 6:s=a.sent,n({type:I,payload:s.data}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},H=function(e){var t=e.attemptId,a=e.testCases;return function(){var e=Object(B.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.map(function(){var e=Object(B.a)(P.a.mark((function e(a,r){var c,s,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.testCaseId,e.next=3,D.a.put("".concat(N,"/attempts/").concat(t,"/").concat(c));case 3:return s=e.sent,n({type:"FETCH_RESULTS",payload:{index:r,testCaseId:s.data.testCaseId,verdict:s.data.verdict}}),e.next=7,D.a.get("".concat(N,"/attempts/").concat(t,"/").concat(c));case 7:return i=e.sent,n({type:"FETCH_TEST_DETAIL",payload:i.data}),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},L=a(42),V=a(135),W=a.n(V),q=(a(199),a(200),function(e){var t=e.code,a=e.setSourceCode,n=e.readCodeOnly;return Object(T.jsx)(W.a,{placeholder:"Enter your code here",height:"360px",width:"500px",mode:"c_cpp",theme:"monokai",name:"blah2",readOnly:n,fontSize:14,showPrintMargin:!1,onChange:a,showGutter:!0,highlightActiveLine:!0,value:t,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}),M=a(99),G=a(29),U=a(209),J=a(210),Y=a(147),K=a(252),Q=Object(G.a)((function(){return{container:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"20px"}}})),X=Object(o.b)(null,n)((function(e){var t=e.createAttempts,a=e.readCodeOnly,n=Q(),r=c.a.useState({shortestPathOnly:!1,bothShortestAndSecondShortestPath:!1,edgeCase:!1}),s=Object(j.a)(r,2),i=s[0],o=s[1],l=c.a.useState('#include <iostream>\nusing namespace std;\nint main(){\n\tcout<< "Hello World";\n\treturn 0; \n}'),d=Object(j.a)(l,2),u=d[0],b=d[1],p=function(e){o(Object(h.a)(Object(h.a)({},i),{},Object(L.a)({},e.target.value,e.target.checked)))},O=i.shortestPathOnly,f=i.bothShortestAndSecondShortestPath,v=i.edgeCase,y=[O,f,v].filter((function(e){return e})).length>0,S=c.a.useRef(null),C=function(){var e=Object(B.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),(a=new FileReader).onload=function(){var e=Object(B.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.result,b(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.target.files&&t.target.files[0]&&a.readAsText(t.target.files[0]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsxs)("div",{style:{display:"flex"},children:[Object(T.jsxs)("div",{style:{flexChild:1,margin:5},children:[Object(T.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:"Code editor"}),Object(T.jsx)(M.a,{children:Object(T.jsx)(q,{code:u,setSourceCode:b,readCodeOnly:a})})]}),Object(T.jsxs)("div",{style:{flexChild:1,margin:5},children:[Object(T.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:"Test Options"}),Object(T.jsx)(M.a,{elevation:!1,children:Object(T.jsxs)(K.a,{required:!0,children:[Object(T.jsx)(U.a,{component:"legend",error:!y,children:"Choose at least one*"}),Object(T.jsx)(J.a,{control:Object(T.jsx)(Y.a,{checked:O,onChange:p,color:"primary"}),label:"Shortest Path Only",value:"shortestPathOnly"}),Object(T.jsx)(J.a,{control:Object(T.jsx)(Y.a,{checked:f,onChange:p,color:"primary"}),value:"bothShortestAndSecondShortestPath",label:"Both Shortest And Second Shortest Path"}),Object(T.jsx)(J.a,{control:Object(T.jsx)(Y.a,{checked:v,onChange:p,color:"primary"}),label:"Edge Case",value:"edgeCase"})]})})]})]}),Object(T.jsxs)(g.a,{className:n.container,children:[Object(T.jsx)("input",{style:{display:"none"},ref:S,type:"file",onChange:function(e){return C(e)}}),Object(T.jsx)("label",{htmlFor:"outlined-button-file",children:Object(T.jsx)(m.a,{variant:"contained",onClick:function(){S.current.click()},children:"Upload file"})}),Object(T.jsx)(m.a,{disabled:!(y&&u.length>0)||a,variant:"contained",color:"primary",onClick:function(){if(a);else{var e=[];for(var n in i)i[n]&&e.push(n);t(u,e)}},children:"Run tests"})]})]})})),Z=a(136),$=a(253),ee=a(13),te=function(e){return Object(T.jsxs)(f.a,{display:"flex",alignItems:"center",style:{marginTop:"9px"},children:[Object(T.jsx)(f.a,{width:"100%",mr:1,children:Object(T.jsx)($.a,Object(h.a)({variant:"determinate"},e))}),Object(T.jsx)(f.a,{minWidth:35,children:Object(T.jsx)(x.a,{variant:"body2",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})},ae={bothShortestAndSecondShortestPath:"Both Shortest And Second Shortest Path",edgeCase:"Edge Case",shortestPathOnly:"Shortest Path Only"},ne=Object(G.a)((function(e){var t=function(e){return Object(ee.i)(e,.5)};return{root:{"& .test-details--header":{backgroundColor:"rgba(0, 0, 0, 0)"},"& .row-theme--Running":{color:e.palette.info.main,"&:hover":{color:t(e.palette.info.main),cursor:"auto"}},"& .row-theme--Passed":{color:"#008450","&:hover":{color:t("#008450"),cursor:"auto"}},"& .row-theme--Failed":{color:"#B81D13","&:hover":{color:t("#B81D13"),cursor:"auto"}}}}})),re=Object(o.b)(null,n)((function(e){var t=e.testCases,a=e.attemptId,n=e.fetchResults,s=e.testDetails,i=e.setSelectedTest,o=e.readCodeOnly,l=[{field:"No.",width:75,sortable:!1},{field:"Test Type",width:250},{field:"Size",width:125,headerName:"Input Size"},{field:"Verdict",headerName:"Verdict",headerClassName:"test-details--header",width:100},{field:"",headerName:"Details",headerClassName:"test-details--header",width:100,sortable:!1,renderCell:function(e){return Object(T.jsx)("p",{onClick:function(){i(e.row)},style:{textDecoration:"underline",cursor:"pointer"},children:"Details"})}}],d=ne();Object(r.useEffect)((function(){a&&0==s.length&&n({attemptId:a,testCases:t})}),[a]);var j=t?100*t.filter((function(e){return"Running"!=e.verdict})).length/t.length:0;return Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsxs)(k.a,{item:!0,xs:!0,children:[Object(T.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:"Test Cases"}),Object(T.jsx)("div",{style:{height:350,width:"100%"},className:d.root,children:Object(T.jsx)(Z.a,{loading:o&&!t,rowHeight:25,headerHeight:50,columns:l,rows:t?t.map((function(e,t){var a=e.type,n=e.size,r=e.verdict;return{"No.":t+1,id:e.testCaseId,"Test Type":ae[a],Size:n,Verdict:r,"Test Details":""}})):[],getRowClassName:function(e){return"row-theme--".concat(e.getValue("Verdict"))},onRowSelected:function(e){return i(e.data)}})})]}),(o||100==j)&&Object(T.jsx)(te,{value:j})]})})),ce=a(214),se=Object(G.a)((function(e){return{box:{border:"1px solid rgba(63, 81, 181, 0.5)",borderRadius:"3px",padding:"10px",marginTop:"10px",marginBottom:"10px",color:"#3f51b5",fontWeight:"500",fontSize:"0.875rem",lineHeight:1.75,maxHeight:"320px",whiteSpace:"pre-line"}}})),ie=Object(o.b)((function(e){return{testDetails:e.testDetails}}),null)((function(e){var t=e.test,a=e.testDetails,n=se(),s=Object(r.useState)(null),i=Object(j.a)(s,2),o=i[0],l=i[1];Object(r.useEffect)((function(){l(d(t,a))}),[a,t]);var d=function(e,t){if(null==e)return null;if(null==t)return null;var a=t.filter((function(t){return t.testCaseId==e.id}));return 0==a.length?null:a[0]};return Object(T.jsx)(c.a.Fragment,{children:t?Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:"Logs"}),Object(T.jsxs)(k.a,{container:!0,spacing:3,children:[Object(T.jsxs)(k.a,{item:!0,xs:6,children:[Object(T.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Test Result"}),Object(T.jsx)(f.a,{component:"span",display:"block",className:n.box,children:null==o?Object(T.jsx)(ce.a,{size:15}):o.verdict}),Object(T.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Input"}),Object(T.jsx)(f.a,{display:"block",overflow:"auto",className:n.box,children:null==o?Object(T.jsx)(ce.a,{size:15}):o.input})]}),Object(T.jsxs)(k.a,{item:!0,xs:6,children:[Object(T.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Output"}),Object(T.jsx)(f.a,{display:"block",overflow:"auto",className:n.box,children:null==o?Object(T.jsx)(ce.a,{size:15}):o.stdout}),Object(T.jsx)(x.a,{variant:"subtitle1",gutterBottom:!0,children:"Expected Output"}),Object(T.jsx)(f.a,{display:"block",overflow:"visible",className:n.box,children:null==o?Object(T.jsx)(ce.a,{size:15}):o.expectedOutput})]})]})]}):Object(T.jsx)("div",{})})})),oe={generateTests:_},le=Object(o.b)((function(e){var t=e.file,a=e.testCases,n=e.attemptId,r=e.readCodeOnly;return{file:t,testCases:a,attemptId:n,testDetails:e.testDetails,readCodeOnly:r}}),oe)((function(e){var t=e.testCases,a=e.attemptId,n=e.testDetails,c=e.readCodeOnly,s=Object(r.useState)(null),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(T.jsxs)(k.a,{container:!0,spacing:3,children:[Object(T.jsx)(k.a,{item:!0,xs:6,children:Object(T.jsx)(re,{attemptId:a,testCases:t,testDetails:n,setSelectedTest:l,readCodeOnly:c})}),Object(T.jsx)(k.a,{item:!0,xs:6,children:Object(T.jsx)(X,{readCodeOnly:c})}),Object(T.jsx)(k.a,{item:!0,xs:12,children:Object(T.jsx)(ie,{test:o})})]})})),de=a(138);function je(e){var t=e.children,a=e.value,n=e.index,r=Object(u.a)(e,["children","value","index"]);return Object(T.jsx)("div",Object(h.a)(Object(h.a)({role:"tabpanel",hidden:a!==n,id:"wrapped-tabpanel-".concat(n),"aria-labelledby":"wrapped-tab-".concat(n)},r),{},{children:a===n&&Object(T.jsx)(f.a,{p:2,children:Object(T.jsx)(x.a,{children:t})})}))}function he(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ue=Object(o.b)(null,n)((function(){var e=c.a.useState(1),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(T.jsxs)(c.a.Fragment,{children:[Object(T.jsxs)(de.a,{children:[Object(T.jsx)("meta",{charSet:"utf-8"}),Object(T.jsx)("title",{children:"Automated Test Tool"})]}),Object(T.jsx)(x.a,{variant:"h4",style:{padding:"10px"},color:"primary",children:"Automated Test Tool"}),Object(T.jsx)(b.a,{position:"static",children:Object(T.jsxs)(p.a,{value:a,onChange:function(e,t){n(t)},centered:!0,children:[Object(T.jsx)(O.a,Object(h.a)({label:"Problem"},he(0))),Object(T.jsx)(O.a,Object(h.a)({label:"Test"},he(1)))]})}),Object(T.jsx)(je,{value:a,index:0,children:Object(T.jsx)(E,{})}),Object(T.jsx)(je,{value:a,index:1,children:Object(T.jsx)(le,{})})]})})),be=a(19),pe={testCases:null,attemptId:null,testDetails:[],readCodeOnly:!1};var Oe=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_STATE":return pe;case"GENERATE_TESTS":return e;case"CREATE_ATTEMPTS":if(t.payload){var a=t.payload,n=a.testCases,r=a.attemptId,c=Object(h.a)(Object(h.a)({},e),{},{attemptId:r,testCases:n,testDetails:[],readCodeOnly:!0});return c}var s={readCodeOnly:!0};return s;case"FETCH_RESULTS":var i=t.payload,o=i.index,l=i.verdict,d=Object(h.a)(Object(h.a)({},e),{},{testCases:e.testCases?e.testCases.map((function(e,t){return t==o?Object(h.a)(Object(h.a)({},e),{},{verdict:l}):e})):[]}),j=d.testCases.filter((function(e){return"Running"==e.verdict}));return 0==j.length?d.readCodeOnly=!1:d.readCodeOnly=!0,d;case"FETCH_TEST_DETAIL":return Object(h.a)(Object(h.a)({},e),{},{testDetails:[].concat(Object(be.a)(e.testDetails),[t.payload])});default:return e}}),{},Object(l.a)(d.a));i.a.render(Object(T.jsx)(o.a,{store:Oe,children:Object(T.jsx)(ue,{})}),document.querySelector("#root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.0dc3ab43.chunk.js.map