/**
 * secretsanta - create the 2-touples for Secret Santa.
 * @param items - an array of names
 * @returns {Array} - an array of 2-tuples (the one who gives the gift, the one who takes it
 */
function secretsanta(items) {

	var encapsulateditems = []
	while (items.length > 0) {
		var r    = Math.floor(Math.random() * items.length);
		var item = items.splice(r, 1)[0];
		encapsulateditems.push(item);
	}

	var res = [];
	for (var i = 0; i < encapsulateditems.length - 1; i++) {
		res.push({
			src: encapsulateditems[i],
			dst: encapsulateditems[i + 1]
		});


	}
	res.push({
		src: encapsulateditems[encapsulateditems.length - 1],
		dst: encapsulateditems[0]
	});


	return res;
}

module.exports = secretsanta;