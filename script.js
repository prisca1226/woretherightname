$(document).ready(function () {
    /* 
    * Main variables
    */
    var content = [
        {
            title: "I Have Crush On You!!",
            desc: ""
        },
        {
            title: "I Have Crush On You!!",
            desc: "mungkin itu sebuah kalimat yg cukup simple, kalimat yang menyimpan banyak harapan juga keraguan dibaliknya. ada harapan yg ingin rasa suka itu tidak jatuh sendirian, juga ada yg harus disiapkan agar bisa menerima konsekuensinya."
        },
        {
            title: "",
            desc: "menyatakan perasaan itu hal yg cukup serius, banyak yg akan dikorbankan termasuk hasil akhirnya melepas hal yg sudah lama tersimpan itu cukup melegakan dan bukan hal yg mudah.Disini Aku cuman mau ungkapin perasaan aku sama kamu,masalah diterima atau ngga itu tergantung kamu nya,aku juga gak bakal berharap lebih kok. kayak kutipan novel yang pris baca 'semoga lo bukan orang yang salah yang sedang gue kagumi dengan serius. tapi jika lo orang yang salah, senang sekali rasanya memiliki perasaan seperti ini buat lo' -3726mdpl"
        },
        {
            title: "",
            desc: "Kalau Kamu Risih Bilang yahh, if one day u have a gf i will stop liking u...'di bumi, akan selalu ada orang untuk di kagumi tidak bisa dimiliki'-3726mdpl tapi kalau bisa... hehe 'diperjalanan yang panjang ini, jangan jadi milik siapa siapa dulu ya?'-3726mdpl. mungkin segitu saja dari aku,hehe makasih yaa sudah mau dibaca."
        },
        {
            title: "ini isinya kutipan novel fav pris tentang si Mr. Best Part",
            desc: "(1)'Di bumi yang luas ini, aku tak pernah menyangka bisa bertemu dengan seseorang seperti dirimu. Seseorang yang sederhana, tetapi mampu membuatku jatuh cinta.' -MengagumimuDariJauh (2)'Tutur katanya, teduh matanya dan manis senyumnya, sering kali berhasil membuatku takjub.Takjub karena ada manusia seindah dirinyadi muka bumi ini.' -MengagumimuDariJauh  (3)'Di antara banyaknya keraguan yang ada, aku tidak pernah ragu sedikit pun untuk menunggumu melihat ke arahku dan selalu mencintaimu.' -MengagumimuDariJauh  (4)'Jatuh cinta bukan pada rupanya. Jatuh cinta bukan pada otaknya. Alasannya lebih dari itu, seperti takdir yang maunya begitu An, do the best...' -3726mdpl  (5)'Bumi luas sekali, tapi untungnya kita ketemu' -3726mdpl  (5)'Aku tak ingin mengurangi rasa kagumku. aku akan selalu melihat sisi indah lainnya yang ada dalam dirimu.' -Aurora (6)'Aku sedang, dan akan terus berusaha untuk tetap mengagumimu.' -Aurora"
        }
    ];

    var currentPage = 0;

    // Create segments
    for (var i = 0; i < content.length; i++) {
        var segment = $('<div class="segment" id="segment-' + i + '"></div>');
        segment.append('<div class="letters-wrap mutable"><div class="soup-title"></div><div class="soup-desc"></div></div>');
        segment.append('<div class="letters-wrap position-data"><div class="soup-title"></div><div class="soup-desc"></div></div>');
        $('#segments').append(segment);
    }

    // Set text for all segments
    for (var i = 0; i < content.length; i++) {
        var title = content[i].title;
        var desc = content[i].desc;
        
        // Add title letters to mutable and position-data
        for (var j = 0; j < title.length; j++) {
            $('#segment-' + i + ' .mutable .soup-title').append('<span class="letter">' + title[j] + '</span>');
            $('#segment-' + i + ' .position-data .soup-title').append('<span class="letter">' + title[j] + '</span>');
        }
        
        // Add description letters to mutable and position-data
        for (var j = 0; j < desc.length; j++) {
            $('#segment-' + i + ' .mutable .soup-desc').append('<span class="letter">' + desc[j] + '</span>');
            $('#segment-' + i + ' .position-data .soup-desc').append('<span class="letter">' + desc[j] + '</span>');
        }
    }

    // Hide all segments except first
    $('.segment').hide();
    $('#segment-0').show();
    
    // Hide prev button on first page
    if (currentPage === 0) {
        $('#soup-prev').hide();
    }

    // Navigation functions
    function arrangeCurrentPage() {
        var $currentMutable = $('#segment-' + currentPage + ' .mutable');
        var $currentPosition = $('#segment-' + currentPage + ' .position-data');
        
        // Arrange title letters
        $currentMutable.find('.soup-title .letter').each(function(index) {
            var $targetLetter = $currentPosition.find('.soup-title .letter').eq(index);
            if ($targetLetter.length) {
                $(this).css({
                    left: $targetLetter.offset().left - $currentMutable.offset().left + 'px',
                    top: $targetLetter.offset().top - $currentMutable.offset().top + 'px',
                    color: '#fff',
                    zIndex: 9001
                });
            }
        });

        // Arrange description letters
        $currentMutable.find('.soup-desc .letter').each(function(index) {
            var $targetLetter = $currentPosition.find('.soup-desc .letter').eq(index);
            if ($targetLetter.length) {
                $(this).css({
                    left: $targetLetter.offset().left - $currentMutable.offset().left + 'px',
                    top: $targetLetter.offset().top - $currentMutable.offset().top + 'px',
                    color: '#fff',
                    zIndex: 9001
                });
            }
        });
    }

    function scrambleOthers() {
        for (var i = 0; i < content.length; i++) {
            if (currentPage === i) continue;
            
            var $mutable = $('#segment-' + i + ' .mutable');
            var randomLeft, randomTop;
            
            // Scramble title letters
            $mutable.find('.soup-title .letter').each(function() {
                randomLeft = Math.random() * ($(window).width() - 50);
                randomTop = Math.random() * ($(window).height() - 50);
                $(this).css({
                    left: randomLeft + 'px',
                    top: randomTop + 'px',
                    color: '#AAA',
                    zIndex: 1
                });
            });
            
            // Scramble description letters
            $mutable.find('.soup-desc .letter').each(function() {
                randomLeft = Math.random() * ($(window).width() - 50);
                randomTop = Math.random() * ($(window).height() - 50);
                $(this).css({
                    left: randomLeft + 'px',
                    top: randomTop + 'px',
                    color: '#AAA',
                    zIndex: 1
                });
            });
        }
    }

    // Fungsi untuk membuat bintang-bintang
    function createStars() {
        const starsContainer = $('#stars');
        const starCount = 60;
        
        for (let i = 0; i < starCount; i++) {
            const star = $('<div class="star">★</div>');
            
            // Posisi random
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            // Ukuran random
            const size = 8 + Math.random() * 20;
            
            // Delay animasi random
            const delay = Math.random() * 4;
            
            // Warna random (kuning keputihan)
            const colors = ['#fff', '#ffe68f', '#ffd700', '#fffacd'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            star.css({
                left: left + '%',
                top: top + '%',
                fontSize: size + 'px',
                animationDelay: delay + 's',
                color: color
            });
            
            starsContainer.append(star);
        }
    }

    // Fungsi untuk membuat efek kelopak jatuh (optional)
    function createFallingPetals() {
        setInterval(function() {
            if (Math.random() > 0.8) { // 20% chance setiap interval
                const petal = $('<div class="petal-falling"></div>');
                const startLeft = Math.random() * $(window).width();
                
                petal.css({
                    position: 'absolute',
                    left: startLeft + 'px',
                    top: '-50px',
                    width: '15px',
                    height: '15px',
                    background: '#ff9eb5',
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(' + (Math.random() * 360) + 'deg)',
                    animation: 'fall 6s linear forwards',
                    opacity: 0.6,
                    zIndex: 5,
                    pointerEvents: 'none',
                    boxShadow: '0 0 10px #ff9eb5'
                });
                
                $('body').append(petal);
                
                // Hapus setelah animasi selesai
                setTimeout(function() {
                    petal.remove();
                }, 6000);
            }
        }, 800);
    }

    // Initialize stars
    createStars();
    
    // Optional: Uncomment untuk efek kelopak jatuh
    // createFallingPetals();

    // Initialize all letters at random positions
    scrambleOthers();
    
    // Arrange first page after a short delay to ensure positions are calculated
    setTimeout(function() {
        arrangeCurrentPage();
    }, 100);

    // Click handlers
    $('#soup-prev').click(function () {
        $('#soup-next').show();
        $('#segment-' + currentPage).hide();
        currentPage--;
        $('#segment-' + currentPage).show();
        
        if (currentPage === 0) {
            $('#soup-prev').hide();
        }
        
        arrangeCurrentPage();
        scrambleOthers();
    });

    $('#soup-next').click(function () {
        $('#soup-prev').show();
        $('#segment-' + currentPage).hide();
        currentPage++;
        $('#segment-' + currentPage).show();
        
        if (currentPage === content.length - 1) {
            $('#soup-next').hide();
        }
        
        arrangeCurrentPage();
        scrambleOthers();
    });

    // Handle window resize
    $(window).resize(function() {
        arrangeCurrentPage();
    });

    // Tambahkan sedikit efek pada bunga saat halaman berubah
    $('.flower').click(function() {
        $(this).css('animation', 'none').height();
        $(this).css('animation', 'sway 4s infinite ease-in-out');
    });
});
