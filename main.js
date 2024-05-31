//
// var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
// var inp_gen=document.getElementById('a_generate');
// var inp_aspeed=document.getElementById('a_speed');
//
// var butts_algos=document.querySelectorAll(".algos button");
//
// var div_sizes=[];
// var divs=[];
// var margin_size;
// var cont=document.getElementById("array_container");
// cont.style="flex-direction:row";
//
// //ray generation and updation
// inp_gen.addEventListener("click",generate_array);
// inp_as.addEventListener("input",update_array_size);
//
// function generate_array(){
//   cont.innerHTML=""; //innerHTML is a property of HTML elements that represents the HTML content contained within the element. By setting it to an empty string (""), you are effectively removing all the content that was inside the cont element.
//   for(var i=0;i<array_size;i++){
//     div_sizes[i]=Math.floor(Math.random()*0.5*(inp_as.max - inp_as.min))+10; //Min 10 should be there
//     //0.5 * (inp_as.max - inp_as.min): This calculates half of the range. Multiplying the range by 0.5 (or dividing it by 2) effectively reduces the range to 50% of its original size.
//     //(inp_as.max - inp_as.min): This calculates the range of values that can be generated. It subtracts the minimum value (inp_as.min) from the maximum value (inp_as.max), giving you the range of values that can be generated.
//     //Math.floor(...): This function rounds down the result of the expression inside the parentheses to the nearest whole number. It ensures that the final result is an integer.
//     //... + 10: After obtaining a random integer within the adjusted range, 10 is added to it. This shifts the range of possible values up by 10 units. As a result, the generated values will be integers between 10 and (10 + 0.5 * (inp_as.max - inp_as.min)).
//
//     divs[i]=document.createElement("div");
//     cont.appendChild(divs[i]);
//     margin_size = 0.1;
//     divs[i].style = "margin:0% " + margin_size + "%;" +
//     "background-color:blue;" +
//     "width:" + (100 / array_size - (2 * margin_size)) + "%;" +
//     "height:" + (div_sizes[i]) + "%;";
//
//   //"%;" bcs  semicolons (;) are used to terminate statements. However, when you're building a string that represents CSS styles, the semicolons should be used as part of the string content itself, not as statement terminators within the string.
//
//   }
// }
//
//
// function update_array_size(){
//   array_size=inp_as.value;
//   generate_array();
// }
//
// window.onload=update_array_size();
// //update_array_size is a function definition that sets the array_size variable to the value of an HTML element with the id attribute "inp_as" and then calls the generate_array function.
// //window.onload = update_array_size(); assigns the return value of the update_array_size function to the window.onload event handler. This means that when the window finishes loading (i.e., the onload event occurs), the update_array_size function will be executed immediately because of the parentheses () after the function name.
//
// //running correct algorithms
// for(var i=0;i<butts_algos.length;i++){
//   butts_algos[i].addEventListener("click",runalgo);
// }
//
//
// function disable_buttons(){
//   for(var i=0;i<butts_algos.length;i++){
//     butts_algos[i].classList=[];
//     butts_algos[i].classList.add("butt_locked");
//
//     butts_algos[i].disabled=true;
//     inp_as.disabled=true;
//     inp_gen.disabled=true;
//     inp_aspeed.disabled=true;
//   }
// }
//
//
// function runalgo(){
//   disable_buttons();
//
//   this.classList.add("butt_selected");
//   switch(this.innerHTML){
//     case "Bubble": Bubble();
//     break;
//
//     case "Selection": Selection_sort();
//     break;
//
//     case "Insertion": Insertion();
//     break;
//
//     case "Merge": Merge();
//     break;
//
//     case "Quick": Quick();
//     break;
//
//     case "Heap": Heap();
//     break;
//   }
// }



//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
