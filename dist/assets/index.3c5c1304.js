import{j as n,a as e,L as l}from"./index.0ef82fe6.js";import{F as m,c as t,a as c,b as p}from"./object.2f75054a.js";const u="/assets/account.999d64b9.svg",h="/assets/add-white.1fe43987.svg",f=/^(?:(?:\+|00)88|01)?\d{11}$/,w={fullName:"",phone:"",password:"",passwordConfirmation:""},N=t().shape({fullName:c().required("Name is required"),phone:c().matches(f,"Phone number is not valid").required("Required"),password:c().required("Password is required"),passwordConfirmation:c().oneOf([p("password"),null],"Passwords must match").required("Required")});function b(){return n("div",{className:"my-account margin-x",children:[n("div",{className:"my-account-heading",children:[n("div",{className:"my-account-heading-info",children:[e("img",{src:u,alt:""}),n("div",{className:"my-account-heading-info-greet",children:[e("p",{children:"Hello,"}),e("h4",{children:"John Doe"})]})]}),n("div",{className:"my-account-heading-redirects",children:[n(l,{className:"my-account-heading-redirects-add",to:"/create-listing",children:[e("img",{src:h,alt:""}),"Upload a new listing"]}),e(l,{to:"/listings",children:"My Listings"})]})]}),n("div",{className:"my-account-form",children:[e("div",{className:"my-account-form-heading",children:e("h2",{children:"Change Account Details"})}),e("div",{className:"my-account-form-wrapper",children:e(m,{onSubmit:r=>{console.log(r)},initialValues:w,validationSchema:N,children:({values:r,errors:a,touched:o,handleBlur:s,handleChange:i,handleSubmit:d})=>n("form",{onSubmit:d,children:[e("p",{children:"Full Name:"}),e("input",{type:"text",placeholder:"Full Name",onBlur:s,onChange:i,name:"fullName",value:r.fullName}),a.fullName&&o.fullName?e("p",{className:"my-account-form-wrapper-error",children:a.fullName}):null,e("p",{children:"Phone Number:"}),e("input",{type:"text",placeholder:"Phone Number",onBlur:s,onChange:i,name:"phone",value:r.phone}),e("p",{className:"my-account-form-wrapper-error",children:a.phone&&o.phone?e("div",{children:a.phone}):null}),e("p",{children:"Password:"}),e("input",{type:"password",placeholder:"Password",onBlur:s,onChange:i,name:"password",value:r.password}),e("p",{className:"my-account-form-wrapper-error",children:a.password&&o.password?e("div",{children:a.password}):null}),e("p",{children:"Re-enter your password:"}),e("input",{type:"password",placeholder:"Password Confirmation",onBlur:s,onChange:i,name:"passwordConfirmation",value:r.passwordConfirmation}),e("p",{className:"my-account-form-wrapper-error",children:a.passwordConfirmation&&o.passwordConfirmation?e("div",{children:a.passwordConfirmation}):null}),e("div",{className:"my-account-form-wrapper-submit",children:e("button",{type:"submit",children:"Change"})})]})})})]})]})}export{b as default};
