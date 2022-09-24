   let url = "https://type.fit/api/quotes";
   fetch(url)
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
       let a = 0;
     
       let searchbtn = document.getElementById("searchbtn");
       searchbtn.addEventListener("click", function () {
         let countnum = document.getElementById("countnum");
         
         a = Math.floor(Math.random() * 1600);
         countnum.value = a;
         displaythought(a, data);
       });
       
       a = Math.floor(Math.random() * 1600);
       displaythought(a, data);
     });
     
   function displaythought(index, data) {
     let thought = document.getElementById("thought");
     
     if (data[index].author == null) {
       data[index].author = "unknown";
     }
     
     let htmlthought = `<div class="alert alert-outline-primary">
               ${data[index].text}<br>
               <span style="color:#00ffc5;">
                   ${data[index].author}
               </span>
           </div>`;
     thought.innerHTML = htmlthought;
   }
