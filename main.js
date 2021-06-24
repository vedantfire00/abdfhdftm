var canvas=new fabric.Canvas("myCanvas");
px = 10;
py = 10;
blockimwi = 30;
blockimhe = 30;
var po = " " ;
var bo = " " ;
function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){   
        po = Img;
        po.scaleToWidth(150);
        po.scaleToHeight(140);
        po.set({
            top:py,
            left:px 

        }); 
        canvas.add(po);
    });


}
function new_image(get_image)
{
   fabric.Image.fromURL(get_image,function(Img){
       bo = Img;
       bo.scaleToWidth(blockimwi);
       bo.scaleToHeight(blockimhe);
       bo.set({
        top:py,
        left:px 

    }); 
    canvas.add(bo);
    });
}