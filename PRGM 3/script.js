function addCourse()
{

    var container=document.getElementById("courseContainer");

    var card=document.createElement("div");

    card.className="card";

    card.innerHTML="React <br><br><button onclick='removeCard(this)'>Remove</button>";

    container.appendChild(card);

}

function removeCard(button)
{

    button.parentElement.remove();

}

function submitForm()
{

    var name=document.getElementById("name").value;

    if(name=="")
    {

        alert("Enter your name");

        return false;

    }

    document.getElementById("message").innerHTML="Welcome "+name+"!";

    return false;

}