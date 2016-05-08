

//***************************************************
function mousePageXY(e)
{
  var x = 0, y = 0;

  if (!e) e = window.event;

  if (e.pageX || e.pageY)
  {
    x = e.pageX;
    y = e.pageY;
  }
  else if (e.clientX || e.clientY)
  {
    x = e.clientX + 
      (document.documentElement.scrollLeft || document.body.scrollLeft) - 
      document.documentElement.clientLeft;
    y = e.clientY + 
      (document.documentElement.scrollTop || document.body.scrollTop) - 
      document.documentElement.clientTop;
  }
  return {"x":x, "y":y};
}
