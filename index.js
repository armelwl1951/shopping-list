$('.shopping-list').on('click', '.shopping-item-toggle', function() {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

  $('#js-shopping-list-form').on('submit', function(even) {
    event.preventDefault();
    var listItem = $('#shopping-list-entry').val();

    $('#shopping-list-entry').val('');
    $('.shopping-list').append(
          `<li>
      <span class = 'shopping-item'>${listItem}</span>
      <div class = 'shopping-item-controls'>
        <button class = 'shopping-item-toggle'>
          <span class = 'button-label'>check</span>
        </button>
        <button class = 'shopping-item-delete">
          <span class = 'button-label'>delete</span>
        </button>
      </div>
    </li>`);
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function() {
$(event.target).closest('li').remove(  );
});