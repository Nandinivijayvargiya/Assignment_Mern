var size=prompt("Enter the size of array:");
var array=[];
  for(var i=0;i<size;i++)
    {	  
      array[i]=prompt("Enter the array:");
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