var add_btn = document.getElementById('Add');
var output_field = document.querySelector(".output_field");



var lists = document.querySelectorAll(".lists");


add_btn.addEventListener('click',()=>{
    var name = document.querySelector("#name");    
   
    output_field.innerHTML +=  `<div class='lists'>
                                    <div class="paragraph">
                                        <p>${name.value}</p>
                                    </div>
                                    <div class="buttons">
                                        <i class="fa-solid fa-trash dels" onClick='del()' id=''></i>
                                        <i class="fa-solid fa-pen-to-square" onClick='edit()'></i>
                                    </div>
                                </div>`;

    // remove(name.value);
    name.value ='';


});
function del(){
    var output_fields = output_field.children;
    // console.log(output_fields)
    for(var i=0;i<output_fields.length;i++){
        output_fields[i].onClick = function(){
            this.parentNode.remove();
        }
    }
}