import{j as r,a as i}from"./index.0ef82fe6.js";function d({imgSrc:a,title:n,university:s,division:e,price:l}){const c=new Intl.NumberFormat("en-US",{style:"currency",currency:"BDT"});return r("div",{className:"listingCard",children:[i("img",{src:a,alt:""}),i("div",{className:"listingCard-info",children:r("div",{className:"listingCard-info-wrapper",children:[i("h3",{className:"listingCard-info-wrapper-heading",children:n}),r("p",{className:"listingCard-info-wrapper-location",children:[s,", ",e," Division"]}),i("p",{className:"listingCard-info-wrapper-price",children:c.format(l)})]})})]})}export{d as L};
