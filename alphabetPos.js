function alphabetPosition(text) {
  text = text.split('')
  for(let i=0; i<text.length;i++){
    if(text[i]==="A" || text[i]==="a"){
      text[i] = 1
    } else if(text[i]==="B" || text[i]==="b"){
      text[i] = 2
    }else if(text[i]==="B" || text[i]==="b"){
      text[i] = 2
    }else if(text[i]==="C" || text[i]==="c"){
      text[i] = 3
    }else if(text[i]==="D" || text[i]==="d"){
      text[i] = 4
    }else if(text[i]==="E" || text[i]==="e"){
      text[i] = 5
    }else if(text[i]==="F" || text[i]==="f"){
      text[i] = 6
    }else if(text[i]==="G" || text[i]==="g"){
      text[i] = 7
    }else if(text[i]==="H" || text[i]==="h"){
      text[i] = 8
    }else if(text[i]==="I" || text[i]==="i"){
      text[i] = 9
    }else if(text[i]==="J" || text[i]==="j"){
      text[i] = 10
    }else if(text[i]==="K" || text[i]==="k"){
      text[i] = 11
    }else if(text[i]==="L" || text[i]==="l"){
      text[i] = 12
    }else if(text[i]==="M" || text[i]==="m"){
      text[i] = 13
    }else if(text[i]==="N" || text[i]==="n"){
      text[i] = 14
    }else if(text[i]==="O" || text[i]==="o"){
      text[i] = 15
    }else if(text[i]==="P" || text[i]==="p"){
      text[i] = 16
    }else if(text[i]==="Q" || text[i]==="q"){
      text[i] = 17
    }else if(text[i]==="R" || text[i]==="r"){
      text[i] = 18
    }else if(text[i]==="S" || text[i]==="s"){
      text[i] = 19
    }else if(text[i]==="T" || text[i]==="t"){
      text[i] = 20
    }else if(text[i]==="U" || text[i]==="u"){
      text[i] = 21
    }else if(text[i]==="V" || text[i]==="v"){
      text[i] = 22
    }else if(text[i]==="W" || text[i]==="w"){
      text[i] = 23
    }else if(text[i]==="X" || text[i]==="x"){
      text[i] = 24
    }else if(text[i]==="Y" || text[i]==="y"){
      text[i] = 25
    }else if(text[i]==="Z" || text[i]==="z"){
      text[i] = 26
    } else{
      text[i] =' '
    }
  }
  return text.filter(el => el!=' ').join(' ');
}