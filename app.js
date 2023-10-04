let btns = document.querySelectorAll('.bottom_header_contend button');
let status_area =document.querySelector(".status_area");
let community_area= document.querySelector(".community_area");
let call_area =document.querySelector(".call_area");
let contact_list =document.querySelector(".contact_list");
let chatBtns= document.querySelector(".chatBtns");
let statusbtn =document.querySelector(".statusbtn");
let penbtn =document.querySelector(".penbtn");
let callbtn=document.querySelector(".callbtn");
let userContactList =document.querySelectorAll('.userContactList li');
let contack_chat_area=document.querySelector(".contack_chat_area");
let profile_contack=document.querySelector(".profile_contack");
let profile_contack_img=document.querySelector(".profile_contack img");
let profile_contack_name=document.querySelector(".contack_name h5");
btns.forEach((Element)=>{
    Element.addEventListener("click",()=>{
        document.querySelector('.Active').classList.remove('Active');
        if(Element.id === 'status'){
            community_area.style.left="-100%"
            status_area.style.left ='0';
            call_area.style.left="100%";
            contact_list.style.left= '-100%';
            Element.classList.add('Active');
            chatBtns.style.display="none";
            statusbtn.style.display="block"
            penbtn.style.display="block"
            callbtn.style.display="none";


           }else if(Element.id === 'chat'){
            community_area.style.left="-100%"
            status_area.style.left ='100%';
            call_area.style.left="100%";
            contact_list.style.left= '0%';
            Element.classList.add('Active');
            chatBtns.style.display="block";
            statusbtn.style.display="none";
            penbtn.style.display="none";
            callbtn.style.display="none";
         

           }else if(Element.id === 'call'){
            call_area.style.left="0"
            community_area.style.left="-100%";
            status_area.style.left ='-100%';
            contact_list.style.left= '-100%';
            Element.classList.add('Active');
            chatBtns.style.display="none";
            statusbtn.style.display="none";
            penbtn.style.display="none";
            callbtn.style.display="block";

             
           }else {
            community_area.style.left="0";
            call_area.style.left="100%";
            status_area.style.left ='100%';
            contact_list.style.left= '100%';
            Element.classList.add('Active');
            chatBtns.style.display="none";
            statusbtn.style.display="none";
            penbtn.style.display="none";
            callbtn.style.display="none";



           }
    })
     
})


userContactList.forEach((element, index)=>{

    element.setAttribute('id', `contact_btn${index}`)
    element.addEventListener('click',()=>{

        if(element.id === `contact_btn${index}`){
            contack_chat_area.style.display ="block";
          }
          profile_contack_img.src = element.firstElementChild.childNodes[1].src;
          profile_contack_name.innerHTML = element.children[1].firstElementChild.innerHTML;
       
    })
    profile_contack.addEventListener('click', () =>{
        contack_chat_area.style.display ="none";
      })

})