let sliderImages = document.querySelectorAll("slide"),
            arrowLeft = document.quarySelector('#arrow-left'),
            arrowRight = document.quarySelector('#arrow-right'),
            current = 0;
            
            //clear all images
        function reset(){
            for(let i = 0; i < sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }
        }    

         //initial slider
         function startSlide(){
             reset();
            sliderImages[0].style.display='block';
        }
       
        //showing previous one
        function slideLeft(){
            reset();
            sliderImage[current -1].style.display = 'block';
            current--;
        }

        //show next
        function slideRight(){
            reset();
            sliderImage[current + 1].style.display = 'block';
            current++;
        }

        //left arrow click
        arrowLeft.addEventListener('click', function(){
            if (current === 0){
                current = sliderImages.length;
            }
            slideLeft();
        }); 


        //right arrow click 

        arrowRight.addEventListener('click', function(){
            if (current === sliderImages.length -1){
                current = -1;
            }
            slideRight();
        }); 

        startSlide();