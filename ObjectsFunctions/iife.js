/********
 * IMEDIATELY INVOKED FUNCTION EXPRESSIONS
 */

 // wrapping this anonymous function inside paranthesis to let know javascript its 
 // not function delcration or statement its function expression because anything inside 
 // paranthesis cannot be a statement 
 // If we don't want our variable inside function not to access outside to make data 
 // privacy we use IIFE

(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(4);