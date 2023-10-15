// // Получаем данные из формы
// document.querySelector('.contacts__btn').addEventListener('click', (event) => {



//     var formData = new FormData(document.getElementById("modalContactForm"));

//     // Создаем новый XMLHttpRequest объект
//     var xhr = new XMLHttpRequest();

//     // Настраиваем запрос
//     xhr.open("POST", "http://users.bugred.ru/tasks/rest/doregister", true);

//     // Отправляем данные формы
//     xhr.send(formData);

//     // Обработчик события изменения состояния запроса
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // Запрос успешно выполнен
//             console.log(xhr.responseText);
//         } else if (xhr.readyState === 4 && xhr.status !== 200) {
//             // Возникла ошибка при выполнении запроса
//             console.error("Ошибка " + xhr.status);
//         }
//     };
//     document.getElementById("modalContactForm").onsubmit = function () {
//         return false;
//     }
// })
