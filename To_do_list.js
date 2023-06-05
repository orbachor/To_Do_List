
function Add_Item()
{

    var ol = document.getElementById("list");
    var new_task = document.getElementById("new_task");
    if(new_task.value === "")
        {
            alert("You must write something!");
        }
    else if (new_task.value.length > 30)
        {
        alert(" Your task is too long!");
        }
    else
    { 
        

        var li = document.createElement("li");
        li.setAttribute('id',new_task.value);
        li.appendChild(document.createTextNode(new_task.value));

        var deleteButton= li.appendChild(document.createElement("button1"));
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute('id','new_task.value');
        deleteButton.addEventListener("click",Remove);
        
        var upButton =li.appendChild(document.createElement("button1"));
        upButton.textContent = "Up";
        upButton.addEventListener("click", up);

        var downButton = li.appendChild(document.createElement("button1"));
        downButton.textContent = "Down";
        downButton.addEventListener("click", down);
        

        ol.appendChild(li);
        document.getElementById("new_task").value="";

    }
}

function Remove() 
{
   this.parentElement.remove();
}

function up()
{
    var li= this.parentElement;
    var upl= li.previousElementSibling;
    if (upl)
    {
        li.parentElement.insertBefore(li,upl);
    }
}       

function down()
{
    var li= this.parentElement;
    var down1= li.nextElementSibling;
    if (down1)
    {
        li.parentElement.insertBefore(down1, li);
    }
}

function Clear()
{
    var list = document.getElementById("list");
        while (list.firstChild)
        {
            list.removeChild(list.firstChild);
        }
}

function startTime() 
{
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }