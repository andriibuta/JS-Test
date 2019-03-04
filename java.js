function matrix(m, n) {
  var table = document.createDocumentFragment();

  var arr = [];
  var colAvg = [];
  for (var j = 0; j < n; j++) {
    colAvg[j] = 0;
  }

  for (var i = 0; i < m; i++) {
    var tr = document.createElement('tr');
    arr[i] = [];
    var summM = 0;

    for (var j = 0; j < n; j++) {
      var td = document.createElement('td');
      td.id = "Id-" + i + "-" + j;
      td.className = "plusOne";
      td.innerHTML = arr[i][j] = getRandom();
      tr.appendChild(td);
      summM += arr[i][j];
      colAvg[j] += Math.round(arr[i][j] / colAvg.length);
    }
      for (var j = 0; j < 1 ; j++) {
        td = document.createElement('td');
        td.className = "sumChange";
        td.innerHTML = summM;
        tr.appendChild(td);

  }
    
    table.appendChild(tr);
    console.log(tr)
  }


  tr = document.createElement('tr');
  for (var j = 0; j < n ; j++) {
    td = document.createElement('td');
    td.className = "Avg";
    td.innerHTML = colAvg[j];
    tr.appendChild(td);
  }

  table.appendChild(tr);
  console.log(tr)
  
  document.getElementById('table').appendChild(table);

  


  function getRandom() {
    return Math.round(Math.random() * 900 + 100);
  }

  function addToCell(e) {
    if(e.target.id){
        var clickedRow = document.getElementById(e.target.id).closest('tr');
        var clickedRowSum = clickedRow.getElementsByClassName('sumChange')[0];
        clickedRowSum.innerHTML++;
        e.target.innerHTML = parseInt(e.target.innerHTML) + 1;
    }
}
var events = {
    addCellHandler: function () {
        var allTd = [...document.querySelectorAll('td')];
        for(var i=0; i<allTd.length; i++){
            allTd[i].addEventListener('click', addToCell)
        }
    }
};

events.addCellHandler();

// Плюсует единицу но не изменяется сумма и среднее.             
  // var a = document.querySelectorAll('.plusOne');
  // [].forEach.call( a, function(el) {
  //    el.onclick = function(e) {
  //       if (this.innerHTML++);
  //    }
  // });

  // Не работает
  // document.getElementById('table').querySelectorAll('.sumChange').forEach(function(s) {
  //   s.onchange = function() {
  //     if (document.querySelectorAll('.plusOne')++) {
  //       document.getElementById('table').querySelectorAll('.plusOne').forEach(function(e) {
  //         e.onclick = function() {
  //           document.querySelectorAll('.plusOne').innerHTML++;
  //         }
  //       });
  //     }
  //   }
  // });

// Плюсует единицу но не изменяется сумма и среднее.             
//   document.getElementById('table').querySelectorAll('.plusOne').forEach(function(e) {
//   e.onclick = function() {
//     this.innerHTML++; 
//   }
//   
// });


}

matrix(4, 4);

























































// var matrix = [
// 	[{id: 11, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 12, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 13, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 14, value: Math.floor(Math.random() * 800 + 100)}],

// 	[{id: 21, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 22, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 23, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 24, value: Math.floor(Math.random() * 800 + 100)}],

// 	[{id: 31, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 32, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 33, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 34, value: Math.floor(Math.random() * 800 + 100)}],

// 	[{id: 41, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 42, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 43, value: Math.floor(Math.random() * 800 + 100)},
// 	 {id: 44, value: Math.floor(Math.random() * 800 + 100)}],
// ];
// console.log(matrix);

// var matrix = new Array(4);
// for (var i = 0; i < matrix.length; i++)
// 	matrix[i] = new Array(4);

// for (var row = 0; row < matrix.length; row++) {
// 	for(col = 0; col < matrix[row].length; col++) {
// 		matrix[row][col] = Math.round(Math.random() * 800 + 100);
// 	}
// }
// console.log(matrix);
		// matrix[col][0] + matrix[col][1] + matrix[col][2] + matrix[col][3];
		// matrix[4][row] = Math.round((matrix[0][row] + matrix[1][row] + matrix[2][row] + matrix[3][row]) / 4);


// var table = document.createElement('table');   
// var tbody = document.createElement('tbody');
// var tr = document.createElement('tr');
// 	tbody.appendChild(tr);
//  for (var i = 0; i < matrix.length; i++) {
//             var tr = document.createElement('tr');
//                 for (var j = 0; j < matrix.length; j++) {
//                     var td = document.createElement('td');
//                     td.innerHTML = matrix[i][j];
//                     tr.appendChild(td);
                   
