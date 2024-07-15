rowFormatter: function(row) {
    //row - row component

    var data = row.getData();
    console.log("-------------------------data: " + data);
    if (data.id > 2) {
        row.getElement().style.backgroundColor = "#1e3b20";
    }
},

formatter:function(cell, formatterParams){
    var value = cell.getValue();
     if(value.indexOf("o") > 0){
         return "<span style='color:#3FB449; font-weight:bold;'>" + value + "</span>";
     }else{
         return value;
     }
 }