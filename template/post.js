import { getPost, getPostComments, getRandomPic,getRandomProfile,getAuthor } from './helpers.js';

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const params = urlParams.get('post_id'); // tempat menampung parameter yang ada

const elPageTitle = document.querySelector('#page-title');
const elDetailBerita = document.querySelector('#detail-berita');
const elLoading = document.querySelector('#loading');
const elNotFound = document.querySelector('#not-found');
const elCardImg = document.querySelector('.card-img-top');
const elCardText = document.querySelector('.card-text');
const elCardAuthorImg = document.querySelector('#author-img');
const elCardAuthorName = document.querySelector('#author-name');
const elCardAuthorEmail = document.querySelector('#author-email');
const elListGroup = document.querySelector('#list-group');

const createListElement = (comment) => {
  const elListItem = document.createElement('div');
  const elListItemContainer = document.createElement('div');
  const elListItemTitle = document.createElement('div');
  const elListItemText = document.createElement('span');

  elListItem.classList.add('list-group-item');
  elListItemContainer.classList.add('ms-2', 'me-auto');
  elListItemTitle.classList.add('fw-bold');

  elListItemTitle.innerHTML = comment.email;
  elListItemText.innerHTML = comment.body;

  elListItemContainer.appendChild(elListItemTitle);
  elListItemContainer.appendChild(elListItemText);
  elListItem.appendChild(elListItemContainer);

  return elListItem;
};

const renderPost = async () => {
  //EDIT HERE
  let post  = await getPost(params)
  let thumbnail;
  let authorProfile;
  let comments;
  let author;

  if(post){
    thumbnail = await getRandomPic()
    authorProfile = await getRandomProfile();
    comments = await getPostComments(params);
    author = await getAuthor(post[0].userId);
    
    comments.map(comment =>{
    let elListItem = createListElement(comment)
    elListGroup.appendChild(elListItem)
    })
    console.log(author);

    elDetailBerita.classList.remove('d-none');
    elLoading.classList.add('d-none');
    console.log(post)
    elPageTitle.innerHTML= post[0].title;
    elCardImg.setAttribute('src',`${thumbnail}`)
    elCardText.innerHTML=post[0].body
    elCardAuthorImg.setAttribute('src',`${authorProfile}`)
    elCardAuthorName.innerHTML=author[0].name
    elCardAuthorName.setAttribute('href',`./author.html?author_id=${author[0].id}`)
    elCardAuthorEmail.innerHTML=author[0].email
  } else {
    elNotFound.classList.remove("d-none");
    
  }
};

renderPost();
