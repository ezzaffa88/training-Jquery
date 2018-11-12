$(document).ready(function(){
    $(".tobeAnimated").animate(
{
    width :'toggle',
    height: 'toggle',
    top: '60px',
    left: '50px',
    opacity : '0.2',
    borderRadius : '10px',


},1000);
$(".tobeAnimated").animate(
    {
        width :'toggle',
        height: 'toggle',
        left: '500px',
        top: '100px ',
        opacity : '1',
        borderRadius : '20px',
    
    
    },1000);
    $(".tobeAnimated").animate(
        {
           fontSize : '30px'
        });
        
})