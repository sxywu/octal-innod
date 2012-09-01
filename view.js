var PieView = Backbone.View.extend({
	id: "pie1",
	initialize: function(data) {
		$("#pies").append(this.$el);
		this.data = data;
		this.officer = "VP of Marketing"; //implement model later
		this.name = "#pie1";
		this.render();
	},
	render: function() {
		initiatePie(this.name, this.data);
		console.log(this.name, this.data);
		var label = $('<label></label>').text(this.officer);
		$(this.el).append(label);
		
	}
	
});