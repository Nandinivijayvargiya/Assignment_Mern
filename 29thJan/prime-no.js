var number=prompt("Enter number");
  number=parseInt(number);
    if(isNaN(number))
    {
       alert("Please enter number");
    }
      var count=0;
        for(var i=1;i<=number;i++)
         {
	       if(number%i==0)
	       {
		     count++;
	       }
         }
          if(count==2)
          {
	        alert(number+" "+"is prime number");
          }
          else
          {
	        alert(number+" "+"is not prime number");
          }
