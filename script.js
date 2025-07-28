// 점수 변수 (localStorage에서 불러오기)
let userScore = Number(localStorage.getItem('userScore')) || 0;
let computerScore = Number(localStorage.getItem('computerScore')) || 0;
let drawScore = Number(localStorage.getItem('drawScore')) || 0;

function play(userChoice) {
    const choices = ['가위', '바위', '보'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        drawScore++;
        result = '비겼습니다!';
    } else if (
        (userChoice === '가위' && computerChoice === '보') ||
        (userChoice === '바위' && computerChoice === '가위') ||
        (userChoice === '보' && computerChoice === '바위')
    ) {
        userScore++;
        result = '당신이 이겼습니다!';
    } else {
        computerScore++;
        result = '당신이 졌습니다!';
    }

    // 점수판 업데이트
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-score').innerText = drawScore;

    // 결과 출력
    document.getElementById('result').innerText =
        `당신: ${userChoice} / 컴퓨터: ${computerChoice}\n→ ${result}`;

    // localStorage 저장
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('drawScore', drawScore);
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-score').innerText = drawScore;
    document.getElementById('result').innerText = '점수가 초기화되었습니다!';

    // localStorage 초기화
    localStorage.setItem('userScore', 0);
    localStorage.setItem('computerScore', 0);
    localStorage.setItem('drawScore', 0);
}

// 페이지 로딩 시 점수 불러와 표시
window.onload = function () {
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-score').innerText = drawScore;
};
