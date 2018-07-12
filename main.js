/**
 * selectorに該当するタブを表示する
 */
function showTab(selector) {
    // .tabs-menuのうちselectorに該当するものにだけactiveクラスを付ける
    $(".tabs-menu div").removeClass("active");
    $(selector).addClass("active");
    
    // .tabs-content > divのうちselectorに該当するものだけを表示
    $(".tabs-content > div").hide();
    if (selector === "#tab-menu-a") {
      $("#tabs-a").show();
    }else if(selector === "#tab-menu-b"){
      $("#tabs-b").show();
    }else if(selector === "#tab-menu-c"){
      $("#tabs-c").show();
    }
}

$(document).ready(function() {
    // 初期状態として1番目のタブを表示
    showTab("#tab-menu-a");

    // タブがクリックされたらコンテンツを表示
    $(".tabs-menu div").click(function() {
        // idの値を受け取ってshowTab()関数に渡す
        var selector =   "#"+ $(this).attr("id");
        
        showTab(selector);

        // hrefにページ遷移しない
        return false;
    });
});