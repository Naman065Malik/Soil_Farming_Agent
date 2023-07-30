// function editprofile(profile_info){

//     document.getElementById('profile_info').innerHTML=
//     `<div class="account_details"> 
//         <label>UserID : </label>
//             <input id="userid" type="text" placeholder="Enter your UserID"> 
//         <label>Email : </label>
//             <input id="email" type="text" placeholder="Enter your Email"> 
//         <label>Age : </label>
//             <input id="age" type="text" placeholder="Enter your Age">
//         <label >Password : </label>
//             <input id="password" type="text" placeholder="Enter your Password">
        
//         <div class="buttons"> 
//             <div class="sub_can">
//                 <button id="submit" onclick ="submit()">SUBMIT</button>
//             </div> 
//             <div class="sub_can"> 
//                 <button id="cancel" onclick="cancel_edit()">CANCEL</button>
//             </div>
//         </div>
//     </div>

//     <div class="account_details">
//         <div class="update_image">
//             <label for="input_image">Change Image</label>
//                 <input type="file" accept="image/jpeg, image/jpg, image/png" id="input_image">
//         </div>
//         <div class="profile_img">
//             <img src="static/images/img/user.png" alt="">
//         </div> 
//         <div class="name">
//             <label>Name:</label> 
//                 <input  type="text" placeholder="Enter your name" id="name"> 
//         </div>
//     </div>`
//     console.log("profile_info")
// }

// function canceledit(profile_info){
//     document.getElementById('profile_info').innerHTML=
//     `<div class="account_details">
//         <h1 id="UserID">UserID: {{user.userID}}</h1> 
//         <h1 id="Email">Email: {{user.email}}</h1> 
//         <h1 id="Age">Age: 12</h1> 
//         <h1 id="Password">Password: jhfgh</h1> 
//         <button id="btn" onclick="editprofile()">EDIT PROFILE</button>
//     </div>
    
//     <div class="account_details">
//         <div class="profile_img"> 
//             <img src="static/images/img/user.png" alt=""> 
//         </div>
//         <div class="name">
//             <h1 id="name">user_name</h1>
//         </div>
//     </div>`
//     console.log("cancel_edit")
// }

// function cancel_edit(profile_info){

//     const elements = document.querySelectorAll(".account_details")
//     console.log(elements)
//     elements.forEach(element =>{
//         element.classList.toggle("non-visible");
//     })

//     console.log("Triigerred cancel_edit")
// }


function edit_profile(profile_info){

    const elements = document.querySelectorAll(".account_details")
    console.log(elements)
    elements.forEach(element =>{
        element.classList.toggle("non-visible");
    })
    

    console.log("Triigerred edit_profile")
}

// function submit(){
//         let name= document.getElementById('user_name').value 
//         let userid= document.getElementById('userid').value 
//         let password= document.getElementById('password').value 
//         let email= document.getElementById('email').value 
//         let age= document.getElementById('age').value 
        
//         // alert(userid+' '+name+' '+password+''+''+email+""+age)
//         fetch("http://localhost:8000/api/profile",{
//             method: "POST",
//             body: JSON.stringify({
//                 name: name,
//                 userID: userid,
//                 email: email,
//                 password: password,
//                 age: age,       
//             }),
//             headers: {
//                 "Content-type": "multipart/form-data; boundary=----WebKitFormBoundaryzqvY8vx6ok3ACRWU"
//             }
//         }).then(response => response.json())
//             .then(response => {
//                 if(response.redirect){
//                     window.location.href = response.redirect;
//                 }
//                 alert(response.message)
//             })
         
         
// }

function submit_photo(){
    let name= document.getElementById('user_name').value 
    let password= document.getElementById('password').value 
    let email= document.getElementById('email').value 
    let age= document.getElementById('age').value 
    let profilePhoto = document.getElementById('profile_photo').files[0];

    let formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('age', age);
    formData.append('profilePhoto', profilePhoto);
    console.log(formData)
    
    alert(userid+' '+name+' '+password+''+''+email+""+age)
    fetch("http://localhost:8000/api/profile",{
        method: "POST",
        body: formData,
        headers: {
            'Content-Type': `multipart/form-data; `,
          },
    })
    // const axiosConfig = {
    //     headers: {
    //       'Content-Type': `multipart/form-data; `,
    //     },
    //   };
    // const axios = axios.create(axiosConfig);
    // console.log(axios)
    // console.log(axiosConfig)
    // axios.post(`https://example.com/profile`, formData)
    // .then(response => response.json())
    //     .then(response => {
    //         if(response.redirect){
    //             window.location.href = response.redirect;
    //         }
    //         alert(response.message)
    //     })
    
     
     
}

