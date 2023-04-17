function uniTotal (string) {
  let result = 0; 
  
  for (var i = 0; i < string.length; i++) result += string.charCodeAt(i);
  
  return result;
}