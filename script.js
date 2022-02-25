var ul = document.querySelector('ul');

function add(){
    
    var input = document.getElementById('takeinput');
    var li = document.createElement('li');
    var  main= document.createElement('div');
    var note= document.createElement('div');
    var icons= document.createElement('div');
    var editBox = document.createElement('div');
    var box = document.createElement('input');
    var  edit= document.createElement('i');
    var del= document.createElement('i');


    li.className = "list-group-item";
    main.className = "d-flex justify-content-between";
    edit.className = "fa-solid fa-pen-to-square"
    del.className = "fa-solid fa-trash ms-2 text-danger"
    editBox.className = "d-flex justify-content-center"
    box.setAttribute("type","text");
    box.setAttribute("value","");
    box.className = "hide"

    note.textContent = input.value;

        li.appendChild(main);
        main.appendChild(note);
        main.appendChild(icons);
        icons.appendChild(edit);
        icons.appendChild(del);
        editBox.appendChild(box);
        li.appendChild(editBox);

     
        if(input.value!== '')
        {
            ul.appendChild(li);
        }
        
        // console.log(li);


       // clearing the value of textbox after adding
       var par  = ul.parentNode;
    //    var addInput = par.childNodes[11].childNodes[3].childNodes[0];
        // addInput.value="";
}
 // edit panel
ul.addEventListener('click',function(e){
    if(e.target.classList[1]=='fa-pen-to-square')
    {
        var parent = e.target.parentNode;
        var mainParent = e.target.parentNode.parentNode;
        var sibs = mainParent.nextElementSibling;
        var child = sibs.childNodes[0];
        var hiddenTextbox = parent.parentNode.nextElementSibling.firstElementChild
        var note = mainParent.childNodes[0].textContent;
        
        child.value = note;
       

        parent.style.display="none"
        hiddenTextbox.className = "show "
        hiddenTextbox.value = mainParent.firstElementChild.textContent
       console.log()
        hiddenTextbox.addEventListener('keypress',function(e){
            if(e.keyCode == 13){
                if(hiddenTextbox.value==='')
                {
                     alert("please enter something")
                }
                else{
                    note = hiddenTextbox.value;
                    mainParent.firstElementChild.textContent = note;
                    // mainParent.childNodes[0].textContent = note
                    parent.style.display="block"
                    hiddenTextbox.className = "hide "
                    // console.log(mainParent.firstElementChild.textContent)
                }
             
            }
         
          
        });
    
        
    }

});
// delete panel
ul.addEventListener('click',function(e){
    
    
    if(e.target.classList[1]=='fa-trash')
    {
        var removelist=e.target.parentNode.parentNode.parentNode;
        ul.removeChild(removelist)
               
    }
    

});
  // searching panel
  var searchInput = document.querySelector('#searchContainer input');
  searchInput.addEventListener('keyup',function(e){
            var searchChar = e.target.value.toUpperCase();
            var notes = ul.getElementsByTagName('li');
           Array.from(notes).forEach(function(note){
               var noteText = note.firstElementChild.firstElementChild.textContent;
               if(noteText.toUpperCase().indexOf(searchChar)!=-1)
               {
                   note.style.display = "block"
               }
               else{
                   note.style.display ="none";
               }

           })
  });


  // hide element 
  var hide = true;
  var label = document.querySelector('label');
  label.addEventListener('click',function(){
      var unhide ="Unhide List";
      var hiden = "Hide List"

    
     if(hide)
     {
        ul.style.display="none"
        label.textContent = unhide;
        hide=false;
     }
     else{
       ul.style.display = "block";
       label.textContent = hiden;
       hide = true;
     }
     
  })