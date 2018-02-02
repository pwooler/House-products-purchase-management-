//var x = 0;
//var List = Array();
//
////document.getElementById("addTo").onclick = function() {
////    
////    var newTask = document.getElementById('task').value;
////    
////    var li = "<li>" + text + "</li>";
////    
////    document.getElementById('dem').appendChild(li);
////}
//
//function add_to_list() {
//    List[x] = document.getElementById("task").value;
//    document.getElementById("dem").innerHTML = List[Array];
////    alert(List[x] + x)
//    x++;
//    document.getElementById("task").value = "";
////    if (x =< 1){
////        
////    }
//}
//
////var vue = new Vue({
////    el: 'vue',
////    data: {
////        items: [
////            { message: 'milk' },
////            { message: 'bread' },
////        ]
////    }
////})
var database = firebase.database();

var t = document.getElementById('big')
var dbRef = firebase.database().ref().child('text')
dbRef.on('value', snap => big.innerText = snap.val());

const getItem = document.getElementById('item2')
const listItem = firebase.database().ref().child('items');

listItem.on('value', snap => {
    getItem.innerHTML = JSON.stringify(snap.val(), null, 3);
});

//document.getElementById("addTo").onclick = function() {
 function add_to_list() { 
     alert("test");
    var newTask = document.getElementById('task').value;
    firebase.database().ref().child('items').set({
        name: newTask,
        status: need,
        lastGot: yesterday
    });
}