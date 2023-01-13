function solution(n, words) {
  var answer = [];
  // console.log(n,words);
  
  const stack =[];

  
  for(let i=0; i<words.length; i++){
      stack.push(words[i]);
      if( stack.length > 1 &&
          (stack[0].slice(stack[0].length-1) === stack[1].slice(0,1))){
          stack.pop();
          stack.pop();
          stack.push(words[i]);
      }else{
          console.log(i)
      }
      
    
  }
  

  return answer;
}