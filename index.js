let form=document.getElementById("form");
let input=document.getElementById("fname");
let lname=document.getElementById("lname");
let female=document.getElementById("female");
let male=document.getElementById("male");
let read=document.getElementById("reading");
let game=document.getElementById("gaming");
let design=document.getElementById("designing");
let write=document.getElementById("writing");
let bdate=document.getElementById("bdate");
let address=document.getElementById("add")
// let gender=document.getElementById("gender");
// let msg=document.getElementById("msg");
let table=document.getElementById("table");
// let tab1=document.getElementById("tab1");
let gender="Male";
// let htext=""
// let htext="none";
let arr=[],i=0;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    if(female.checked==true){
        gender="Female"
    }else{
        gender="Male"
    }
    i=0;
    if(read.checked==true){
        arr[i]="Reading";
        i++;
    }
    if(game.checked==true){
        arr[i]="Gaming";
        i++;
    }
    if(design.checked==true){
        arr[i]="Designing";
        i++;
    }
    if(write.checked==true){
        arr[i]="Writing";
        i++;
    }
    console.log(arr)
    formValidation();
});
let j=0;
let formValidation=()=>{
    if(input.value===""||lname.value===""){
        msg.innerHTML="input cannot be blank";
        console.log('failure');
    }else{
        console.log("success");
        msg.innerHTML="";
        acceptData();
    }
    // htext=arr.join();
    // htext=arr.toString();
    // console.log(htext);
    // console.log(htext);
    // console.log(sen)
    // console.log(typeof sen)
    
};
// let sen="";
// console.log(sen)
let data={};
let acceptData=()=>{
    data['ftext']=input.value;
    data['lname']=lname.value;
    data['gender']=gender;
    data['atext']=arr.toString();
    data['bdate']=bdate.value;
    data['add']=address.value;
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
    createTable();
};

let createTable=()=>{
    // table.innerHTML+=`
    // <div>
    // <p>${data.ftext}</p>
    // <p>${data.lname}</p>
    // <p>${data.gender}</p>
    // <p>${data.atext}</p>
    // <p>${data.bdate}</P>
    // <p>${data.add}</p>
    // <span class="options">
    // <i OnClick="editTable(this)" class="fas fa-edit"></i>
    // <i onClick="deleteTable(this)"  class="fas fa-trash-alt"></i>
    // </span>
    // </div>`;


    table.innerHTML+=`
    <tr>
                        <th scope="row">${++j}</th>
                        <td id="t1">${data.ftext}</td>
                        <td id="t2">${data.lname}</td>
                        <td id="t3">${data.gender}</td>
                        <td id="t4">${data.atext}</td>
                        <td id="t5">${data.bdate}</td>
                        <td id="t6">${data.add}</td>
                        <td> <span class="options">
                                <i OnClick="editTable(this)" class="fas fa-edit"></i>
                                <i onClick="deleteTable(this)" class="fas fa-trash-alt"></i>
                            </span></td>
                    </tr>
    `;
    input.value=""
    lname.value=""
    female.checked=false;
    male.checked=false;
    read.checked=false;
    game.checked=false;
    design.checked=false;
    write.checked=false;
    // gender.value="";
    gender="";
    arr.length=0;
    arr=[],
    // data['gender']="";
    // data['text2']="";
    bdate.value="";
    add.value="";

};
// let t1=document.getElementById('t1');
// let t2=document.getElementById('t2');
// let t3=document.getElementById('t3');
// let t4=document.getElementById('t4');
// let t5=document.getElementById('t5');
// let t6=document.getElementById('t6');
let deleteTable=(e)=>{
    e.closest('tr').remove();
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id,1);
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
};
let editTable = (e) => {

    let selectedTask=e.parentElement.parentElement.parentElement;
    fname.value=selectedTask.children[1].innerHTML;
    lname.value=selectedTask.children[2].innerHTML;
    gender.value=selectedTask.children[3].innerHTML;
    hobbies.value=selectedTask.children[4].innerHTML;
    bdate.value=selectedTask.children[5].innerHTML;
    address.value=selectedTask.children[6].innerHTML;

    // e.parentElement.parentElement.parentElement.remove();
    // t1.value=e.parentElement.parentElement.parentElement.innerText;
    // let selectedTask=e.parentElement.parentElement;

    // input.value=selectedTask.children[0].innerHTML;
    // lname.value=selectedTask.children[1].innerHTML;
    // gender.value=selectedTask.children[2].innerHTML;
    // hobbies.value=selectedTask.children[3].innerHTML;
    // bdate.value=selectedTask.children[4].innerHTML;
    // add.value=selectedTask.children[5].innerHTML;
    // input.value = e.parentElement.previousElementSibling.innerHTML;
    // e.parentElement.parentElement.remove();
    deleteTable(e);
  };
//   let arr=[],i=0;
//   function myFunction(hobby) {
    // document.getElementById("msg").innerText = hobby;
    // arr[i]=hobby;
    // i++;
//   }
// function edit_row(no) {
//     document.getElementById("edit_button" + no).style.display = "none";
//     document.getElementById("save_button" + no).style.display = "block";
   
//     var name = document.getElementById("name_row" + no);
//     var country = document.getElementById("country_row" + no);
//     var age = document.getElementById("age_row" + no);
   
//     var name_data = name.innerHTML;
//     var country_data = country.innerHTML;
//     var age_data = age.innerHTML;
   
//     name.innerHTML =
//      "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
//     country.innerHTML =
//      "<input type='text' id='country_text" +
//      no +
//      "' value='" +
//      country_data +
//      "'>";
//     age.innerHTML =
//      "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
//    }

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTable();
  })();