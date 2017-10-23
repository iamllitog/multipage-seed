// 引用样式
import 'purecss/build/pure-min.css';
import './style.css';
// 引用layout
import 'layout/main';
// 引用工具
import MyUtil from 'common/util';
import $ from 'jquery';

const app = {
  init: function() {
    this.initEvent();
    this.initView();
  },
  initEvent: function() {
    $('#searchHint').click(function() {
      $('#searchInput').focus();
    });
    $('#searchInput').focus(function() {
      $('#searchHint').hide();
    }).blur(function() {
      if ($(this).val() === '') $('#searchHint').show();
    });
    $('.filter-info .dropdown').hover(function() {
      $(this).find('.droplist').show();
    }, function() {
      $(this).find('.droplist').hide();
    });
    $(window).resize(function() {
      var contentBox = $('#live-list-contentbox');
      var contextWidth = contentBox.width();
      var classNum = parseInt(contextWidth / 330) + 1;
      if (classNum > 10) classNum = 10;
      var className = 'x' + classNum;

      for (var i = 1; i <= 10; i++) {
        contentBox.removeClass('x' + i);
      }
      contentBox.addClass(className);
    });
    $('.pageChange').click(function() {
      if ($(this).hasClass('shark-pager-disable')) return;
      if ($(this).hasClass('current')) return;
      var pageNum = parseInt($(this).attr('data-page'));
      if (isNaN(pageNum)) {
        alert('页码必须是数字');
        return;
      }
      if (pageNum < 1) {
        alert('页码不能小于1');
        return;
      }
      let params = MyUtil.query2Dict(window.location);
      params.pageNum = pageNum;
      window.location.href = '?' + $.param(params);
    });
    $('.categoryChange').click(function() {
      var category = $(this).attr('data-category');
      let params = MyUtil.query2Dict(window.location);
      delete params.pageNum;
      params.category = category;
      if ($.trim(category) === '') delete params.category;
      window.location.href = '?' + $.param(params);
    });
    $('.platformChange').click(function() {
      var platform = $(this).attr('data-platform');
      let params = MyUtil.query2Dict(window.location);
      delete params.pageNum;
      params.platform = platform;
      if ($.trim(platform) === '') delete params.platform;
      window.location.href = '?' + $.param(params);
    });
    $('#pageJumpInput').bind('input porpertychange', function() {
      $('#pageJumpBt').attr('data-page', $(this).val());
    });
  },
  initView: function() {
    $(window).resize();
    if ($('#searchInput').val() !== '') $('#searchHint').hide();
  },
};

$(function() {
  app.init();
});
