document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete');
  deleteButton.addEventListener('click', handleDeleteClick);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const titleInput = document.querySelector('#title');
  const bookTitle = titleInput.value;

  const authorInput = document.querySelector('#author');
  const bookAuthor = authorInput.value;

  const categoryChange = document.querySelector('#category');
  const bookCategory = categoryChange.value;

  const readingListDiv = document.querySelector('#reading-list');

  const newList = document.createElement('ul');
  const newBookTitle = document.createElement('li');
  const newBookAuthor = document.createElement('li');
  const newBookCategory = document.createElement('li');

  readingListDiv.appendChild(newList);
  newList.appendChild(newBookTitle);
  newList.appendChild(newBookAuthor);
  newList.appendChild(newBookCategory);

  newBookTitle.textContent = bookTitle;
  newBookAuthor.textContent = bookAuthor;
  newBookCategory.textContent = bookCategory;

  document.getElementById('new-item-form').reset();
};

const handleDeleteClick = function () {
  const readingListDiv = document.querySelectorAll('ul');
  readingListDiv.forEach(element => {
    element.remove();
  });
};
