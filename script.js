$(document).ready(function() {
    $.get("data.tsv", function(data) {
      var rows = data.split("\n");
      var table = $("#data-table tbody");
      
      for (var i = 1; i < rows.length; i++) {
        var row = rows[i].split("\t");
        var tr = $("<tr>");
  
        tr.append($("<td>").text('' + new Date().toLocaleDateString("vn-VN")));
        tr.append($("<td>").text(row[0]));
        tr.append($("<td>").text(row[2]));
        tr.append($("<td>").html('<a href="' + '#' + '">' + '#' + '</a>'));
        tr.append($("<td>").html('<img src="' + row[1] + '" width="100" height="100">'));
        tr.append($("<td>").text('1'));
  
        table.append(tr);
      }
    });
  });
  