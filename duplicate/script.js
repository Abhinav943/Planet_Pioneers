// JS of firstfront page

$(document).ready(function() {
    $.fn.commentCards = function() {
        var $this = $(this),
            $cards = $this.find('.card'),
            $current = $cards.filter('.card--current'),
            $next;

        function resetCards() {
            $cards.removeClass('card--current card--out card--next');
            $current.addClass('card--out');
            $current = $next;
            $next = $current.next();
            $next = $next.length ? $next : $cards.first();
            $next.addClass('card--next');
        }

        $cards.on('click', function(e) {
            e.stopPropagation();
            if (!$current.is(this)) {
                resetCards();
                $current = $(this).addClass('card--current');
            }
        });

        if (!$current.length) {
            $current = $cards.last();
            $cards.first().trigger('click');
        } else {
            $current.addClass('card--current');
            $next = $current.next();
            $next = $next.length ? $next : $cards.first();
            $next.addClass('card--next');
        }

        $this.addClass('cards--active');
    };

    $('.cards').commentCards();
});

document.addEventListener('DOMContentLoaded', () => {
    const enterdata = document.getElementById('enter-data');
    
    // Redirect to registration page on button click
    enterdata.addEventListener('click', () => {
        
        window.location.href = 'index2.html'; // Ensure this points to your registration page
    });
});
