var loc = "chrisperkins:~$ "

window.onload = function ()
{
    document.getElementById("terminal").innerHTML += "<p>"+ loc +//non-editable location
            "<span id=\"input\" contenteditable=\"true\"></span></p>";//editable text
    
    // Prevent paste
    document.getElementById("terminal").addEventListener("paste", handlePaste);
    // Focus on click
    document.getElementById("terminal").addEventListener("click", clickFunction);
    // New line on enter
    document.getElementById("terminal").addEventListener("keydown", enterCheck);
    focusInput();
}

function clickFunction(e)
{
    //placeCaretAtEnd(document.getElementById("input"));
    focusInput();
}

// Disallow paste
function handlePaste (e)
{
    // Stop data being directly pasted into div
    e.stopPropagation();
    e.preventDefault();
}

// Focus on input line
function focusInput()
{
    document.getElementById("input").focus();
}

function enterCheck(e)
{
    // If we pressed enter...
    if (e.keyCode == 13)
    {
        // Do something with the text entered...
        //alert(document.getElementById("input").textContent);

        // Make this line non-editable
        document.getElementById("input").contentEditable = false;
        // No longer a valid input, so set it to past input
        document.getElementById("input").setAttribute("id", "pastInput");
        
        // Append our line beginning again!
        document.getElementById("terminal").innerHTML += "<p>" + loc + //non-editable location
            "<span id=\"input\" contenteditable=\"true\"></span></p>";//editable text
        focusInput();
    } 
}

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") 
    {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } 
    else if (typeof document.body.createTextRange != "undefined")
    {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}