//                 }
//                 tbody.appendChild(tr);
//         }
//         table.appendChild(tbody);
//         document.getElementById('table').appendChild(table);
// Сумма
// var sumRow1 = matrix[0][0].value + matrix[0][1].value + matrix[0][2].value + matrix[0][3].value;
// var sumRow2 = matrix[1][0].value + matrix[1][1].value + matrix[1][2].value + matrix[1][3].value;
// var sumRow3 = matrix[2][0].value + matrix[2][1].value + matrix[2][2].value + matrix[2][3].value;
// var sumRow4 = matrix[3][0].value + matrix[3][1].value + matrix[3][2].value + matrix[3][3].value;

// console.log(sumRow1);
// console.log(sumRow2);
// console.log(sumRow3);
// console.log(sumRow4);
// Среднее
// var sumColumn1 = matrix[0][0].value + matrix[1][0].value + matrix[2][0].value + matrix[3][0].value;
// var sumColumn2 = matrix[0][1].value + matrix[1][1].value + matrix[2][1].value + matrix[3][1].value;
// var sumColumn3 = matrix[0][2].value + matrix[1][2].value + matrix[2][2].value + matrix[3][2].value;
// var sumColumn4 = matrix[0][3].value + matrix[1][3].value + matrix[2][3].value + matrix[3][3].value;
// console.log(sumColumn1);
// console.log(sumColumn2);
// console.log(sumColumn3);
// console.log(sumColumn4);

// var avg1 = Math.round(sumColumn1 / matrix.length);
// var avg2 = Math.round(sumColumn2 / matrix.length);
// var avg3 = Math.round(sumColumn3 / matrix.length);
// var avg4 = Math.round(sumColumn4 / matrix.length);

// console.log(avg1);
// console.log(avg2);
// console.log(avg3);
// console.log(avsg4);



// document.write("<table border='1' width='200'>")

// for(var i=0; i<4;i++)
// {
// 	document.write("<tr><td>" + matrix[i][0].value + "</td><td>" + matrix[i][1].value + "</td><td>" + matrix[i][2].value + "</td><td>" + matrix[i][3].value + "</td></tr>");
// }
// for(var i=0; i<1;i++)
// {
// 	document.write("<tr><td>" + avg1 + "</td><td>" + avg2 + "</td><td>" + avg3 + "</td><td>" + avg4 + "</td></tr>");
// }
// for(var j=0; j<1;j++)
// {
// 	document.write();
// }
// document.write("</table>")



// Array.prototype.sum = function (prop) {
//     var total = 0
//     for ( var i = 0, _len = this.length; i < _len; i++ ) {
//         total += this[i][prop]
//     }
//     return total
// }

// console.log(matrix[0].sum("value"))
// console.log(matrix[1].sum("value"))
// console.log(matrix[2].sum("value"))
// console.log(matrix[3].sum("value"))

// function matrix(m, n) {
//   var table = document.createDocumentFragment();

//   var arr = [];
//   var colMidl = [];
//   for (var j = 0; j < n; j++) {
//     colMidl[j] = 0;
//   }

//   for (var i = 0; i < m; i++) {
//     var tr = document.createElement('tr');
//     arr[i] = [];
//     var summM = 0;

//     for (var j = 0; j < n; j++) {
//       var td = document.createElement('td');
//       td.id = "Id-" + i + "-" + j;
//       td.innerHTML = arr[i][j] = getRandom();
//       tr.appendChild(td);
//        summM += arr[i][j]; //сумма каждой строки
//       colMidl[j] += Math.round(arr[i][j] / m);
//     }

//     tr.setAttribute("data-summ", " = "  + summM);
//     table.appendChild(tr);
//   }

//   tr = document.createElement('tr');
//   for (var j = 0; j < n; j++) {
//     td = document.createElement('td');
//     td.innerHTML = "<b>" + colMidl[j] + "</b>";
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
  
//   document.getElementById('table').appendChild(table);

//   function getRandom() {
//     var min = 100;
//     var max = 999;
//     return Math.round(Math.random() * (max - min)) + min;
//   }
// }
// matrix(4, 4);


