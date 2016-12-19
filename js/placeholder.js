$(function() {
  if(!isSupportPlaceholder()) {
    $('input').not("input[type='password']").each(
      function() {
        var self = $(this);
        var val = self.attr("placeholder");
        input(self, val);
      }
    );
    
    $('input[type="password"]').each(
      function() {
        var pwdField    = $(this);  
        var pwdVal      = pwdField.attr('placeholder');  
        var pwdId       = pwdField.attr('id');  
        pwdField.after('<input id="' + pwdId +'1" type="text" value='+pwdVal+' autocomplete="off" />');  
        var pwdPlaceholder = $('#' + pwdId + '1');  
        pwdPlaceholder.show();  
        pwdField.hide();  
          
        pwdPlaceholder.focus(function(){  
          pwdPlaceholder.hide();  
          pwdField.show();  
          pwdField.focus();  
        });  
          
        pwdField.blur(function(){  
          if(pwdField.val() == '') {  
            pwdPlaceholder.show();  
            pwdField.hide();  
          }  
        });  
      }
    );
  }
});

function isSupportPlaceholder() {
  var input = document.createElement('input');
  return 'placeholder' in input;
}

function input(obj, val) {
  var $input = obj;
  var val = val;
  $input.attr({value:val});
  $input.focus(function() {
    if ($input.val() == val) {
      //$(this).attr("value","");
      $(this).val("");
    }
  }).blur(function() {
    if ($input.val() == "") {
      //源文档用attr，但attr对于由用户输入再次切换到无值的时候不起作用，因为attr只改变了原始值而没有改变框中的实际值，因此改用val --luo
      //$(this).attr("value",val);
      $(this).val(val);
    }
  });
}

		