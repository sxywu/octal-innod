function initiatePie(name, data) {
	var width = 150,
		height = 150,
		radius = 50,
		radiusDiff = 20,
		data = data,
		donut = d3.layout.pie(),
		colors = d3.scale.category20c();
	
		var pies = d3.select(name)
			.append("svg")
				.style("position", "absolute")
				.selectAll("g")
					.data(data)
					.enter().append("g")
					.attr("transform", function(d) {return "translate("+ radius * 2+ "," + radius*2 + ")"});
		
		pies.each(function(row,i) {
			var arc = d3.svg.arc(data)
				.innerRadius((radius + i * 20) * .8)
				.outerRadius(radius + i * 20);
				
			var pie = d3.select(this).selectAll("path")
				.data(donut)
					.enter().append("path")
					.attr("d", arc)
					.attr("fill", function(d, index) {
						if (index + 1 == row.length) {
							console.log("none");
							return "white";
						} else {
							console.log(index);
							return colors(index);
						}
				});
					
		});
}