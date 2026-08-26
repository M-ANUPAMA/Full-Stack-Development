function loadData()
{

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

var table=document.getElementById("userTable");

for(var i=0;i<data.length;i++)
{

var row=table.insertRow();

row.insertCell(0).innerHTML=data[i].id;

row.insertCell(1).innerHTML=data[i].name;

row.insertCell(2).innerHTML=data[i].email;

row.insertCell(3).innerHTML=data[i].address.city;

}

})

.catch(error => {

alert("Error loading data");

});

}