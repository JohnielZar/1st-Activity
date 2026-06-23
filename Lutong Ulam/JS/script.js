const dishes=[

{

name:"Chicken Adobo",

emoji:"🍛",

description:"Classic Filipino dish.",

ingredients:[

"1 kg chicken",

"1/2 cup soy sauce",

"1/2 cup vinegar",

"6 cloves garlic",

"2 bay leaves",

"1 tsp peppercorn"

],

steps:[

"Marinate chicken.",

"Saute garlic.",

"Cook chicken.",

"Add vinegar and soy sauce.",

"Simmer for 30 minutes.",

"Serve hot."

]

},

{

name:"Sinigang",

emoji:"🍲",

description:"Traditional sour soup.",

ingredients:[

"500g pork",

"Tamarind",

"Tomato",

"Onion",

"Kangkong",

"Radish"

],

steps:[

"Boil pork.",

"Add vegetables.",

"Add tamarind.",

"Simmer.",

"Serve."

]

},

{

name:"Kare-Kare",

emoji:"🥜",

description:"Peanut-based stew.",

ingredients:[

"Oxtail",

"Peanut butter",

"Eggplant",

"String beans",

"Bagoong"

],

steps:[

"Boil meat.",

"Prepare peanut sauce.",

"Cook vegetables.",

"Mix everything.",

"Serve."

]

}

];

const container=document.getElementById("food-container");

const modal=document.getElementById("recipeModal");

const content=document.getElementById("recipeContent");

const close=document.getElementById("closeBtn");

function display(data){

container.innerHTML="";

data.forEach(food=>{

container.innerHTML+=`

<div class="card">

<div class="emoji">${food.emoji}</div>

<h3>${food.name}</h3>

<p>${food.description}</p>

</div>

`;

});

document.querySelectorAll(".card").forEach((card,index)=>{

card.addEventListener("click",()=>{

showRecipe(data[index]);

});

});

}

function showRecipe(food){

content.innerHTML=`

<h1>${food.emoji} ${food.name}</h1>

<h2>Ingredients</h2>

<ul>

${food.ingredients.map(item=>`<li>${item}</li>`).join("")}

</ul>

<br>

<h2>Procedure</h2>

<ol>

${food.steps.map(item=>`<li>${item}</li>`).join("")}

</ol>

`;

modal.style.display="flex";

}

close.onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}

display(dishes);

document.getElementById("search").addEventListener("keyup",e=>{

const keyword=e.target.value.toLowerCase();

const filtered=dishes.filter(food=>

food.name.toLowerCase().includes(keyword)

);

display(filtered);

});