$( function() {
  console.log('hello world');

  // Refer to this link to use sortable instead of draggable, and
  // connect two lists.
  // http://jqueryui.com/sortable/#connect-lists
  $( ".column-left, .column-right" ).sortable({
      connectWith: ".column"
    }).disableSelection();
});