// Вариант массива №1
// var myMatrix = [
// 	[{Math.floor(Math.random() * 800 + 100)}, {Math.floor(Math.random() * 800 + 100)}, {Math.floor(Math.random() * 800 + 100)}],
// 	[{Math.floor(Math.random() * 800 + 100)}, {Math.floor(Math.random() * 800 + 100)}, {Math.floor(Math.random() * 800 + 100)}],
// 	[{Math.floor(Math.random() * 800 + 100)}, {Math.floor(Math.random() * 800 + 100)}, {Math.floor(Math.random() * 800 + 100)}]
// ];


// myMatrix.forEach((object, i) => {
// 	object.id = i + 1;
// });

// console.log(myMatrix);

// Вариант массива №2
// function matrixArray(rows,columns){
//   var myMatrix = [];
//   for(var i=0; i<rows; i++){
//     myMatrix[i] = [];
//     for(var j=0; j<columns; j++){
//       myMatrix[i][j] = Math.floor(Math.random() * 800 + 100);
    	
    	
//     }

//   }
//   console.log(myMatrix);
//  }
// var myMatrix = matrixArray(4,4);






// var s = '<table border="0">';
// var id = "";
// for (var j = 1; j <= 1; j++) {
//   s += "<tr>";
//   for (var i = 1; i <= 1; i++) {
//     var id = "(" + i + ";" + j + ")";
//     s += '<td id="a1"' + id + '"></td>';
//     s += '<td id="a2"' + id + '"></td>';
//     s += '<td id="a3"' + id + '"></td>';
//     s += '<td id="a4"' + id + '"></td>';
//   }
//   s += "</tr>";
//   s += "<tr>";
//   for (var i = 1; i <= 1; i++) {
//     var id = "(" + i + ";" + j + ")";
//     s += '<td id="b1"' + id + '"></td>';
//     s += '<td id="b2"' + id + '"></td>';
//     s += '<td id="b3"' + id + '"></td>';
//     s += '<td id="b4"' + id + '"></td>';
//   }
//   s += "</tr>";
//   s += "<tr>";
//   for (var i = 1; i <= 1; i++) {
//     var id = "(" + i + ";" + j + ")";
//     s += '<td id="c1"' + id + '"></td>';
//     s += '<td id="c2"' + id + '"></td>';
//     s += '<td id="c3"' + id + '"></td>';
//     s += '<td id="c4"' + id + '"></td>';
//   }
//   s += "</tr>";
//   s += "<tr>";
//   for (var i = 1; i <= 1; i++) {
//     var id = "(" + i + ";" + j + ")";
//     s += '<td id="d1"' + id + '"></td>';
//     s += '<td id="d2"' + id + '"></td>';
//     s += '<td id="d3"' + id + '"></td>';
//     s += '<td id="d4"' + id + '"></td>';
//   }
//   s += "</tr>";
// }
// s += "</table>";
// document.getElementById("table").innerHTML = s;
// document.getElementById("a1").innerHTML = Math.floor(Math.random() * 800 + 100);
// document.getElementById("a2").innerHTML = Math.floor(Math.random() * 800 + 100);
// document.getElementById("a3").innerHTML = Math.floor(Math.random() * 800 + 100);

// document.getElementById("b1").innerHTML = Math.floor(Math.random() * 800 + 100);
// document.getElementById("b2").innerHTML = Math.floor(Math.random() * 800 + 100);
// document.getElementById("b3").innerHTML = Math.floor(Math.random() * 800 + 100);

// document.getElementById("c1").innerHTML = Math.floor(Math.random() * 800 + 100);
// document.getElementById("c2").innerHTML = Math.floor(Math.random() * 800 + 100);
// document.getElementById("c3").innerHTML = Math.floor(Math.random() * 800 + 100);
// // Сумма строк
// document.getElementById("a4").innerHTML =
//   parseInt(document.getElementById("a1").innerHTML) +
//   parseInt(document.getElementById("a2").innerHTML) +
//   parseInt(document.getElementById("a3").innerHTML);
// document.getElementById("b4").innerHTML =
//   parseInt(document.getElementById("b1").innerHTML) +
//   parseInt(document.getElementById("b2").innerHTML) +
//   parseInt(document.getElementById("b3").innerHTML);
// document.getElementById("c4").innerHTML =
//   parseInt(document.getElementById("c1").innerHTML) +
//   parseInt(document.getElementById("c2").innerHTML) +
//   parseInt(document.getElementById("c3").innerHTML);
// // Среднее
// document.getElementById("d1").innerHTML = Math.round(
//   (parseInt(document.getElementById("a1").innerHTML) +
//     parseInt(document.getElementById("b1").innerHTML) +
//     parseInt(document.getElementById("c1").innerHTML)) /
//     3
// );
// document.getElementById("d2").innerHTML = Math.round(
//   (parseInt(document.getElementById("a2").innerHTML) +
//     parseInt(document.getElementById("b2").innerHTML) +
//     parseInt(document.getElementById("c2").innerHTML)) /
//     3
// );
// document.getElementById("d3").innerHTML = Math.round(
//   (parseInt(document.getElementById("a3").innerHTML) +
//     parseInt(document.getElementById("b3").innerHTML) +
//     parseInt(document.getElementById("c3").innerHTML)) /
//     3
// );
// document.getElementById("d4").innerHTML = Math.round(
//   (parseInt(document.getElementById("a4").innerHTML) +
//     parseInt(document.getElementById("b4").innerHTML) +
//     parseInt(document.getElementById("c4").innerHTML)) /
//     3
// );

