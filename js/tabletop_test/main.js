window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/19Gc0twWUwGkE4g0oyRqKHNPuGIWKw1taBwpP4wz4lVI/pubhtml';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  var tabletopData;

  function showInfo(data, tabletop) {
    tabletopData = data;
      console.log(tabletopData);
  }

  document.getElementById('myTestButton').onclick = function () {
tabletopData = JSON.stringify(tabletopData);

//select div by id
  var selector = document.getElementById('insertData');

  //insert data into div
selector.innerHTML = tabletopData;
  }

  


  