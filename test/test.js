/**
 * Created by paulo.simao on 08/04/2016.
 */
var secretsanta = require('../index');

describe('Secret Santa', function () {
	it('Should run basic test', function () {
		var items  = ['Arnon', 'Arnonzin', 'Rafael', 'Roanne', 'Montanha', 'Marcella', 'Guilherme', 'Rogerio', 'Gisele', 'Pedro', 'P.O.', 'Tania', 'Ceci', 'RodGui', 'Ana', 'Miguel'];
		var tuples = secretsanta(items)
		console.dir(tuples);
	})
});