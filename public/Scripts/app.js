/* 
File name: app.css
Student name: Zhikun Fan
StudentID: 301250119
Date 09/30/2022
*/
// IIFE -- Immediately Invoked Function Expression


(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    Window.location.assign('/book-list');
                }
            });
        }
    }
    window.addEventListener("load",Start);
    
})();