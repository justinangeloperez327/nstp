import{T as _,o as r,f as i,a,u as o,w as l,F as d,Z as p,b as e,e as f,q as g,A as h,k as x,n as b,t as v}from"./app-B6O6sYq6.js";import{_ as y}from"./AuthenticatedLayout-D4MOsGUk.js";import{_ as w,a as S}from"./InputLabel-Bs4jbW8b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Export Graduate ",-1),E={class:"py-12"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Y={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},B={class:"p-6 text-gray-900"},V={class:"flex flex-wrap -mx-3 mb-6"},$={class:"w-full md:w-2/4 px-3 mb-4 md:mb-0"},q=e("option",{value:"",hidden:""}," Please Select School Year ",-1),A=["value"],C={class:"flex items-start justify-start mt-4"},D=["disabled"],j={__name:"Export",props:{graduationYears:{type:Array,required:!0}},setup(c){const s=_({graduation_year:null});function u(){s.post(route("students.export-graduates"),{onStart:()=>{s.processing=!0},onFinish:()=>{s.processing=!1},onSuccess:()=>{alert("Export successful!")}})}return(m,n)=>(r(),i(d,null,[a(o(p),{title:"Students"}),a(y,null,{header:l(()=>[k]),default:l(()=>[e("div",E,[e("div",F,[e("div",Y,[e("div",B,[e("form",{onSubmit:f(u,["prevent"]),method:"POST",class:"mb-20"},[e("div",V,[e("div",$,[a(w,{for:"school_year",value:"School Year"}),g(e("select",{id:"school_year",class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full",name:"school_year",value:"","onUpdate:modelValue":n[0]||(n[0]=t=>o(s).school_year=t)},[q,(r(!0),i(d,null,x(c.graduationYears,t=>(r(),i("option",{key:t,value:t},v(t),9,A))),128))],512),[[h,o(s).school_year]]),a(S,{class:"mt-2",message:o(s).errors.school_year},null,8,["message"])])]),e("div",C,[e("button",{class:b(["ms-4 inline-flex items-center px-2 py-2 bg-amber-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-700 focus:bg-amber-700 active:bg-green-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",{"opacity-25":o(s).processing}]),disabled:o(s).processing||m.graduatesForm.processing}," Export ",10,D)])],32)])])])])]),_:1})],64))}};export{j as default};
