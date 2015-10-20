function likeGame() {
	document.querySelector('span.b-link.js-profile-header-vote').click()
	setTimeout(function () {
		likeGame()
	}, 3000)
}

function likeNearby(notaBase) {
	notaBase = notaBase || 5
	var doc = document;
	try {
		var nota = parseInt(doc.querySelector('b.scale-value.no-dps').innerHTML, 10)
		if(!nota)like()
		else if (nota >= notaBase) {
			like()
		}
		else {
			console.log('Garota com nota abaixo da notabase: ', notaBase)
		}
	} catch (e) {
		next()
	}
	function like() {
		doc.querySelector('span.b-link.js-profile-header-vote').click()
	}
	function next() {
		doc.querySelector('span.b-link.js-next-button').click()
	}
	setTimeout(function(){
		likeNearby(notaBase)
	}, 3000)
	setTimeout(next, 1500)
}
