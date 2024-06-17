import { links } from "./links.js";

const linkContainer = document.getElementById("links");

function addLink(name, name2, link, image) {
  const textOne = ` 
    <a href="${ link }" class="link" target="blank"> 
      <img src="${ image }"/> 
      <span>${ name }</span>
      <img class="linkIcon" src="link-solid.svg" alt=""/> 
    </a> 
  `
  const textTwo = ` 
    <a href="${ link }" class="link" target="blank">
      <div class="names">
        <span class="nameOne">${ name }</span>
        <span class="nameTwo">${ name2 }</span>
      </div> 
    </a> 
  `

  return textTwo;
}

let allLinks = "";

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;
    let name2 = ele.name2;
    let image = ele.image;

    allLinks += addLink(name, name2, link, image);
});

linkContainer.innerHTML = allLinks;
