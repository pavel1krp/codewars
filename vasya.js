function tickets(peopleInLine)
{
    let h = 0;
    let f = 0;
    let t = 0;
    for(i = 0; i< peopleInLine.length; i++)
    {if  (peopleInLine[i] == 25){ 
        t += 1;
    }
    else if(peopleInLine[i] == 50){
        if (t > 0){
            f +=1;
            t -= 1;
        }
        else {
            return "NO";
        }
    }
    else {
        if( f>0 && t> 0){
        t -= 1;
        f -= 1;
        h += 1;
    }
     else if(t >=3){
         t -= 3;
         h +=1;
     }  
     else
    {
         return "NO";
    }
    }
}
return "YES";
}