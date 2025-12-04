const API_URL = "https://harudonghaeng-ai-proxy-x22h.vercel.app";

// 홈
function backHome() {
    document.getElementById('screen').innerHTML =
        '<p>원하는 항목을 선택해주세요.</p>';
}

// 메뉴 이동
function go(p) {
    if (p === "기분") renderMood();
    if (p === "건강") renderHealth();
    if (p === "간병인") renderCaregiver();
}

// 기분
function renderMood() {
    document.getElementById('screen').innerHTML =
        "<h2>오늘은 감정을 말해볼까요?</h2><textarea id='t'></textarea><button onclick='submitMood()'>AI에게 보내기</button><div id='r' class='output-box' style='display:none;'></div>";
}

async function submitMood() {
    let r = document.getElementById('r');
    r.style.display = "block";
    const msg = document.getElementById('t').value;

    try {
        const res = await fetch(API_URL + "/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: msg })
        });
        const data = await res.json();
        r.textContent = data.reply;
    } catch (e) {
        r.textContent = "서버 연결 오류가 발생했습니다.";
    }
}

// 건강
function renderHealth() {
    document.getElementById('screen').innerHTML =
        "<h2>오늘 건강은 어떠세요?</h2><textarea id='t'></textarea><button onclick='submitHealth()'>AI에게 보내기</button><div id='r' class='output-box' style='display:none;'></div>";
}

async function submitHealth() {
    let r = document.getElementById('r');
    r.style.display = "block";
    const msg = document.getElementById('t').value;

    try {
        const res = await fetch(API_URL + "/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: msg })
        });
        const data = await res.json();
        r.textContent = data.reply;
    } catch (e) {
        r.textContent = "서버 연결 오류가 발생했습니다.";
    }
}

// 간병인
function renderCaregiver() {
    document.getElementById('screen').innerHTML =
        "<h2>보호자에게 전할 말이 있나요?</h2><textarea id='t'></textarea><button onclick='submitCare()'>전송하기</button><div id='r' class='output-box' style='display:none;'></div>";
}

async function submitCare() {
    let r = document.getElementById('r');
    r.style.display = "block";
    const msg = document.getElementById('t').value;

    try {
        const res = await fetch(API_URL + "/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: msg })
        });
        const data = await res.json();
        r.textContent = data.reply;
    } catch (e) {
        r.textContent = "서버 연결 오류가 발생했습니다.";
    }
}