// a1.onclick = function clkOne() {
//   document.getElementById("a1").innerHTML =
//     parseInt(document.getElementById("a1").innerHTML) + 1;
//     a4.onchange;
// };
// a2.onclick = function clkOne() {
//   document.getElementById("a2").innerHTML =
//     parseInt(document.getElementById("a2").innerHTML) + 1;
// };
// a3.onclick = function clkOne() {
//   document.getElementById("a3").innerHTML =
//     parseInt(document.getElementById("a3").innerHTML) + 1;
// };
// b1.onclick = function clkOne() {
//   document.getElementById("b1").innerHTML =
//     parseInt(document.getElementById("b1").innerHTML) + 1;
// };
// b2.onclick = function clkOne() {
//   document.getElementById("b2").innerHTML =
//     parseInt(document.getElementById("b2").innerHTML) + 1;
// };
// b3.onclick = function clkOne() {
//   document.getElementById("b3").innerHTML =
//     parseInt(document.getElementById("b3").innerHTML) + 1;
// };
// c1.onclick = function clkOne() {
//   document.getElementById("c1").innerHTML =
//     parseInt(document.getElementById("c1").innerHTML) + 1;
// };
// c2.onclick = function clkOne() {
//   document.getElementById("c2").innerHTML =
//     parseInt(document.getElementById("c2").innerHTML) + 1;
// };
// c3.onclick = function clkOne() {
//   document.getElementById("c3").innerHTML =
//     parseInt(document.getElementById("c3").innerHTML) + 1;
// };





// // var plusOne = document.getElementsByClassName("plusOne");
// // var i;
// // for (i = 0; i < plusOne.length; i++) {
// //   plusOne[i].onclick = function() {
// //     var changed = this.parentElement;
// //     changed.style.display = "plusOne + 1";
// //   };
// // }

// // !Вариант 2!
// // var table = document.createElement('table'), tr, td, row, cell;
// // for (row = 0; row < 4; row++) {
// //     tr = document.createElement('tr');
// //     for (cell = 0; cell < 4; cell++) {
// //         td = document.createElement('td');
// //         tr.appendChild(td);
// //         td.innerHTML = Math.floor(Math.random() * 800 + 100);
// //     }
// //     table.appendChild(tr);
// // }
// // document.getElementById('table').appendChild(table);

// // window.onload = function() {
// //   var randomNum = Math.floor(Math.random() * 800 + 100);
// //   var body = document.getElementsByTagName("body")[0];
// //   var table = document.createElement("table");
// //   var tblB = document.createElement("tbody");
// //   table.appendChild(tblB);
// //   for (var i = 0; i < 4; i++) {
// //     var tr = document.createElement("tr");
// //     tblB.appendChild(tr);

// //     for (var j = 0; j < 4; j++) {
// //       var td = document.createElement("td");
// //       tr.appendChild(td);
// //       td.setAttribute("id", "n1");
// //     }
// //   }
// //   body.appendChild(table);
// //   document.getElementById("n1").innerHTML = randomNum;
// // };

// // window.onload = function() {
// //   var tbl = document.createElement("table");
// //   var row1 = tbl.insertRow();
// //   var cell1 = row1.insertCell();
// //   var cell2 = row1.insertCell();
// //   var cell3 = row1.insertCell();
// //   var cell4 = row1.insertCell();
// //   cell1.innerHTML = Math.floor(Math.random() * 800 + 100);
// //   cell2.innerHTML = Math.floor(Math.random() * 800 + 100);
// //   cell3.innerHTML = Math.floor(Math.random() * 800 + 100);
// //   cell4.innerHTML = Math.floor(Math.random() * 800 + 100);
// // };

