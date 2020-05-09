  	function callback() {
  		var oResponse = this;
  		var sResponseBody = oResponse.responseText;
  		var oResponseJSON = JSON.parse(sResponseBody);

  		var sReais = oResponseJSON.rates.BRL;
  		var oURL = new URL(location.href);
  		document.querySelector("#targetValue").value = sReais * oURL.searchParams.get("valor_origem");

  	}

  	function chamaAPI() {
  		const sURL = "https://api.exchangeratesapi.io/latest";
  		var oRequest = new XMLHttpRequest();
  		oRequest.addEventListener("load", callback);
  		oRequest.open("GET", sURL);
  		oRequest.send();
  		console.log("Chamou!");
  	}