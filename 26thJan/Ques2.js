var s=prompt("Enter the letter");

if (s=='a'||s=='e'||s=='i'||s=='o'||s=='u'||s=='A'||s=='E'||s=='I'||s=='O'||s=='U')
{
	alert("The letter is vowel");
}
else if((s>='a' && s<='z' )||(s>='A' && s<='Z'))
{
	alert("The letter is consonant");
}
else
{
	alert("You entered symbol or number");
}


