import{j as r,a as i,r as c}from"./index.0ef82fe6.js";import{P as o}from"./Pagination.e1ce9250.js";function d({imgSrc:s,title:t,university:e,division:n,price:a}){const l=new Intl.NumberFormat("en-US",{style:"currency",currency:"BDT"});return r("div",{className:"listingCard",children:[i("img",{src:s,alt:""}),i("div",{className:"listingCard-info",children:r("div",{className:"listingCard-info-wrapper",children:[i("h3",{className:"listingCard-info-wrapper-heading",children:t}),r("p",{className:"listingCard-info-wrapper-location",children:[e,", ",n," Division"]}),i("p",{className:"listingCard-info-wrapper-price",children:l.format(a)})]})}),i("div",{className:"listingCard-button",children:i("button",{children:"REMOVE"})})]})}function g(){const[s,t]=c.exports.useState([{imgSrc:"https://www.digitaltrends.com/wp-content/uploads/2022/07/Nothing-Phone-1-Screen-Hand-Wallpaper-2.jpg",title:"Apple iPhone 13 256GB",university:"BUET",division:"Dhaka",price:145e3,id:"01"},{imgSrc:"https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/10/Google-Pixel-7-Pro-6-Watermarked.jpg",title:"Apple iPhone 13 256GB",university:"BUET",division:"Dhaka",price:145e3,id:"01"},{imgSrc:"https://www.reuters.com/resizer/vxF-VbtXdFPEh3R3fymSTyoGZFU=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MWG2II5FBJOWZJMS2ZJRD3QFCI.jpg",title:"Apple iPhone 13 256GB",university:"BUET",division:"Dhaka",price:145e3,id:"01"}]);return r("div",{className:"listings margin-x",children:[i("div",{className:"listings-heading",children:i("h2",{children:"Your Wishlist"})}),i("div",{className:"listings-cards",children:s.map(e=>i(d,{imgSrc:e.imgSrc,title:e.title,university:e.university,division:e.division,price:e.price},e.id))}),i("div",{className:"listings-pagination",children:i(o,{count:10})})]})}export{g as default};
