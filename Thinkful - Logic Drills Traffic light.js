function updateLight(current) {
  const colors = {
    green: "yellow",
    yellow: "red",
    red: "green"
  };

  return colors[current];
}

// function updateLight(current) {
//   const colors = ["green", "yellow", "red"];
//   const color_index = colors.indexOf(current) + 1

//   if(color_index > 2) return colors[0]

//   return colors[color_index];
// }
