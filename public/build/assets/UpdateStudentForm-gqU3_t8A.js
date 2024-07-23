import{h as d,T as S,m as x,o as p,f,b as r,a as e,u as t,w,s as I,e as b,d as k,g as P}from"./app-B6O6sYq6.js";import{a as l,_ as n}from"./InputLabel-Bs4jbW8b.js";import{P as U}from"./PrimaryButton-B5o05fdj.js";import{_ as u}from"./TextInput-umVapjyh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N=r("header",null,[r("h2",{class:"text-lg font-medium text-gray-900"},"Update Student ID, Section and Password"),r("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),B={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600"},j={__name:"UpdateStudentForm",props:{student:{type:Object,default:{}}},setup(_){const i=d(null),m=d(null),g=d(null),v=d(null),y=d(null),c=_,s=S({student_id:"",section:"",current_password:"",password:"",password_confirmation:"",image:""}),V=()=>{s.post(route("student.update"),{preserveScroll:!0,onSuccess:()=>{s.reset(),alert("Successfully updated!")},onError:()=>{s.errors.image&&(s.reset("image"),y.value.focus()),s.errors.student_id&&(s.reset("student_id"),g.value.focus()),s.errors.section&&(s.reset("section"),v.value.focus()),s.errors.password&&(s.reset("password","password_confirmation"),i.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return x(()=>{s.student_id=c.student.student_id,s.section=c.student.section}),(T,o)=>(p(),f("section",null,[N,r("form",{onSubmit:b(V,["prevent"]),class:"mt-6 space-y-6",method:"POST"},[r("div",null,[e(n,{for:"image",value:"Image"}),e(u,{id:"image",type:"file",class:"mt-1 block w-full",onInput:o[0]||(o[0]=a=>t(s).image=a.target.files[0])}),e(l,{message:t(s).errors.image,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"student_id",value:"Student ID"}),e(u,{id:"student_id",type:"text",class:"mt-1 block w-full",modelValue:t(s).student_id,"onUpdate:modelValue":o[1]||(o[1]=a=>t(s).student_id=a)},null,8,["modelValue"]),e(l,{message:t(s).errors.student_id,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"section",value:"Section"}),e(u,{id:"section",type:"text",class:"mt-1 block w-full",modelValue:t(s).section,"onUpdate:modelValue":o[2]||(o[2]=a=>t(s).section=a)},null,8,["modelValue"]),e(l,{message:t(s).errors.section,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"current_password",value:"Current Password"}),e(u,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:t(s).current_password,"onUpdate:modelValue":o[3]||(o[3]=a=>t(s).current_password=a),type:"password",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l,{message:t(s).errors.current_password,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"password",value:"New Password"}),e(u,{id:"password",ref_key:"passwordInput",ref:i,modelValue:t(s).password,"onUpdate:modelValue":o[4]||(o[4]=a=>t(s).password=a),type:"password",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l,{message:t(s).errors.password,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:t(s).password_confirmation,"onUpdate:modelValue":o[5]||(o[5]=a=>t(s).password_confirmation=a),type:"password",class:"mt-1 block w-full"},null,8,["modelValue"]),e(l,{message:t(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),r("div",B,[e(U,{disabled:t(s).processing},{default:w(()=>[k("Save")]),_:1},8,["disabled"]),e(I,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:w(()=>[t(s).recentlySuccessful?(p(),f("p",C,"Saved.")):P("",!0)]),_:1})])],32)]))}};export{j as default};
