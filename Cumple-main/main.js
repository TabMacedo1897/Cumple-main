// inicialize canvas
// faça um escutador de evento para o aúdio


function newImage()
{
	fabric.Image.fromURL('lupii.png', function(Img){
    blockImageObject = Img;
    blockImageObject.scaleToWidth(700)
    blockImageObject.scaleToHeight(510)
    blockImageObject.set({
        top: 0,
        left:0
    })
    canvas.add(blockImageObject)

    })
	
}
//faça a variavél x tocar o som
