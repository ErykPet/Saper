let Buttons=[];
let n=0;
let x;
let o;
restart();
function restart(button)
{ 
    setTimeout(() => {
        do {
            o =prompt("Podaj rozmiar planszy:");
        } while (o<8);
        start();
    }, 20);
        
}
function start()
{
    if(n!=0)
    {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
            Buttons[i][j].remove();
            
            }
            
        }
    }
    Buttons = [];
    n=o;
    o=0;
    for(let i=0; i < n;i++)
    {
        Buttons[i]=[];
        for(let j=0; j < n;j++)
    {
        let button = document.createElement('button');
        button.classList.add("buttonc");
        button.id = i + " " + j;
        Buttons[i].push(button);
        button.onclick = function() {FirstTimeClicked(this)};
        document.body.appendChild(button);
        console.log();
        button.style.left = 84*i+window.screen.width/4+ "px";
        button.style.top = 84*j+20+"px";
    }
    }
    
    console.log(Buttons);
}
function FirstTimeClicked(button)
{
    const myArray = button.id.split(" ");
    let i=parseInt(myArray[0]);
    let j=parseInt(myArray[1]);
    let B =[];
    
    B.push(Buttons[i+1][j]);
    B.push(Buttons[i-1][j]);
    B.push(Buttons[i+1][j+1]);
    B.push(Buttons[i-1][j+1]);
    B.push(Buttons[i+1][j-1]);
    B.push(Buttons[i-1][j-1]);
    B.push(Buttons[i][j+1]);
    B.push(Buttons[i][j-1]);

for(let i=0;i<(n*n)*0.15;i++)
{
    let xi = 0;
    let yi = 0;
    do{
        xi = Math.floor(Math.random()*n);
        yi = Math.floor(Math.random()*n);
    }while(B.includes(Buttons[xi][yi]))
    document.getElementById(xi+ " "+yi).setAttribute("bomb",1);
    B.push(Buttons[xi][yi]);
}

for(let i=0; i < n;i++)
{

    for(let j=0; j < n;j++)
{
        if(!B.includes(Buttons[i][j]))
        {
            document.getElementById(i+ " "+j).setAttribute("bomb",0);
        }
        document.getElementById(i+ " "+j).onclick = function() {ButtonClicked(this)};
}



}
Show(button);  
ShowS(button);
}
function ButtonClicked(button)
{
    //console.log(button);
    let x=button.getAttribute("bomb");
    if(x!=1)
    {  
        Show(button); 
    }else{
        button.classList.remove("buttonc");
        button.classList.add("BOMB");
        console.log(button.classList);
        console.log();
        restart(button);
    }
}
function Show(button)
{
    if(button.classList.contains("buttonc"))
    {
        button.classList.remove("buttonc");
        button.innerHTML += CalcBombs(button);
        button.style.color = rgb(128*(CalcBombs(button)),128/(CalcBombs(button)+1),0);
        button.classList.add("clickedbutton");
        if(CalcBombs(button) == 0)
        {
        ShowS(button);
        }
    }
}
function CalcBombs(button)
{
    let a=0;
    const myArray = button.id.split(" ");
    let i=parseInt(myArray[0]);
    let j=parseInt(myArray[1]);
    let B =[];
    if(i+1<n && i+1>=0)
    {
        B.push(Buttons[i+1][j]);
        if(j+1<n && j+1>=0)
        {
            B.push(Buttons[i+1][j+1]);
        }
        if(j-1<n && j-1>=0)
        {
            B.push(Buttons[i+1][j-1]);
        }
        
    }
    if(i-1<n && i-1>=0)
    {
        B.push(Buttons[i-1][j]);
        if(j+1<n && j+1>=0)
        {
            B.push(Buttons[i-1][j+1]);
        }
        if(j-1<n && j-1>=0)
        {
            B.push(Buttons[i-1][j-1]);
        }
        
    }
    if(j+1<n && j+1>=0)
    {
        B.push(Buttons[i][j+1]);
    }
   if(j-1<n && j-1>=0)
   {
    B.push(Buttons[i][j-1]); 
   }
   for(let i=0;i<B.length;i++)
   {
    if(B[i].getAttribute("bomb") == 1)
    {
        a++;
    }
    
   }
    
    return a;
}
function ShowS(button)
{
    const myArray = button.id.split(" ");
    let i=parseInt(myArray[0]);
    let j=parseInt(myArray[1]);
    let B =[];
    if(i+1<n && i+1>=0)
    {
        B.push(Buttons[i+1][j]);
        if(j+1<n && j+1>=0)
        {
            B.push(Buttons[i+1][j+1]);
        }
        if(j-1<n && j-1>=0)
        {
            B.push(Buttons[i+1][j-1]);
        }
        
    }
    if(i-1<n && i-1>=0)
    {
        B.push(Buttons[i-1][j]);
        if(j+1<n && j+1>=0)
        {
            B.push(Buttons[i-1][j+1]);
        }
        if(j-1<n && j-1>=0)
        {
            B.push(Buttons[i-1][j-1]);
        }
        
    }
    if(j+1<n && j+1>=0)
    {
        B.push(Buttons[i][j+1]);
    }
   if(j-1<n && j-1>=0)
   {
    B.push(Buttons[i][j-1]); 
   }
   for(let i=0;i<B.length;i++)
   {
        ButtonClicked(B[i]);
   }
}
function rgb(r, g, b){
    return ["rgb(",r,",",g,",",b,")"].join("");
  }

  
