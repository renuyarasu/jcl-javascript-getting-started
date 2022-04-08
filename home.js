const btnReview = document.getElementById('btnReview');

btnReview.addEventListener('click', function () {
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        btnReview.textContent='Close Review'
    }else{
        review.classList.add('d-none');
        btnReview.textContent='See Review'
    }
})