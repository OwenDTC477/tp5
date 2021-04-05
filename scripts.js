/* Windows.onload event*/ 

window.onload = function() 
  
  // do code when the page finishes loading in the browser

 
  
 /* code for clickable menus */ 

<id="ingredients">
    <h4 onClick="showIngredients()">Ingredients</h4>
    <ul id="content1">
      <li>1/2 cup of bread crumbs</li>
      <li> 1 ounce of French Onion Soup Mix </li>
      <li>1/3 cup of mayo</li>
      <li> 1 cup of garlic paste (optional) </li>
      <li>4 skinless and boneless chicken breasts </li>
  };
 



/* Code for Changing Title Color */

  headline = document.querySelector("#recipeName");
  
  headline.classList.toggle("largerFont");
  
  headline.onclick = function() {
    
    document.getElementById("recipeName").style.color = "red";
