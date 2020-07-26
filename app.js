var list=document.getElementById("list");

function addtodo()
{
    var todo=document.getElementById("todo");

    var li=document.createElement("li");
    var litext=document.createTextNode(todo.value);
    li.appendChild(litext);
    
    

    var delbtn=document.createElement("button");
    var deltext=document.createTextNode("Delete");
    delbtn.appendChild(deltext);
    delbtn.setAttribute("class","btnn");
    delbtn.setAttribute("onclick","deletebtn(this)");
    li.appendChild(delbtn);

    var editbtn=document.createElement("button");
    var edittext=document.createTextNode("Edit");
    editbtn.appendChild(edittext);
    editbtn.setAttribute("class","btnn");
    editbtn.setAttribute("onclick","editbtn(this)");
    li.appendChild(editbtn);
    todo.value=""

    list.appendChild(li);
}
function deletebtn(b)
{
 b.parentNode.remove();
}
function deleteall()
{
    list.innerHTML=""
}
function editbtn(e)
{
    var edit=prompt("Enter value")
    e.parentNode.firstChild.nodeValue=edit;
}