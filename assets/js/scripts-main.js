


$('body').on('click','.div-more .btn',function (){
    $(this).closest('.tags').addClass('expand')

})
$('body').on('click','#menu-item-responsive',function(){
    $('.bottom-menu .a').removeClass('active')
    $(this).toggleClass('active');
})
$('body').on('click','#menu-category-responsive',function(){
    $('.bottom-menu .a').removeClass('active')
    $(this).toggleClass('active');

})
$('body').on('click','#close-category',function(){
    $('#menu-category-responsive').removeClass('active');
})

$('body').on('click','#close-menu',function(){

    $('#menu-item-responsive').removeClass('active');
})

$('body').on('click','.right-cat .category-item',function(){
   $('.category-item').removeClass('active');
   $('.left-cat .row').addClass('d-none');
   $(this).addClass('active');
   let id = $(this).attr('data-cat')
    $('#'+id).removeClass('d-none')

})

$(document).ready(function () {
    $(document).on('click', '[data-modal-click]', function () {
        $('.modal-responsive').removeClass('active')
        let modal = $(this).data('modal')
        $('#' + modal).addClass('active')
        $('.dark-bg').show()

    });
    $(document).on('click', '.dark-bg', function () {
        $('.modal-responsive').removeClass('active')
        $('.dark-bg').hide()

    });
    $(document).on('click', '.icon-cancel', function () {
        $('.modal-responsive').removeClass('active')
        $('.dark-bg').hide()
    });

    $('body').on('click', '#close-filter', function () {
        $('.filters-section').removeClass('active');
    })
    $('body').on('click', '.acc-filter .head', function () {
        $(this).parent().toggleClass('closed');

    })

    const $rail = $('.slider-rail');
    const $progress = $('.slider-progress');
    const $minHandle = $('.min-handle');
    const $maxHandle = $('.max-handle');
    const $minValue = $('#min-value');
    const $maxValue = $('#max-value');
    const railWidth = $rail.width();
    const minValue = 0;
    const maxValue = 100;

    let isDraggingMin = false;
    let isDraggingMax = false;

    // محاسبه درصد به مقدار واقعی
    function getValueFromPosition(position) {
        return Math.round((position / railWidth) * (maxValue - minValue) + minValue);
    }

    // محاسبه موقعیت از مقدار
    function getPositionFromValue(value) {
        return ((value - minValue) / (maxValue - minValue)) * railWidth;
    }

    // به‌روزرسانی پیشرفت و مقادیر
    function updateSlider() {
        const minPos = parseInt($minHandle.css('left'));
        const maxPos = parseInt($maxHandle.css('left'));
        const minVal = getValueFromPosition(minPos);
        const maxVal = getValueFromPosition(maxPos);

        // مطمئن شو که min همیشه کمتر از max باشه
        if (minVal > maxVal) {
            $minHandle.css('left', getPositionFromValue(maxVal));
            $maxHandle.css('left', getPositionFromValue(minVal));
            $minValue.text(maxVal);
            $maxValue.text(minVal);
        } else {
            $minValue.text(minVal);
            $maxValue.text(maxVal);
        }

        // به‌روزرسانی خط پیشرفت
        $progress.css({
            left: minPos + 'px',
            width: (maxPos - minPos) + 2 + 'px'
        });
    }

    // شروع کشیدن دسته‌ها
    $minHandle.on('mousedown', function () {
        isDraggingMin = true;
    });

    $maxHandle.on('mousedown', function () {
        isDraggingMax = true;
    });

    // حرکت دسته‌ها
    $(document).on('mousemove', function (e) {
        if (isDraggingMin) {
            const railOffset = $rail.offset().left;
            let newPos = e.pageX - railOffset;
            if (newPos < 0) newPos = 0;
            if (newPos > railWidth) newPos = railWidth;
            const maxPos = parseInt($maxHandle.css('left'));
            if (newPos < maxPos) $minHandle.css('left', newPos + 'px');
            updateSlider();
        }
        if (isDraggingMax) {
            const railOffset = $rail.offset().left;
            let newPos = e.pageX - railOffset;
            if (newPos < 0) newPos = 0;
            if (newPos > railWidth) newPos = railWidth;
            const minPos = parseInt($minHandle.css('left'));
            if (newPos > minPos) $maxHandle.css('left', newPos + 'px');
            updateSlider();
        }
    });

    // پایان کشیدن
    $(document).on('mouseup', function () {
        isDraggingMin = false;
        isDraggingMax = false;
    });

    // به‌روزرسانی اولیه
    updateSlider();
});
