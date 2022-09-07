// Setting Up Variables 

let theInput = document.querySelector(".add-task input") ; 
let theAddButton = document.querySelector(".add-task .plus") ;
let TasksContainer = document.querySelector(".tasks-content") ; 
let noTasksmessages = document.querySelector(".no-tasks-message"); 
let taskscount = document.querySelector(".tasks-count span"); 
let taskscompleted = document.querySelector(".tasks-completed span");


// Focus on input Field 
window.onload = function() { 
    theInput.focus();
};
// fun compare 
function comparing (a) {
    let cnt = 0 ; 
    for (let i = 0 ; i<a.length ; i++) {
        if (a[i]===theInput.value) { 
            cnt++ ;
            break; 
        }
    } 
    if (cnt === 1) { 
        return 7 ;  
    }
    else { 
        return true ; 
    }
}
// Adding the task 
let textChecker = []; 
let cnt = 0 ; 
theAddButton.onclick = function() {
    // if input is Empty 
    if (theInput.value === "" ) { 
        swal("Your Text is empty !" ,"try add text and try again.." , "error") ;
        return 0 ;
    }
    if (comparing(textChecker) === 7) { 
        swal("You Write this Task Before !" ,"try add new task and try again.." , "warning") ;
    }
    else { 
        textChecker[cnt] = theInput.value ;
        cnt++ ; 
        console.log(textChecker , cnt);
        // Remove no tasks messages 
        noTasksmessages.remove();

        // Create Span Element 
        let mainSpan = document.createElement("span") ;

        // Create Delete btn 
        let deleteElement = document.createElement("span") ; 

        // Add text to main span 
        let SpanText = document.createTextNode(theInput.value) ; 


        // Add deltetext to delete span 
        let DelteText = document.createTextNode("Delete") ; 

        // Append Text 
        mainSpan.appendChild(SpanText); 
        deleteElement.appendChild(DelteText);

        // ADD Class to span 
        mainSpan.className = 'task-box';
        deleteElement.className = 'delete';

        // Add Delete to main span 
        mainSpan.appendChild(deleteElement);
        // to explain   <span class="task-box">Task one <span class="delete">Delete</span></span>

        // Add the task to the container 
        TasksContainer.appendChild(mainSpan);

        // Empety The input 
        theInput.value='';

        //foucs again
        theInput.focus();
    }
};

document.addEventListener('click' , function(eventt) {
// Delete Task 
if (eventt.target.className == 'delete') { 
eventt.target.parentNode.remove();
}
// fininsh task 
if (eventt.target.classList.contains('task-box')){ 
    eventt.target.classList.toggle("finished") ;
}

}) ;













// Sweet Alert 
// swal("TO DO List" ,"project with js !" , "success") ;
