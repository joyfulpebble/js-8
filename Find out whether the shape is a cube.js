function cubeChecker(volume, side) {
  if(volume <= 0) return false;
  if(side <= 0) return false;
  
  const cube = side **3;
  if(volume != cube) return false;
  
  return true;
}