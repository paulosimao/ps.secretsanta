/**
 * secretsanta - create the 2-touples for Secret Santa.
 * @param items - an array of names
 * @returns {Array} - an array of 2-tuples (the one who gives the gift, the one who takes it
 */
module.exports = function (items) {

	/**
	 * shellsort - sorts the items
	 * @param itemsarr
	 */
	function shellsort(itemsarr) {
		var h = 1;

		var n = itemsarr.length;

		while (h < n) {
			h = h * 3 + 1;
		}

		h = Math.floor(n / 3);
		var c, j;

		while (h > 0) {
			for (var i = h; i < n; i++) {
				c = itemsarr[i];
				j = i;
				while (j >= h && itemsarr[j - h].order > c.order) {
					itemsarr[j] = itemsarr[j - h];
					j           = j - h;
				}
				itemsarr[j] = c;
			}
			h = Math.floor(h / 2);
		}

	}

	var encapsulateditems = [];
	for (i of items) {
		var ei = new Object();
		ei     = {
			name: i,
			order: Math.random() * 100
		}
		encapsulateditems.push(ei);
	}
	shellsort(encapsulateditems);

	var res = [];
	for (var i = 0; i < encapsulateditems.length - 1; i++) {
		res.push({
			src: encapsulateditems[i].name,
			dst: encapsulateditems[i + 1].name
		});


	}
	res.push({
		src: encapsulateditems[encapsulateditems.length - 1].name,
		dst: encapsulateditems[0].name
	});


	return res;
}
//	var items = [{name: 'Arnon'}, {name: 'Arnonzin'}, {name: 'Rafael'}, {name: 'Roanne'}, {name: 'Montanha'}, {name: 'Marcella'}, {name: 'Guilherme'}, {name: 'Rogerio'}, {name: 'Gisele'}, {name: 'Pedro'}, {name: 'P.O.'}, {name: 'Tania'}, {name: 'Ceci'}, {name: 'RodGui'}, {name: 'Ana'}, {name: 'Miguel'}];
