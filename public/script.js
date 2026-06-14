const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // تغيير النوع من password إلى text والعكس
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // تغيير الأيقونة
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
