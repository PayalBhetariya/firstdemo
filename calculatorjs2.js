
        function add()
        {
          var num1, num2, sum;
          num1 = parseInt(document.getElementById("firstnumber").value);
          num2 = parseInt(document.getElementById("secondnumber").value);
          sum = num1 + num2;
          document.getElementById("answer").value = sum;
        }
        function minus()
        {
          var num1, num2, sub;
          num1 = parseInt(document.getElementById("firstnumber").value);
          num2 = parseInt(document.getElementById("secondnumber").value);
          sub = num1 - num2;
          document.getElementById("answer").value = sub;
        }
        function divide()
        {
          var num1, num2, division;
          num1 = parseInt(document.getElementById("firstnumber").value);
          num2 = parseInt(document.getElementById("secondnumber").value);
          division = num1 / num2;
          document.getElementById("answer").value = division;
        }
        function into()
        {
          var num1, num2, multi;
          num1 = parseInt(document.getElementById("firstnumber").value);
          num2 = parseInt(document.getElementById("secondnumber").value);
          multi = num1 * num2;
          document.getElementById("answer").value = multi;
        }
 