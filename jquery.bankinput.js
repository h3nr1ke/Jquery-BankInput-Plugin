/**
 * BankInput - Emulates a numeric input including the "," in the text
 * Workaroudn for the Samsung galaxy android fail in the numeric keyboard
 * @author  Henrique Deodato <h3nr1ke@gmail.com>
 * @date 02/20/2015
 */
(function ( $ ) {
  $.fn.bankInput = function() {
    this.on("keyup",function(e){
      var val = jQuery(this).val().replace(",","").replace(".","");      //replace the comma and dots
      var valInt = parseInt(val);         //remove the zeros in the left
      val = valInt+"";                    //put the comma in the right place
      if(val.length == 0){                //adjust to speed up, use regex only when necessary
        return false;
      }
      else if(val.length == 1){
        val = "0.0"+val;
      }
      else if(val.length == 2 ){
        val = "0."+val;
      }
      else{
        val = val.replace(/((\d){1,})(\d{2})$/g, "$1.$3");
      }
      jQuery(this).val(val);                              //add the value in the element
      return true                            
    });
  }
}( jQuery ));