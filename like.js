function likeOrDislike(buttons) {
  like = buttons.filter(el => el === 'Like');
  disLike = buttons.filter(el => el === 'Dislike');
  if(buttons.length === 0){
    return "Nothing";
  } else if(like.length ===0 && disLike % 2 ===0){
    return "Nothing";
  }else if(like.length ===0 && disLike % 2 ===1){
    return "DisLike"
  }else if(disLike.length ===0 && like % 2 ===0){
    return "Nothing"
  } else if(disLike.length === 0 && like % 2 ===0){
    return "Like"
  }else if(disLike.length % 2)
  
}
console.log(likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike']))