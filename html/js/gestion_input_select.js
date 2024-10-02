function openContents(evt,content,size) {
    let select_content=document.querySelectorAll("."+evt);
    let options_bloc=document.querySelectorAll("."+content);
    for(let m=0;m<size;m++){
        select_content[m].addEventListener('click',function(){
            let class_name_bloc=options_bloc[m].getAttribute("class");
            if(class_name_bloc.includes("active")){
                options_bloc[m].classList.remove('active');
                select_content[m].classList.remove('rotate');
               
            
            }
            else{
                options_bloc[m].classList.add('active');
                select_content[m].classList.add('rotate');
                
                select_content[m].classList.remove('cancel-rotate');
                
            }
            for(let n=0;n<size;n++){
                if(m!=n){
                    options_bloc[n].classList.remove('active');
                }
            }
        })  
    }

    
}
let input_select="input-select-search",bloc_show="parent-input-select-search .option-container";
let element_constitutif="nombre-item", option_number="bloc2-element-constitutif .option-container"
let length_input_select=$("."+input_select),length_element_constitutif=$("."+element_constitutif);
openContents(input_select,bloc_show,length_input_select.length);
openContents(element_constitutif,option_number,length_element_constitutif.length);


function select_options(option,button,value_select,input_select) {
    let option_selected=document.querySelectorAll("."+option),radio_input=document.querySelectorAll("."+button);
    radio_input[0].checked=true;
    
    for(let i=0;i<radio_input.length;i++) {
        option_selected[i].addEventListener('click',function(){
            radio_input[i].checked=true; 
            option_selected[i].classList.add('selected');
            option_selected[i].parentNode.classList.remove('active');
            $("."+value_select+"").html(option_selected[i].innerText);
            $("."+input_select).removeClass('rotate')
            $("."+input_select).addClass('cancel-rotate')
            
            if(option_selected[i].innerText.includes("Location meublée") || option_selected[i].innerText.includes("Location non meublée")){
                $("#item_terrain").css("display","none");
                $(".bloc1-element-constitutif").removeClass("closed");
            }
            else{
                $("#item_terrain").css("display","block");
                
                $(".bloc1-element-constitutif").addClass("closed");
            }
            
            for(let j=0;j<radio_input.length;j++){
                if(i!=j){
                    option_selected[j].classList.remove('selected')
                
                }
                
            }
        })
    
        
    }
}

let select_category="select-category",select_location="select-location";
let nombre_item1="nombre-item.chambre",nombre_item2="nombre-item.douche",nombre_item3="nombre-item.cuisine";
let option_location="option-container.location label",radio_location="option-container.location input[type='radio']"
let option_category="option-container.category label",radio_category="option-container.category input[type='radio']";

let option_element_constitutif1="item1-element-contitutif .option-container label", radio_element_constitutif1="item1-element-contitutif input[type='radio']";
let option_element_constitutif2="item2-element-contitutif .option-container label", radio_element_constitutif2="item2-element-contitutif input[type='radio']";
let option_element_constitutif3="item3-element-contitutif .option-container label", radio_element_constitutif3="item3-element-contitutif input[type='radio']";
let selectInput="input-select-search",input_select2="nombre-item";
select_options(option_location,radio_location,select_location,selectInput);
select_options(option_category,radio_category,select_category,selectInput);
select_options(option_element_constitutif1,radio_element_constitutif1,nombre_item1,input_select2);
select_options(option_element_constitutif2,radio_element_constitutif2,nombre_item2,input_select2);
select_options(option_element_constitutif3,radio_element_constitutif3,nombre_item3,input_select2);


// function de simulation de select avec checkbox
function list_checked(actionResult,input){
    var action_result=document.querySelectorAll("."+actionResult),checkbox_input=document.querySelectorAll("."+input);
    for(let p=0;p<checkbox_input.length;p++){
        action_result[p].addEventListener('click',function(){
            if(checkbox_input[p].checked){
                action_result[p].classList.add('selected');
            }
            else{
                action_result[p].classList.remove('selected');
            }
        })
       
    }
}


let element_checkbox="bloc1-element-constitutif .element-constitutif",btn_checkbox="bloc1-element-constitutif input[type='checkbox']"
list_checked(element_checkbox,btn_checkbox);