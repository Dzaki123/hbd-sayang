$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elementTujuan = $(tujuan);
    //console.log(elementTujuan.offset().top);
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 60
    }, 200);
    e.preventDefault();
});

const options = {
    A: 0,
    B: 0,
    C: 0,
};

$('.vote').on('click', function () {
    $('.result').addClass('muncul');
    var option = $(this).attr('data-option');
    options[option]++;
    updateResults();
    console.log(options);
});

function updateResults() {
    const totalVotes = options.A + options.B + options.C; // Jumlah total suara

    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach((bar, index) => {
        const option = Object.keys(options)[index];
        const percentage = totalVotes > 0 ? (options[option] / totalVotes) * 100 : 0;
        bar.style.width = `${percentage}%`;
        bar.textContent = `${Math.round(percentage)}%`;
    });
}

function redirectToLink(element, url) {
    // Tambahkan efek bounce
    element.classList.add('bounce');
  
    // Setelah animasi selesai, arahkan ke URL
    setTimeout(() => {
      element.classList.remove('bounce');
      window.location.href = url; // Arahkan ke URL yang diberikan
    }, 500); // Sesuaikan durasi animasi dengan CSS (0.5s)
  }