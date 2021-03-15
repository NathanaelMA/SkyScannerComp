function getInputValue(){

	//obtain user input & update URL
	outboundDate = document.getElementById("outboundDate").value;
	inboundDate = document.getElementById("inboundDate").value;
	country = document.getElementById("country").value;
	currency = document.getElementById("currency").value;
	originPlace = document.getElementById("originPlace").value;
	destinationPlace = document.getElementById("destinationPlace").value;
	locale = document.getElementById("locale").value;

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+country+"/"+currency+"/"+locale+"/"+originPlace+"/"+destinationPlace+"/"+outboundDate+"?inboundpartialdate="+inboundDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "cdd7baade8msh6c66d4c740118b3p1316cdjsna0d184c96a23",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
		}
	};

	
	$.ajax(settings).done(function (response) {
		console.log(response);

		//reset dynamic list
		$(".ExitCity").html("");
		$(".EnterCity").html("");
		$(".Price").html("");
		$(".NoResponse").html("");

		
		var noresponse = "No flights available."

		if (response.Places.length < 1){
			var p = "<p>";
			$(".NoResponse").append(p.concat(noresponse));
		
		}
		
		//dispay elements from API request
		for (var j = 0; j < response.Quotes.length; j++){
			var li = "<li>";

			$(".ExitCity").append(li.concat(response.Places[0].CityName));
			$(".EnterCity").append(li.concat(response.Places[1].CityName));
			$(".Price").append(li.concat(response.Currencies[0].Symbol, response.Quotes[j].MinPrice));

		}

	});

}

// create sorting/filter dropdown button
function sortFilter() {
	document.getElementById("dropDown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }

// sort from highest to lowest
function sortHighest() {

	outboundDate = document.getElementById("outboundDate").value;
	inboundDate = document.getElementById("inboundDate").value;
	country = document.getElementById("country").value;
	currency = document.getElementById("currency").value;
	originPlace = document.getElementById("originPlace").value;
	destinationPlace = document.getElementById("destinationPlace").value;
	locale = document.getElementById("locale").value;

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+country+"/"+currency+"/"+locale+"/"+originPlace+"/"+destinationPlace+"/"+outboundDate+"?inboundpartialdate="+inboundDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "cdd7baade8msh6c66d4c740118b3p1316cdjsna0d184c96a23",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);

		// reset dynamic list 
		$(".ExitCity").html("");
		$(".EnterCity").html("");
		$(".Price").html("");
		$(".NoResponse").html("");

		var noResponse = "There are no flights available for your selections. Please Try Again."

		if (response.Places.length < 1){
			var p = "<p>";
			$(".NoResponse").html(p.concat(noResponse));
		
		}

		let price = new Array(response.Quotes.length)
		for (var i = 0; i < response.Quotes.length; i++){
			price[i] = response.Quotes[i].MinPrice;
		}
		price.sort((a, b) => b - a);

		//display elements highest to lowest
		for (var j = 0; j < response.Quotes.length; j++){
			var li = "<li>";

			$(".ExitCity").append(li.concat(response.Places[1].CityName));
			$(".EnterCity").append(li.concat(response.Places[0].CityName));
			$(".Price").append(li.concat(response.Currencies[0].Symbol, price[j]));

		
		}


	});
}

// sort from lowest to highest
function sortLowest() {

	outboundDate = document.getElementById("outboundDate").value;
	inboundDate = document.getElementById("inboundDate").value;
	country = document.getElementById("country").value;
	currency = document.getElementById("currency").value;
	originPlace = document.getElementById("originPlace").value;
	destinationPlace = document.getElementById("destinationPlace").value;
	locale = document.getElementById("locale").value;

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+country+"/"+currency+"/"+locale+"/"+originPlace+"/"+destinationPlace+"/"+outboundDate+"?inboundpartialdate="+inboundDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "cdd7baade8msh6c66d4c740118b3p1316cdjsna0d184c96a23",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);

		//reset dynamic list
		$(".ExitCity").html("");
		$(".EnterCity").html("");
		$(".Price").html("");
		$(".NoResponse").html("");

		var noResponse = "There are no flights available for your selections. Please Try Again."

		if (response.Places.length < 1){
			var p = "<p>";
			$(".NoResponse").html(p.concat(noResponse));
		
		}

		//create array and sort prices in array 
		let price = new Array(response.Quotes.length)
		for (var i = 0; i < response.Quotes.length; i++){
			price[i] = response.Quotes[i].MinPrice;
		}
		price.sort((a, b) => a - b);

		//display chart body from lowest to highest
		for (var j = 0; j < response.Quotes.length; j++){
			var li = "<li>";

			$(".ExitCity").append(li.concat(response.Places[1].CityName));
			$(".EnterCity").append(li.concat(response.Places[0].CityName));
			$(".Price").append(li.concat(response.Currencies[0].Symbol, price[j]));
		
		}

	});
}


function LowestPrice() {

	outboundDate = document.getElementById("outboundDate").value;
	inboundDate = document.getElementById("inboundDate").value;
	country = document.getElementById("country").value;
	currency = document.getElementById("currency").value;
	originPlace = document.getElementById("originPlace").value;
	destinationPlace = document.getElementById("destinationPlace").value;
	locale = document.getElementById("locale").value;

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/"+country+"/"+currency+"/"+locale+"/"+originPlace+"/"+destinationPlace+"/"+outboundDate+"?inboundpartialdate="+inboundDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "cdd7baade8msh6c66d4c740118b3p1316cdjsna0d184c96a23",
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);

		//reset dynamic list
		$(".ExitCity").html("");
		$(".EnterCity").html("");
		$(".Price").html("");
		$(".NoResponse").html("");

		var noResponse = "There are no flights available for your selections. Please Try Again."

		if (response.Places.length < 1){
			var p = "<p>";
			$(".NoResponse").html(p.concat(noResponse));
		
		}

		// find lowest price
		var LowPrice = response.Quotes[0].MinPrice;

		for (var i = 0; i < response.Quotes.length; i++){
			if (response.Quotes[i].MinPrice <= LowPrice){
				LowPrice = response.Quotes[i].MinPrice
			}
		}
		//add lowest flight to chart body
			var li = "<li>";
			$(".ExitCity").append(li.concat(response.Places[1].CityName));
			$(".EnterCity").append(li.concat(response.Places[0].CityName));
			$(".Price").append(li.concat(response.Currencies[0].Symbol, LowPrice));


	});
}
