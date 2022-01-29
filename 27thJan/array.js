var size=prompt("Enter the size of array:");
var array=[];
  for(var i=0;i<size;i++)
    {	  
      var temp=prompt("Enter the array:");
        temp=parseInt(temp);
          array[i]=temp;
	}
	console.log(array);
      var max=array[0];
	    for(var i=0;i<size;i++)
		{
			if(array[i]>max)
			{
				max=array[i];
			}
		}
		 alert("The maximum is:"+" "+max);
		 console.log(max);
