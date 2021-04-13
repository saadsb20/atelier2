$(function () {
	
	$('.clc').click(function () {
		$('#display').val($('#display').val() + $(this).val());
	});

	$('.clear').click(function () {
		$('#display').val(' ');
	});
	$('#equal').click(function () {
		$('#display').val(eval($('#display').val()));
	});
	$('#CE').click(function () {
		$('#display').val($('#display').val().slice(0, -1))
	})

});