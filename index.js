var add_btn = document.getElementById('Add');
var output_field = document.querySelector(".output_field");
var lists = document.querySelectorAll(".lists");
var name = document.querySelector("#name");


add_btn.addEventListener('click',()=>{
    var name = document.querySelector("#name");    

    
    output_field.innerHTML +=  `<div class='lists'>
                                    <div class="paragraph">
                                        <p>${name.value}</p>
                                    </div>
                                    <div class="buttons"><i class="fa-solid fa-trash del"></i></button>                                        
                                    </div>
                                </div>`;

                    var dels = document.getElementsByClassName("buttons");    
                    for(var i=0;i<dels.length;i++){
                        dels[i].onclick = function(){
                            this.parentNode.remove();
                        }
                    }
   
    name.value ='';


});
