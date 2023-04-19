'use strict';

{
  function check() {
    // 残り時間 = 終了時刻 - 現在時刻
    const countdown = endTime - new Date().getTime();

    timer.textContent = countdown;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;

  // (1) 終了時刻を求める
  btn.addEventListener('click', () => {
    endTime = new Date().getTime() + 3 * 1000;

    // (2) 残り時間を求める
    setInterval(check, 100);
  });

  // (3) タイマーの終了
}