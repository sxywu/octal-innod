var Officer = Backbone.Model.extend({
	initialize: function(position) {
		this.position = position;
		this.budgetCollection = new BudgetCollection();
	},
	addBudget: function(budget) {
		this.budgetCollection.add(budget);
		console.log(this.budgetCollection);
	}
});

var Budget = Backbone.Model.extend({
	defaults: {
		officer: "vp of poopyhead",
		activity: "pooping",
		budgeted: 10000
	}
});

var BudgetCollection = Backbone.Collection.extend({
	model: Budget
});