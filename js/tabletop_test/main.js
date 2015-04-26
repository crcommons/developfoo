window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/19Gc0twWUwGkE4g0oyRqKHNPuGIWKw1taBwpP4wz4lVI/pubhtml?gid=35738440&single=true';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  var tabletopData;

  function showInfo(data, tabletop) {
    tabletopData = data;
      console.log(tabletopData);
      selectNames();
  }

  // document.getElementById('myTestButton').onclick = function () {
tabletopData = JSON.stringify(tabletopData);

//select div by id
//   var selector = document.getElementById('insertData');

//   //insert data into div
// selector.innerHTML = tabletopData;
//   }

  
//varible to hold data
function selectNames () {
var attendanceNames = tabletopData.map(function (item) { 
  return item["Name"]; 
}).map(function (name) { 
  return "<div>" + name + "</div>" 
}).join('');
document.getElementById('insert').innerHTML = attendanceNames;
}
//for loop through array

  //select key name
  //put key and value in variable
  //wrap each value in a DIV tag
  //add a class to each div



//innerHTML the variable

//this is a test
  


  