// Реализовать функционал получения постов и комментариев к ним с сервера.

// 1. Получить список всех постов с эндпоинта https://jsonplaceholder.typicode.com/posts и отрисовать их на странице.
// 2. В каждом посте должна находится кнопка с текстом Show comments, которая отвечает за получение комментариев к этому конкретному посту.
// 3. При нажатии на кнопку, на сервер по адресу https://jsonplaceholder.typicode.com/posts/{postId}/comments (где ВМЕСТО postId должeн находится id поста) отправляется запрос, к которому необходимо запросить комментарии.
// 4. Полученные комментарии нужно отрендерить в посте (где-то под ним, выбов визуального оформления остается за вами).
// 5. Когда комментарии отрендерены, текст в кнопке необходимо заменить на Hide comments.
// 6. Повторное нажатие на кнопку (если комменты уже отрендерены), удаляет их с поста. Текст кнопки снова меняется на Show comments.

console.log('Homework 18');

const BASE_URL = "https://jsonplaceholder.typicode.com";
    

const renderPost = (post, container) => {
    const { title, body, id } = post;
  
    const postContainer = document.createElement('div');
    const titleElem = document.createElement('h2');
    const bodyElem = document.createElement('p');
    const commentElem = document.createElement('div');


    const buttonShowElem = document.createElement('button');
    const buttonHideElem = document.createElement('button');

    postContainer.classList.add('container');
    titleElem.classList.add('title');
    bodyElem.classList.add('text');

    buttonShowElem.classList.add('button');
    buttonHideElem.classList.add('button', 'button_hide');
  
    titleElem.innerText = title;    
    bodyElem.innerText = body;
    buttonShowElem.innerText = 'Show comments';
    buttonHideElem.innerText = 'Hide comments';

    
    buttonShowElem.addEventListener('click', () => {
        getComments(id, commentElem);

        buttonShowElem.classList.toggle('button_hide');
        buttonHideElem.classList.toggle('button_hide');
       
    })

    buttonHideElem.addEventListener('click', () => {
        commentElem.replaceChildren('');
  
        buttonShowElem.classList.toggle('button_hide');
        buttonHideElem.classList.toggle('button_hide');
         
      })
  
    postContainer.append(titleElem, bodyElem, commentElem, buttonShowElem, buttonHideElem);
  
    container.append(postContainer)
};

const renderComments = (comment, container) => {
    const { body } = comment;

    const commentContainer = document.createElement('div');
    const bodyComment = document.createElement('p');

    bodyComment.classList.add('comment');

    bodyComment.innerText = body;

    commentContainer.append(bodyComment);

    container.append(commentContainer);
}

const getPosts = (container) => {
    const postXhr = new XMLHttpRequest();
    
    postXhr.open("GET", `${BASE_URL}/posts`);
    postXhr.responseType = "json";
    postXhr.send();
    
    postXhr.onload = () => {
      const { response: arrayPost } = postXhr;

      arrayPost.forEach((elemPost) => {
        renderPost(elemPost, container);

      });
    };
}

const getComments = (postId, container) => {
    const commentsXhr = new XMLHttpRequest();
    commentsXhr.open("GET", `${BASE_URL}/posts/${postId}/comments`);
    commentsXhr.responseType = "json";
    commentsXhr.send();

        
    commentsXhr.onload = () => {
        const comment =  commentsXhr.response
        comment.forEach((elemComments) => {
            renderComments(elemComments, container);
        })
    };

}

getPosts(document.body);