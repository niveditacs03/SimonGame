// var randomNumber=Math.floor(Math.random()*4);
var buttonColors=["red", "blue", "green", "yellow"]
var randomButtons=[]
var userClicks=[]
var level=1
$("body").on("keydown",function()
{
    if (userClicks.length === 0) {
        users(); 
    }
})

$(".btn").on("click",function()
{
    var color=$(this).attr("id")
    userClicks.push(color)
    soundPlay(color)
    animatePress(color)
    
    if (arraysEqual(userClicks, randomButtons))
        {
            level+=1
            userClicks=[]
            setTimeout(() => {
                users()
            }, 1000);
        }
    })
    function randomColor()
    {
        var randomNumber=Math.floor(Math.random()*4);
        var randomColor=buttonColors[randomNumber];
        $("."+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
        soundPlay(randomColor) 
        return randomColor
    }
    animatePress(randomColor)
    function soundPlay(randomColor)
    {
        
        if(randomColor=="blue")
            {
                var audio = new Audio ('sounds/blue.mp3')
            }
            else if(randomColor=="red")
                {
                    var audio = new Audio ('sounds/red.mp3')
                    
                }
                else  if(randomColor=="green")
                    {
                        var audio = new Audio ('sounds/green.mp3')
                        
                    }
                    else if(randomColor=="yellow")
                        {
                            var audio = new Audio ('sounds/yellow.mp3')
                        }
                        else
                        {
                            var audio = new Audio ('sounds/wrong.mp3') 
                            setTimeout(() => {
                                $("body").css("background-color",red)
                            }, 200);    
                        }
                        audio.play();
                        animatePress(randomColor)
                    }
                    function animatePress(currentColor)
                    {
                        $("."+currentColor).addClass('pressed')
                        setTimeout(() => {
                            $("."+currentColor).removeClass('pressed')
                        }, 100);
                    }
                    function users()
                    {
                        document.querySelector("h1").textContent="LEVEL:"+level
                        userClicks=[]
                        var col =randomColor()
                        randomButtons.push(col)
                    }
                    function arraysEqual(a, b) {
                        if (a.length !== b.length) return false;
                        for (var i = 0; i < a.length; i++) {
                            if (a[i] !== b[i])
                                {
                                    soundPlay('wrong')
                                    return false
                                };
                        }
                        return true;
                    }