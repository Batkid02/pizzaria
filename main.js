document.getElementById("sort_button").style.display="none";
type_of_the_pizza_array=[];
function submit(){
var pizza_1=document.getElementById("pizza_1").value;
var pizza_2=document.getElementById("pizza_2").value;
var pizza_3=document.getElementById("pizza_3").value;
var pizza_4=document.getElementById("pizza_4").value;

type_of_the_pizza_array.push(pizza_1);
type_of_the_pizza_array.push(pizza_2);
type_of_the_pizza_array.push(pizza_3);
type_of_the_pizza_array.push(pizza_4);
console.log(type_of_the_pizza_array);
document.getElementById("display_pizza").innerHTML=type_of_the_pizza_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
type_of_the_pizza_array.sort();
console.log(type_of_the_pizza_array);
document.getElementById("display_pizza").innerHTML=type_of_the_pizza_array;

}