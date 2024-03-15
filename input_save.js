function handleKeyPress(event,formId,inputId,targetId)
{
    
if (event.key === 'Enter')
{
event.preventDefault();
showtext(formId,inputId,targetId);}
};

function showtext(formId,inputId,targetId)
{
var form = document.getElementById(formId);
var input = document.getElementById(inputId);
var target = document.getElementById(targetId);
var texto = input.value;
target.innerHTML += `<p>${texto}</p> `;
form.style.opacity=0;
form.style.display="inline";
form.style.position="absolute";
};