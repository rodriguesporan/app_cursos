module.exports = (app) => {
	var controller = {
		index: (req, res) => {
			res.send("Index");
		}
	}

	return controller;
};