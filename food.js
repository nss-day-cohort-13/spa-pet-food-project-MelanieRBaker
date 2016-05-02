var food = (function(food) {

  var dog;
  var cat;

	var DogFood = new XMLHttpRequest();

	DogFood.addEventListener("load", function() {
	  dog = JSON.parse(this.responseText);
	  console.log("dog", dog);
	});

	DogFood.open("GET", "dogFood.JSON");
	DogFood.send();

	var CatFood = new XMLHttpRequest();
	CatFood.addEventListener("load", function() {
	  cat = JSON.parse(this.responseText);
	  console.log("cat", cat);
	});

	CatFood.open("GET", "catFood.JSON");
	CatFood.send();

  return food;
}(food || {}));
