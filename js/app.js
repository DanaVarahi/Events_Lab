document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form =document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSave)

  const deleteButton = document.createElement('button')
  const body = document.querySelector('body')
  deleteButton.textContent = 'delete'
  deleteButton.classList.add('delete')
  body.appendChild(deleteButton)
  deleteButton.addEventListener('click', handleDelete)
})

const handleDelete = function(){
  const readingList =document.querySelector('#reading-list')
  readingList.innerHTML = ""
}

const handleFormSave = function(event){
  event.preventDefault()
 
  const readingList = document.querySelector('#reading-list')
  const listItem =document.createElement('li')
  readingList.appendChild(listItem)

  const readingListTitle = document.createElement('p')
  readingListTitle.textContent = `Title: ${event.target.title.value}`
  listItem.appendChild(readingListTitle)

  const readingListAuthor = document.createElement('p')
  readingListAuthor.textContent = `Author: ${event.target.author.value}`
  listItem.appendChild(readingListAuthor)

  const readingListCategory = document.createElement('p')
  readingListCategory.textContent =`Category: ${event.target.category.value}`
  listItem.appendChild(readingListCategory)

  document.querySelector('#new-item-form').reset()

}
