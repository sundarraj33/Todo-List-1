var add_btn = document.getElementById('Add');
var output_field = document.querySelector(".output_field");
var lists = document.querySelectorAll(".lists");
var name = document.querySelector("#name");


//  ---------------    Loaded Data from Localhost ---------------------


document.addEventListener("DOMContentLoaded",()=>{   
    var todos = [...JSON.parse(localStorage.getItem('todos'))];    
    viewfun(todos);
});


//  ---------------    Loaded Data from Localhost ---------------------

add_btn.addEventListener('click',()=>{
    var name = document.querySelector("#name");    
        
    localStorage.setItem('todos',
        JSON.stringify(
            [...JSON.parse(localStorage.getItem('todos') || "[]"),{todos:name.value}]
        ));
        
        
        output_field.innerHTML +=  `<div class='lists'>
        <div class="paragraph">
            <p>${name.value}</p>
        </div>
        <div class="buttons">
            <div class='delbutton'>
                <i class="fa-solid fa-trash" ></i>
            </div>  
            <div class='Editbutton'>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>                                  
        </button>                                        
        </div>
    </div>`; 
    

                    var dels = document.getElementsByClassName("delbutton");    
                    for(var i=0;i<dels.length;i++){
                        dels[i].onclick = function(){                            
                            this.parentNode.parentNode.remove();
                        }
                    }


                    var Editbutton = document.getElementsByClassName('Editbutton');
                    for(var j=0;j<Editbutton.length;j++){
                        Editbutton[j].onclick = function(){                           
                           name.value = this.closest('.lists').innerText;
                           this.closest(".lists").remove();
                        }
                    }
   
    name.value ='';


});


function viewfun(todos){
    todos.forEach((index)=>{
        
        output_field.innerHTML +=  `<div class='lists'>
                                    <div class="paragraph">
                                        <p>${index.todos}</p>
                                    </div>
                                    <div class="buttons">
                                        <div class='delbutton'>
                                            <i class="fa-solid fa-trash" ></i>
                                        </div>  
                                        <div class='Editbutton'>
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </div>                                  
                                    </button>                                        
                                    </div>
                                </div>`; 
    })
    
    
}
