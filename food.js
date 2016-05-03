var food = (function(food) {

  var dog;
  var cat;
	var chowFood = document.getElementById("dogFood");
	var meowFood = document.getElementById("catFood");

// List of all the Dog Food, Type, Oz, and Price
	var DogFood = new XMLHttpRequest();

	DogFood.addEventListener("load", function() {
	  dog = JSON.parse(this.responseText);
	  console.log("dog", dog);

// for loop to get the names of the dog food from dogFood.JSON
		for (var i = 0; i < dog.dog_brands.length; i++) {
			var brands = dog.dog_brands[i]
			chowFood.innerHTML += "<div>" + brands.name + "</div>"
			console.log("brands.name", brands.name);

// for loop to get the names of the type of dog food dogFood.JSON
			for (var m = 0; m < brands.types.length; m++) {
				var types = brands.types[m]
				chowFood.innerHTML += "<div>" + types.type + "</div>"
				console.log("types.type", types.type);

// for loop to get the names of of the OZ and the price of dog food from dogFood.JSON
				for (var b = 0; b < types.volumes.length; b++) {
					var volumes = types.volumes[b]
					chowFood.innerHTML += "<div>" + volumes.name + "</div>"
					chowFood.innerHTML += "<div>" + volumes.price + "</div>"
					console.log("volumes.name",volumes.name);
					console.log("volumes.price", volumes.price);

				}
			}
		}
	});

	DogFood.open("GET", "dogFood.JSON");
	DogFood.send();

// List of all the Cat Food, Breed, Type, Oz, and Price
	var CatFood = new XMLHttpRequest();


	CatFood.addEventListener("load", function() {
	  cat = JSON.parse(this.responseText);
	  console.log("cat", cat);

// for loop to get the names of the cat food and Breeds from catFood.JSON
	  for (var c = 0; c < cat.cat_brands.length; c++) {
			var catBrands = cat.cat_brands[c]
			meowFood.innerHTML += "<div>" + catBrands.name + "</div>"
			console.log("catBrands.name", catBrands.name);
			meowFood.innerHTML += "<div>" + catBrands.breeds.join(", ") + "</div>"
			console.log("catBrands.name", catBrands.breeds.join(", "));
			// .join(", ") puts a space in between the comma and the next name

// for loop to get the names of the type of cat food from catFood.JSON
			for (var z = 0; z < catBrands.types.length; z++) {
				var catTypes = catBrands.types[z]
				meowFood.innerHTML += "<div>" + catTypes.type + "</div>"
				console.log("catTypes", catTypes.type);

// for loop to get the names of the OZ and price from catFood.JSON
				for (var q = 0; q < catTypes.volumes.length; q++) {
					var volumes = catTypes.volumes[q]
					meowFood.innerHTML += "<div>" + volumes.name + "</div>"
					meowFood.innerHTML += "<div>" + volumes.price + "</div>"
					console.log("volumes.name",volumes.name);
					console.log("volumes.price", volumes.price);

				}

			}
		}
	});

	CatFood.open("GET", "catFood.JSON");
	CatFood.send();

  return food;
}(food || {}));





