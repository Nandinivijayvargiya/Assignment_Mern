var string=prompt("Enter string");
  var count=0;
    for(var i=0;i<string.length;i++)
    {
	  var s =string.split("");
	    if (s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u'||s[i]=='A'||s[i]=='E'||s[i]=='I'||s[i]=='O'||s[i]=='U')
        {
          count=count+1;
        }
    }
      alert("The vowels present in your given string are:"+count);
	