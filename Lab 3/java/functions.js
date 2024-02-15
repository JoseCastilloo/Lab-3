function popupfunction(x)
{
    document.getElementById('popup'+x).style.display='block';
    document.getElementById('fade'+x).style.display='block';
}



function popupclose(x)
{
    document.getElementById('popup'+x).style.display='none';
    document.getElementById('fade'+x).style.display='none';
}

function showcart()
{
    document.getElementById('cart').style.display='block';
}

var currentItem ="";

function addItem(item)
{
    currentItem +=item;
    updatecart();
}

function updatecart()
{
    document.getElementById('Hlabel').innerHTML = "<br>" + currentItem;

}

function createItem()
{
    var createdItem = document.getElementById('Slabel');
    createdItem.innerHTML += currentItem + "<br>";
    currentItem="";
    updatecart();
}
