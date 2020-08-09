$(document).ready(function()
{
	var d=0,e=0,f=0,total=0;
	$("#myBtn").click(function()
	{
		d=$("#myBud").val();
		$(".expense").text("$"+d);
	});
	$("#myBtn2").click(function()
	{
		var f1=$("#myExp").val();
		e=$("#myExp1").val();
		$(".expense1").text("$"+e);
		$(".dataend1").append("<p style='color:red;'>"+f1+"</p>");
		$(".dataend2").append("<p style='color:red;'>"+e+"</p>");
		f=f+Number(e);
	});
	$("#myBtn1").click(function()
	{
		total=d-f;
		$(".expense1").text("$"+f);
		$(".expense2").text("$"+total);
	});
});