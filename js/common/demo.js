$(function()
{

	if (!window['console'])
	{
		window.console = {};
		window.console.log = function(){};
	}
		
	/*
	define a new language named "custom"
	*/
	$('#date-range13').dateRangePicker(
	{
		autoClose: true,
		singleDate : true,
		singleMonth: true,
		showShortcuts: false 
	});
	
	$('#date-range13-2').dateRangePicker(
	{
		autoClose: true,
		singleDate : true,
		showShortcuts: false,
		singleMonth: true
	});

	$('#date-range14').dateRangePicker(
	{
		batchMode: 'week',
		showShortcuts: false,
		singleMonth: true
	});
});
