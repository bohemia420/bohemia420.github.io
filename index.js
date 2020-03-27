var data = [
  ["andaman & nicobar island", 1, 1, 0],
  ["gujarat", 44, 3, 0],
  ["bihar", 7, 1, 0],
  ["lakshadweep", 3],
  ["madhya pradesh", 23, 2, 1],
  ["karnataka", 55, 2, 0],
  ["uttar pradesh", 43,0,11],
  ["west bengal", 11, 1, 1],
  ["assam", 0, 0, 0],
  ["puducherry", 1, 0, 0],
  ["andhra pradesh", 10, 0, 1],
  ["chandigarh", 7, 0, 0],
  ["punjab", 33, 1, 0],
  ["chhattisgarh", 6, 0, 0],
  ["maharashtra", 136, 3, 0],
  ["dadara & Nagar Havelli", 15],
  ["daman & Diu", 0, 0, 0],
  ["haryana", 32, 0, 11],
  ["himachal pradesh", 4, 1, 0],
  ["goa", 6, 0, 0],
  ["rajasthan", 40, 1, 3],
  ["meghalaya", 0, 0, 0],
  ["arunanchal pradesh", 0, 0, 0],
  ["nagaland", 0, 0, 0],
  ["kerala", 150, 0, 4],
  ["tamil nadu", 27, 1, 1],
  ["telangana", 45, 0, 1],
  ["tripura", 0, 0, 0],
  ["mizoram", 1, 0, 0],
  ["nct of delhi", 36, 1, 6],
  ["sikkim", 0, 0, 0],
  ["jammu & kashmir",30, 1, 0],
  ["manipur", 1, 0, 0],
  ["uttarakhand", 4, 0, 0],
  ["odisha", 2, 2, 0],
  ["jharkhand", 0, 0, 0]
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'countries/in/custom/in-all-disputed3'
  },

  title: {
    text: 'Covid-19 State of Affairs in India'
  },

  subtitle: {
    
    text: 'Total Coronavirus <span style="color:brown">Cases</span>: <b>745</b> . <span style="color:red">Deaths</span> :<b>20</b>',
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom'
    }
  },

  colorAxis: {
    min: 0,
    max: 150
  },

	caption: {
		text: '<b>Attempt to update readers of the covid-19 statistics on cases, deaths, recoveries in India.</b><br><em>The data is updated manually as I get hold of the numbers skimming the News and collating them here. And is <b>not any official source/advisory</b>.<br>Credits to awesome javascript charts library: <code>HighCharts.com</code><br><u>last updated at</u>: March 27, 2020 11:45am IST<br><u>developed by</u>: Sumit Khanna</em>'
    },

  series: [{
    data: data,
    name: 'Covid-19 Stats',
    keys: ['hc-key', 'cases', 'deaths', 'recovered'],
    states: {
      hover: {
        color: '#BADA55'
      }
    },
    colorKey: 'cases',
    dataLabels: {
      enabled: true,
      format: '{point.name}'
    },
    tooltip: {
                pointFormat: '<h4 style="color:dark-orange">{point.name}</h4><span> Cases: <b>{point.cases}</b>, Deaths: <b>{point.deaths}</b>, Recovered: <b>{point.recovered}</b></span>'
            }
  }]
});

