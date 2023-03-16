const users = [
    {
        id: 1,
        name: 'Kien Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Van Dinh'
    }
]

const comments = [
    {
        id: 1,
        user_id: 1,
        content: 'sao chưa ra video anh ơi'
    },
    {
        id: 2,
        user_id: 2,
        content: 'vừa ra xong em ơi'
    },
    {
        id: 3,
        user_id: 3,
        content: 'cam ơn anh'
    },
    {
        id: 4,
        user_id: 1,
        content: 'chém gió cho vui'
    }
]
// const userComment = [];
// comments.forEach(function(comment){
//     const dulieu = users.find(function(user){
//         return user.id === comment.user_id
//     })
//     // console.log(dulieu)
//  if ( dulieu.id === 1 ){
//             const commentsId1 = {
//             id : dulieu.id, 
//             name : dulieu.name,
//             content : comment.content
//         }
//         userComment.push(commentsId1)
//  }
//  if ( dulieu.id === 2 ){
//             const commentsId2 = {
//             id : dulieu.id, 
//             name : dulieu.name,
//             content : comment.content
//         }
//         userComment.push(commentsId2)
//  }
//  if ( dulieu.id === 3 ){
//             const commentsId3 = {
//             id : dulieu.id, 
//             name : dulieu.name,
//             content : comment.content
//         }
//         userComment.push(commentsId3)
//  }
// })
// console.log(userComment);
// function render(cmt){
//     return `<li><p>${cmt.name+':'+cmt.content}</p></li>`
// }
// function renderComment(userComment){
//     let list = document.getElementById('comment')
//     list.innerHTML = userComment.map((user) => render(user)).join('');
// }
// renderComment(userComment)

const commentBlock = document.getElementById('comment');
var html = '';
comments.forEach(function (comment) {
    //  user tham gia comment này
    const user = users.find(function (user) {
        return user.id === comment.user_id;
    })
    html += `<li><strong>${user.name}</strong>: ${comment.content}</li>`;
});
commentBlock.innerHTML = html;