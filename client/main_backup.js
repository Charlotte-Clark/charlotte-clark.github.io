// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
import { DataSource } from '../data/DataSource';
import { Template } from 'meteor/templating';
import './container.html';

var chart;
var bar;

Template.acTemplate.rendered = function() {
  /*
    Get container for chart.
    It is not actually necessary here, `chart.container('container').draw();` can be used
    for current scope, but container is found in template to avoid container ID duplication.
   */
//   var container = this.find("#container");
//
//   // Turn Meteor Collection to simple array of objects.
//   var data = DataSource.find({}).fetch();
//
//   //  ----- Standard Anychart API in use -----
//   chart = anychart.pie(data);
//   chart.title('ACME Corp. apparel sales through different retail channels');
//
//   chart.legend()
//       .position('bottom')
//       .itemsLayout('horizontal')
//       .align('center')
//       .title('Retail channels');
//
//   chart.animation(true);
//   chart.listen("click", function (){
//     console.log(this);
// 	dataSet.append({
// 		// x value
// 		x: "P" + indexSetter,
//
// 		// random value from 1 to 500
// 		value : Math.floor((Math.random() * 500)+ 1)
// 	});
// 	indexSetter++;
// });
//   chart.container(container).draw();
//
//
//
//   var container = this.find("#bar");
//
//
//   //  ----- Standard Anychart API in use -----
//   var data = [
//       ['A', 242, 162],
//       ['B', 254, 90],
//       ['C', 226, 50],
//       ['D', 232, 77],
//       ['E', 268, 35],
//       ['F', 254, 45],
//       ['G', 235, 88]
//   ];
//
//   //create area chart
//   bar = anychart.bar();
//
//   //turn on chart animation
//   bar.animation(true);
//
//   //set container id for the chart
//   bar.container('container');
//
//   var series = anychart.data.mapAsTable(data);
//   for (var i in series) {
//       bar.bar(series[i]);
//   }
//
//   //initiate chart drawing
//   bar.draw();

  var dataSet = anychart.data.set([
      ['Jan', 22, 43, 75],
      ['Feb', 34, 45, 56],
      ['Mar', 16, 26, 67],
      ['Apr', 12, 86, 42],
      ['May', 41, 35, 17],
      ['Jun', 47, 31, 12],
      ['Jul', 39, 27, 9],
      ['Aug', 28, 16, 23],
      ['Sep', 21, 27, 47],
      ['Oct', 18, 31, 58, 43],
      ['Nov', 24, 42, 69, 43],
      ['Dec', 29, 39, 71, 43]
  ]);

  //map data for the first series,take value from first column of data set
  var seriesData_1 = dataSet.mapAs({'x': 0, 'value': 1});

  //map data for the second series,take value from second column of data set
  var seriesData_2 = dataSet.mapAs({'x': 0, 'value': 2});

  //map data for the third series, take x from the zero column and value from the third column of data set
  var seriesData_3 = dataSet.mapAs({'x': 0, 'value': 3});

  //map data for the third series, take x from the zero column and value from the third column of data set
  var seriesData_4 = dataSet.mapAs({'x': 0, 'value': 4});

  //create line chart
  var chart = anychart.line();

  //turn on chart animation
  chart.animation(true, 20000, "show");

  //turn on the crosshair
  chart.crosshair().enabled(true).yLabel().enabled(false);
  chart.crosshair().enabled(true).xLabel().enabled(false);
  chart.crosshair().enabled(true).yStroke(null);

  //set container id for the chart
  chart.container('container');
  chart.padding([10, 20, 5, 20]);

  //set yAxis title
  chart.yAxis().title('Key metric');

  /** We can edit series stroke by function in which context available
   *  @param color - stroke color
   *  @param style - dash lines style
   *  @return string/Object - acgraph.vector.Stroke type (string/Object)
   */
  var seriesStrokeFunction = function (color, style) {
      return {color: color, dash: style};
  };


  /** Helper Function to setup series
   *  @param series - stroke color
   *  @param name - stroke series name
   */
  var seriesConfiguration = function (series, name) {
      series.name(name);
      series.tooltip().title(false);
      series.tooltip().separator(false);
      series.tooltip().format(function () {
          return this.value + ' times'
      });
      series.hovered().markers().enabled(true).size(4);
      series.tooltip().position('right').anchor('left-bottom').offsetX(2).offsetY(5);
  };

  //temp variable to store series instance
  var series;

  //we can use local variables to change series settings
  series = chart.line(seriesData_1);
  series.stroke('#000000');
  seriesConfiguration(series, 'Purchase Returns');


  //or just use chaining calls
  series = chart.line(seriesData_2);
  series.stroke(seriesStrokeFunction('#6C6C6C', '3 5 10 5'));
  seriesConfiguration(series, 'Delivery Failure');

  //or access series by index from chart
  series = chart.line(seriesData_3);
  series.stroke(seriesStrokeFunction('#C8C8C8', '3 5'));
  seriesConfiguration(series, 'Order Cancellation');

  //or access series by index from chart
  series = chart.line(seriesData_4);
  series.stroke(seriesStrokeFunction('#C8C8C8', '3 5'));
  seriesConfiguration(series, 'Other thing');

  chart.interactivity().hoverMode('by-x');
  chart.tooltip().displayMode('separated');
  chart.tooltip().positionMode('point');
  //turn the legend on
  chart.legend().enabled(true).padding([0, 0, 10, 0]);

  //initiate chart drawing
  chart.draw();
};
