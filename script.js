function play(userChoice) {
    const choices = ['가위','바위','보'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';
    if(userChoice === computerChoice) {
        result = '비겼습니다!';
    } else if (
        (userChoice === '가위' && computerChoice === '보') ||
        (userChoice === '바위' && computerChoice === '가위') ||
        (userChoice === '보' && computerChoice === '바위')
    ) {
        result = '당신이 이겼습니다!';
    } else {
        result = '당신이 졌습니다!';
    }

    document.getElementById('result').innerText =
        `당신: ${userChoice} / 컴퓨터: ${computerChoice}\n-> ${result}`;
}