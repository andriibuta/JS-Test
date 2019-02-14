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
//   var arr = [];
//   for(var i=0; i<rows; i++){
//     arr[i] = [];
//     for(var j=0; j<columns; j++){
//       arr[i][j] = i+j+1;
//     }
//   }
//   document.write(arr);
// }
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
