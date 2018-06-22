var svgWidth = 900;
var svgHeight = 400;

var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
};

var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

var tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

var svg = d3.select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


d3.csv("Drunkstates.csv", function (error, ddData) {
    if (error) throw error;

    console.log(ddData);

ddData.forEach(function (d) {
    d.Total = +d.Total;
});

var xBandScale = d3.scaleBand()
    .domain(ddData.map(d => d.State))
    .range([0, chartWidth])
    .padding(0.1);

var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(ddData, d => d.Total)])
    .range([chartHeight, 0])

var bottomAxis = d3.axisBottom(xBandScale);
var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

chartGroup.append("g")
    .call(leftAxis);

chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

chartGroup.selectAll(".bar")
    .data(ddData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.State))
    .attr("y", d => yLinearScale(d.Total))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => chartHeight - yLinearScale(d.Total))
    .on('mouseover', (d) => {
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html(`Drunk Driving Fatalities in ${d.State}: <span>${d.Total}</span>`)
    })
    .on('mouseout', () =>
    tooltip.hide);


});