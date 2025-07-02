// ヘッダー
// モバイルメニューの切り替え機能
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

    // メニューを閉じる関数
  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    hamburgerIcon.classList.remove('hidden');
    hamburgerIcon.classList.add('block');
    closeIcon.classList.add('hidden');
    closeIcon.classList.remove('block');
  }

  if (toggleButton && mobileMenu && hamburgerIcon && closeIcon) {
    toggleButton.addEventListener('click', function() {
      // メニューの表示/非表示を切り替え
      mobileMenu.classList.toggle('hidden');
      
      // アイコンの切り替え
      hamburgerIcon.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('block');
      closeIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('block');
    });

    // メニュー外をクリックした時にメニューを閉じる
    document.addEventListener('click', function(event) {
      if (!toggleButton.contains(event.target) && !mobileMenu.contains(event.target)) {
        closeMobileMenu();
      }
    });

    // 画面サイズ変更時にモバイルメニューをリセット
    window.addEventListener('resize', function() {
      closeMobileMenu();
    });
  }
});