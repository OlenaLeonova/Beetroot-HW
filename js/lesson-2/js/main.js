let password;
let login = prompt('Кто пришёл?', '');
if (login === null) {
	alert('Вход отменён');
}
if (login != null && login !== 'Админ') {
	alert('Я вас не знаю');
}
if (login == 'Админ') {
	let password = prompt('Пароль?', '');
	if (password == 'Чёрный Властелин') {
		alert('Добро пожаловать!');
	}
	if (password != null && password !== 'Чёрный Властелин') {
		alert('Пароль неверен');
	}
	if (password === null) {
		alert('Вход отменён');
	}
}
