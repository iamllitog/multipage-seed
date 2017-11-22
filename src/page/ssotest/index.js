import $ from 'jquery';
$(() => {
  $('#getToken').click(() => {
    $.ajax({
      type: 'POST',
      url: '/obt/api/admin/oa/login/getToken',
      data: JSON.stringify({
        appKey: 'mrnew',
        appSecurity: 'mrnew123',
      }),
      success: function(data, status) {
        $('#token').val(data.token);
        $('#form').submit();
      },
      dataType: 'json',
      contentType: 'application/json',
    });
  });
});
