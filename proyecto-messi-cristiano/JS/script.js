document.querySelector('.submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    alert("¡Gracias por votar!");
    
    // إعادة توجيه المستخدم بعد الإشعار
    setTimeout(function() {
        document.querySelector('#votar-form').submit(); // إرسال النموذج بعد 1 ثانية
    }, 1000);
});
