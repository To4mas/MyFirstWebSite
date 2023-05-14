$(function(){

	var url = 'http://data.fixer.io/api/latest?access_key=7556a4a9e24d262b95e2bdc7193a5b65';

	$.get(url,function(response){
		var usd_uah = response.rates.UAH / response.rates.USD;
		var er_uah = response.rates.UAH / response.rates.EUR;
		$('#cost-eur').append(er_uah.toFixed(2));
		$('#cost-usd').append(usd_uah.toFixed(2));
	});

	
});