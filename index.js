var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var deleteBtn=document.createElement('button');
    //add a edit button element
    var editBtn=document.createElement('button');
    //add a class to edit button
    editBtn.className="btn btn-danger btn-sm float-right delete"
    //add a classs to del button
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    //append text node
    deleteBtn.appendChild(document.createTextNode('x'));
    editBtn.appendChild(document.createTextNode('edit'));
    //append text node to edit btn
    li.appendChild(editBtn);
    // append to li 
    li.appendChild(deleteBtn);
    // append li to the list
    itemList.appendChild(li);
    //append li to the list
    itemList.appendChild(li)
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure ?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    // convert text to lower case 
    var text=e.target.value.toLowerCase();
    // get all li items 
    var items=itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block';
        }
            else{
                item.style.display='none'
            }
        }
    )
};
