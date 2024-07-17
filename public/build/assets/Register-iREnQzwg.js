import{T as f,o as c,c as w,w as n,a as o,u as s,Z as _,b as l,d,i as g,n as V,e as v}from"./app-Bd-scPGz.js";import{_ as y}from"./GuestLayout-3RVPy855.js";import{_ as t,a as m}from"./TextInput-jE_REh-j.js";import{_ as i}from"./InputLabel-BTjf6PCl.js";import{P as b}from"./PrimaryButton-DWcViAPh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"mt-4"},k={class:"mt-4"},q={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},T={__name:"Register",setup(N){const e=f({name:"",email:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(p,a)=>(c(),w(y,null,{default:n(()=>[o(s(_),{title:"Register"}),l("form",{onSubmit:v(u,["prevent"])},[l("div",null,[o(i,{for:"name",value:"Name"}),o(t,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",x,[o(i,{for:"email",value:"Email"}),o(t,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",k,[o(i,{for:"password",value:"Password"}),o(t,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",q,[o(i,{for:"password_confirmation",value:"Confirm Password"}),o(t,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",B,[o(s(g),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),o(b,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
