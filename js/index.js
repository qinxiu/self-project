/**
 * Created by Administrator on 2016/12/5.
 */
$(function(){
    banner();
})
function banner() {
    var $snBanner = $('.sn_banner');
    var width = $snBanner.width();
    var $imgBox = $snBanner.find('ul:first-child');
    var $pointBox = $snBanner.find('ul:last-child');
    var animateFuc = function (callback) {
        $imgBox.animate({'transform': 'translateX(' + (-index * width) + 'px)'}, 300, 'linear', function () {
            if (index >= 9) {
                index = 1;
                $imgBox.css({'transform': 'translateX(' + (-index * width) + 'px)'});
            } else if (index <= 0) {
                index = 8;
                $imgBox.css({'transform': 'translateX(' + (-index * width) + 'px)'});

            }
            $pointBox.find('li').removeClass('active').eq(index - 1).addClass('active');
            callback && callback();
        })
    }
    var index = 1;
    /*�Զ��ֲ�*/
    var timer = setInterval(function () {
        //clearInterval(timer);
        index++;
        animateFuc();
    }, 3000);
    /*�����ƶ�*/

    $imgBox.on('swipeLeft', function () {
        clearInterval(timer);
        /*��һ��*/
        index++;

        animateFuc(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;

                animateFuc();

            }, 5000);
        });

    });
    $imgBox.on('swipeRight', function () {
        clearInterval(timer);
        /*��һ��*/
        index--;

        animateFuc(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++;

                animateFuc();

            }, 5000);
        });

    });

}

