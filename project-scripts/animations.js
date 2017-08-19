$(document).ready(function() {
  $('table tr td').hover(function() {
    $('~ .project-name h3', this).animate({left:"+=25px"}, 300);
  },
  function() {
    $('~ .project-name h3', this).animate({left:"-=25px"}, 200);
  });
//  $('.resume-section').accordion({collapsible:true});
});