// // window.onload = function tableCreate() {
// //   var tbl = document.createElement("table");
// //   tbl.setAttribute("id", "table");
// //   var x = Math.floor(Math.random() * 800 + 100);
// //   var body = document.getElementsByTagName("body")[0];
// //   tbl.style.width = "100%";
// //   var tbdy = document.createElement("tbody");
// //   var tr = document.createElement("tr");
// //   var td = document.createElement("td");
// //   tb.setAttribute("id", "n1, n2, n3, n4, n5");
// // };

// // window.onload = function tableCreate() {
// //   var x = Math.floor(Math.random() * 800 + 100);
// //   var body = document.getElementsByTagName('body')[0];
// //   var tbl = document.createElement('table');
// //   tbl.style.width = '100%';
// //   var tbdy = document.createElement('tbody');
// //   for (var i = 0; i < 4; i++) {
// //       var tr = document.createElement('tr');
// //       for (var j = 0; j < 4; j++) {
// //           if (i == 4 && j == 4) {
// //               break
// //           } else {
// //               var td = document.createElement('td ');
// //               td.appendChild(document.createTextNode('x'))
// //               tr.appendChild(td)
// //           }
// //       }
// //       tbdy.appendChild(tr);
// //   }
// //   tbl.appendChild(tbdy);
// //   body.appendChild(tbl)
// // }

// // window.onload = function addTable() {
// //   var x1, x2, x3, x4, x5, x6, x7, x8, x9 = Math.floor(Math.random() * 800 + 100);
// //   var table = document.createElement('table');
// //   table += "<tr>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //   table += "</tr>";
// //   table += "<tr>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //   table += "</tr>";
// //   table += "<tr>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //   table += "</tr>";
// //   table += "<tr>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //     table += "<td>" + randomNum + "</td>";
// //   table += "</tr>";
// //   document.getElementById("addtable").appendChild(table);
// // }

// // var table = "";
// // var rows = 4;
// // var cols = 4;
// // for (var r=0; r < rows; r++) {
// //   table += "<tr>";
// //   for (var c = 1; c <= cols; c++) {
// //     table += "<td>" + c + "</td>";
// //   }
// //   table += "</td>";
// // }
// // document.getElementById("addtable").appendChild(table);

// // window.onload = function() {
// //   var randomNum = Math.floor(Math.random() * 800 + 100);
// //   var body = document.getElementsByTagName("body")[0];
// //   var table = document.createElement("table");
// //   var tblB = document.createElement("tbody");
// //   table.appendChild(tblB);
// //   for (var i=0; i<4; i++) {
// //     var tr = document.createElement("tr");
// //     tblB.appendChild(tr);

// //     for (var j=0; j<4; j++) {
// //       var td = document.createElement("td");
// //       tr.appendChild(td);
// //     }
// //   }
// // body.appendChild(table);

// // table.innerHTML = "<tr><td>f1412</td><td>randomNum</td></tr>";
// // document.getElementById("addtable").appendChild(table);
// // };

// // window.onload = function fun1() {
// //   var x1 = Math.floor(Math.random() * 800 + 100);
// //   var x2 = Math.floor(Math.random() * 800 + 100);
// //   var x3 = Math.floor(Math.random() * 800 + 100);
// //   var x4 = Math.floor(Math.random() * 800 + 100);
// //   var x5 = Math.floor(Math.random() * 800 + 100);
// //   var x6 = Math.floor(Math.random() * 800 + 100);
// //   var x7 = Math.floor(Math.random() * 800 + 100);
// //   var x8 = Math.floor(Math.random() * 800 + 100);
// //   var x9 = Math.floor(Math.random() * 800 + 100);
// //   if (x1 != x2) {
// //     fun1;
// //   }
// //   document.getElementById("n1").innerHTML = x1;
// //   document.getElementById("n2").innerHTML = x2;
// //   document.getElementById("n3").innerHTML = x3;
// //   document.getElementById("n4").innerHTML = x4;
// //   document.getElementById("n5").innerHTML = x5;
// //   document.getElementById("n6").innerHTML = x6;
// //   document.getElementById("n7").innerHTML = x7;
// //   document.getElementById("n8").innerHTML = x8;
// //   document.getElementById("n9").innerHTML = x9;

// // };
// // function() {
// //     var a = document.getElementById("n1").innerHTML;
// //     var b = document.getElementById("n2").innerHTML;
// //     var c = document.getElementById("n3").innerHTML;
// //     var sum = a + b + c;
// //     document.getElementById("resultM1").innerHTML = sum;
// //   };
