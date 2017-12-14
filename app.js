
// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Some code
    
})();


// UI CONTROLLER
var UIController = (function() {
   
    return{
        getInput: function(){

            return {
                 type: document.querySelector('.add__type').value, // Will be either inc or exp
                 description: document.querySelector('.add__description').value,
                 value: document.querySelector('.add__value').value
            }
        }

    }

})();

 
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem  = function() {

         // 1. Get filled input data
         var input = UICtrl.getInput();
         console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add new item to UI

        // 4. Calculate budget

        // 5. Display budget on UI
        
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){

        if (event.keyCode === 13){
            ctrlAddItem();
        }
    });
    
})(budgetController, UIController);