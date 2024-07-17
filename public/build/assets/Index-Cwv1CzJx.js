import{B as _,o,c as u,T as S,j as k,f as l,a as n,u as a,w as $,F as b,Z as q,b as e,d as x,e as C,q as w,C as I,A as P,k as A,g as E,D as N,t as h,E as T}from"./app-Bd-scPGz.js";import{_ as j}from"./AuthenticatedLayout-Dqnqof6N.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as v}from"./InputLabel-BTjf6PCl.js";const M={};function L(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-pencil"})}const R=p(M,[["render",L]]),z={};function O(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-trash"})}const Y=p(z,[["render",O]]),W={};function Z(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-eye"})}const G=p(W,[["render",Z]]),H={};function J(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-download"})}const K=p(H,[["render",J]]),Q={};function X(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-file-upload"})}const ee=p(Q,[["render",X]]),te={};function se(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-plus"})}const oe=p(te,[["render",se]]),ce={};function ne(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-filter"})}const ae=p(ce,[["render",ne]]),re={};function ie(r,i){const s=_("font-awesome-icon");return o(),u(s,{icon:"fa-solid fa-list-dots"})}const de=p(re,[["render",ie]]),le=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Students ",-1),_e={class:"py-12"},ue={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},pe={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},me={class:"flex justify-end space-x-2 p-2"},fe={href:"/students/create",type:"button",class:"py-2 px-2 bg-blue-500 text-white rounded text-sm"},he={href:"/students/upload",type:"button",class:"py-2 px-2 bg-lime-500 text-white rounded text-sm"},xe={class:"p-2"},we={class:"flex mb-4"},ye={class:"w-1/2"},ge={class:"flex mb-4 space-x-4"},be={class:"w-1/3"},ve=e("option",{value:"",hidden:""}," Please Select Course ",-1),Se=["value"],ke={class:"w-1/3"},$e=e("option",{value:"",hidden:""}," Please Select Semester ",-1),Ce=e("option",{value:"first"}," First Semester ",-1),Ie=e("option",{value:"second"}," Second Semester ",-1),Pe=[$e,Ce,Ie],Ae={type:"submit",class:"py-2 px-2 bg-blue-500 text-white rounded"},Ue={class:"flex justify-start space-x-2 p-2"},De={key:0},Fe={class:"fixed inset-0 flex items-center justify-center z-50"},Ve={class:"bg-white rounded-lg p-8"},Be=e("h2",{class:"text-xl font-semibold mb-4"}," Download Certificate ",-1),qe={class:"mb-4"},Ee=e("label",{for:"search",value:"Search"},null,-1),Ne={class:"flex justify-end"},Te=e("button",{type:"submit",class:"py-2 px-4 bg-indigo-500 text-white rounded text-sm"}," Download ",-1),je=e("div",{class:"fixed inset-0 bg-black opacity-50"},null,-1),Me={class:"w-full divide-y divide-gray-200"},Le=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm ont-medium text-gray-500 uppercase tracking-wider"}," Seq. No. "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," Student ID "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," Name "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," Course "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," NSTP Type "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," School Year "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," Status "),e("th",{scope:"col",class:"px-6 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"}," Actions ")])],-1),Re={class:"bg-white divide-y divide-gray-200"},ze={class:"px-2 py-1 whitespace-nowrap"},Oe=["value"],Ye={class:"px-2 py-1 whitespace-nowrap text-xs"},We={class:"px-2 py-1 whitespace-nowrap text-xs"},Ze={class:"px-2 py-1 whitespace-nowrap text-sm"},Ge={class:"px-2 py-1 whitespace-nowrap text-sm"},He={class:"px-2 py-1 whitespace-nowrap text-xs"},Je={class:"px-2 py-1 whitespace-nowrap text-xs"},Ke={class:"px-2 py-1 whitespace-nowrap text-xs"},Qe={key:0,class:"text-green-500"},Xe={key:1,class:"text-red-500"},et={class:"px-2 py-1 whitespace-nowrap text-sm space-x-2"},tt=["href"],st=["href"],ot=["href"],it={__name:"Index",props:{courses:{type:Array,default:[]},students:{type:Array,default:[]},graduationYears:{type:Array,default:[]}},setup(r){const i=r,s=S({student_ids:[],certificate_date:null}),U=()=>{if(s.student_ids.length===0){alert("Please select students to download certificate.");return}y.value=!0},y=k(!1),g=k(!1),D=async()=>{try{const m=await axios.post(route("certificates.download"),s.data(),{responseType:"blob"}),c=window.URL.createObjectURL(new Blob([m.data])),f=document.createElement("a");f.href=c,f.setAttribute("download","certificates.zip"),document.body.appendChild(f),f.click(),document.body.removeChild(f),s.reset(),y.value=!1}catch(m){console.error("Error downloading certificates:",m)}},F=()=>{g.value?s.student_ids=[]:s.student_ids=i.students.map(m=>m.id),g.value=!g.value},d=S({search:"",course_id:"",semester:""}),V=()=>{const c=`students?${new URLSearchParams({search:d.search,course_id:d.course_id,semester:d.semester}).toString()}`;N.visit(c,{preserveScroll:!0,preserveState:!0,replace:!0})};return(m,c)=>{const f=_("InputError");return o(),l(b,null,[n(a(q),{title:"Students"}),n(j,null,{header:$(()=>[le]),default:$(()=>[e("div",_e,[e("div",ue,[e("div",pe,[e("div",me,[e("a",fe,[n(oe,{class:"h-4 w-5"}),x(" Add Student")]),e("a",he,[n(ee,{class:"h-4 w-5"}),x(" Batch Upload")])]),e("div",xe,[e("form",{onSubmit:C(V,["prevent"]),method:"POST"},[e("div",we,[e("div",ye,[n(v,{for:"search",value:"Search"}),w(e("input",{id:"search",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",type:"text",name:"search",placeholder:"Search","onUpdate:modelValue":c[0]||(c[0]=t=>a(d).search=t)},null,512),[[I,a(d).search]])])]),e("div",ge,[e("div",be,[n(v,{for:"course",value:"Course/Program"}),w(e("select",{id:"course",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",name:"course_id","onUpdate:modelValue":c[1]||(c[1]=t=>a(d).course_id=t),required:""},[ve,(o(!0),l(b,null,A(r.courses,t=>(o(),l("option",{value:t.id,key:t.id},h(t.name),9,Se))),128))],512),[[P,a(d).course_id]])]),e("div",ke,[n(v,{for:"semester",value:"Semester"}),w(e("select",{id:"semester",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",name:"semester",value:"","onUpdate:modelValue":c[2]||(c[2]=t=>a(d).semester=t)},Pe,512),[[P,a(d).semester]])])]),e("button",Ae,[x(" Filter "),n(ae,{class:"h-4 w-4"})])],32)]),e("div",Ue,[e("button",{onClick:F,type:"button",class:"py-2 px-2 bg-gray-500 text-white rounded text-sm"},[n(de,{class:"h-4 w-4"}),x(" Select all ")]),e("a",{href:"#",onClick:U,id:"downloadCertificateButton",class:"py-2 px-2 bg-indigo-500 text-white rounded text-sm"},[n(K,{class:"h-4 w-4"}),x(" Download Certificate ")])]),y.value?(o(),l("div",De,[e("div",Fe,[e("div",Ve,[Be,e("form",{onSubmit:C(D,["prevent"])},[e("div",qe,[Ee,w(e("input",{id:"certificate_date","onUpdate:modelValue":c[3]||(c[3]=t=>a(s).certificate_date=t),class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",type:"date",required:""},null,512),[[I,a(s).certificate_date]]),n(f,{class:"mt-2",message:a(s).errors.certificate_date},null,8,["message"])]),e("div",Ne,[e("button",{type:"button",class:"py-2 px-4 bg-gray-500 text-white rounded text-sm mr-2",onClick:c[4]||(c[4]=t=>y.value=!1)}," Cancel "),Te])],32)])]),je])):E("",!0),e("table",Me,[Le,e("tbody",Re,[(o(!0),l(b,null,A(r.students,t=>(o(),l("tr",{key:t.id},[e("td",ze,[w((o(),l("input",{key:t.id,type:"checkbox",class:"form-checkbox h-4 w-4 text-blue-500 rounded","onUpdate:modelValue":c[5]||(c[5]=B=>a(s).student_ids=B),value:t.id},null,8,Oe)),[[T,a(s).student_ids]])]),e("td",Ye,h(t.seq_no),1),e("td",We,h(t.student_id),1),e("td",Ze,h(t.full_name),1),e("td",Ge,h(t.course?t.course.code:""),1),e("td",He,h(t.enrollment_type),1),e("td",Je,h(t.enrollment_year),1),e("td",Ke,[t.status===1?(o(),l("div",Qe," Passed ")):(o(),l("div",Xe," Incomplete "))]),e("td",et,[e("a",{href:`/students/${t.id}`,class:"text-blue-500 hover:text-blue-700"},[n(G,{class:"h-4 w-4"})],8,tt),e("a",{href:`/students/${t.id}/edit`,class:"text-green-500 hover:text-green-700"},[n(R,{class:"h-4 w-4"})],8,st),e("a",{href:`/students/${t.id}/delete`,class:"text-red-400 hover:text-red-600"},[n(Y,{class:"h-4 w-4"})],8,ot)])]))),128))])])])])])]),_:1})],64)}}};export{it as default};
