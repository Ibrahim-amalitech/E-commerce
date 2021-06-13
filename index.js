let product_info=[{
       "name": "BOYS PULLOVER LIGHT PINK",
       "color": "bright peach",
       "price": "$47",
       "image": "./imgs/bright_peach0.jpg"
    },

    {
        "name": "BOYS PULLOVER ASH",
        "color": "light gray heather",
        "price": "$46",
        "image": "./imgs/light_gray_heather0.jpg"
     },
     

     {
        "name": "BOYS PULLOVER MAGENTA",
        "color": "flat blue",
        "price": "$50",
        "image": "./imgs/flat_blue0.jpg"
     },
     
     {
        "name": "BOYS PULLOVER BLUE",
        "color": "hull blue",
        "price": "$54",
        "image": "./imgs/hull_blue0.jpg"
     }]

      

     
    
         //DISPLAY VARIOUS COLOURS WHEN HOVERING ON BUTTONS
         
      function myClickFunction(){
            $('.column').html('<img id="theImg" src="./imgs/bright_peach0.jpg" />');
            $("#prod_Name").html(product_info[0].name)
            $("#produt_color").html("Color:" + " " +product_info[0].color)
            $("#produt_price").html("Price:" + " " +product_info[0].price)
            }
            
            function myClickFunction2(){
            $('.column').html('<img id="theImg" src="./imgs/light_gray_heather0.jpg" />')
            $("#prod_Name").html(product_info[1].name);
            $("#produt_color").html("Color:" + " " +product_info[1].color)
            $("#produt_price").html("Price:" + " " +product_info[1].price)
                 }
         function myClickFunction3(){
            $('.column').html('<img id="theImg" src="./imgs/flat_blue0.jpg" />')
            $("#prod_Name").html(product_info[2].name);
            $("#produt_color").html("Color:" + " " +product_info[2].color)
            $("#produt_price").html("Price:" + " " +product_info[2].price)
                    }

         function myClickFunction4(){
            $('.column').html('<img id="theImg" src="./imgs/hull_blue0.jpg" />')
            $("#prod_Name").html(product_info[3].name);
            $("#produt_color").html("Color:" + " " +product_info[3].color)
            $("#produt_price").html("Price:" + " " +product_info[3].price)
                       }         
              
      function choose_size() {
      alert('Choose a size to continue')
      };  
//ADD PRODUCT INFO ON CART PAGE FUNCTION(NOT COMPLETE)
function cartPageAddInfo(){
   $('#theImgPopup').html($("#theImg").html());
             $("#prod_NamePopup").html($("#prod_Name").html());
             $("#produt_colorPopup").html($("#produt_color").html());
             $("#produt_pricePopup").html($("#produt_price").html());
     
 };

   //ADD TO BAG- POP UP 
 
      function showPopWindow(){
         window.open('./popup.html','popup','width=600,height=600'); return false;}
  
      $(document).ready(function(){
      $("#add-to-cart").click(function(){
         alert("Select a size and continue"); 
         $("#choosesize").click(showPopWindow());
       });
        });

     
       
       
 /* $(document).on('click', "#add-to-cart", function() {
   alert("Select a size and continue");
    $("#choosesize").click();
});

function click_on_link()
{
  showPopWindow();
}; */