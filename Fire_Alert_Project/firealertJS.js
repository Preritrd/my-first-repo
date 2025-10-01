
// Simple client-side demo for alerts.
const logEl = document.getElementById('log');
const mainTitle = document.getElementById('mainTitle');
const statusDot = document.getElementById('statusDot');
const statusText = document.getElementById('statusText');
const sideStatus = document.getElementById('sideStatus');
const lastEvent = document.getElementById('lastEvent');
const alarmAudio = document.getElementById('alarmAudio');
const webhookInput = document.getElementById('webhook');
document.getElementById('year').textContent = new Date().getFullYear();

let alarmActive = false;

function log(msg) {
    const time = new Date().toLocaleTimeString();
    logEl.textContent = `${time} — ${msg}\n` + logEl.textContent;
}

function playAlarm() {
    if (!alarmActive) {
        alarmAudio.play().catch(() => {
            console.warn('Audio playback failed.');
        });
        alarmActive = true;
    }
}

function stopAlarm() {
    if (alarmActive) {
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
        alarmActive = false;
    }
}

function updateUI(alert) {
    if (alert.type === 'fire') {
        mainTitle.textContent = '🔥 FIRE ALERT!';
        statusDot.classList.add('alert');
        statusText.textContent = 'Alarm active';
        sideStatus.textContent = 'FIRE ALERT';
        playAlarm();
    } else if (alert.type === 'test') {
        log('Test alert received');
    } else {
        mainTitle.textContent = 'All Clear';
        statusDot.classList.remove('alert');
        statusText.textContent = 'No alarm';
        sideStatus.textContent = 'All Clear';
        stopAlarm();
    }
    lastEvent.textContent = new Date(alert.timestamp).toLocaleString();
    log(`Alert: ${alert.message}`);
}

// Simulated alert sending function
function sendAlert(type = 'fire') {
    const alert = {
        type: type,
        severity: type === 'fire' ? 'high' : 'info',
        timestamp: new Date().toISOString(),
        message: type === 'fire' ? 'Simulated electrical short / smoke detected' : 'This is a test alert from FireBounce'
    };
    updateUI(alert);
    // Send webhook if URL provided
    const webhookUrl = webhookInput.value.trim();
    if (webhookUrl) {
        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(alert)
        }).then(res => {
            if (!res.ok) throw new Error(`Webhook failed: ${res.status}`);
            log(`Webhook POSTed — status: ${res.status}`);
        }).catch(err => {
            log(`Webhook POST failed: ${err.message}`);
        });
    }
    
    // Desktop notification
    if (Notification.permission === 'granted' && type === 'fire') {
        new Notification('FireBounce Alert', {
            body: alert.message,
            icon: 'https://firebounce.app/favicon.ico'
        });
    }
}

document.getElementById('simulateFire').addEventListener('click', () => sendAlert('fire'));
document.getElementById('sendTest').addEventListener('click', () => sendAlert('test'));
document.getElementById('silenceBtn').addEventListener('click', () => {
    stopAlarm();
    log('Alarm silenced by user');
});
document.getElementById('resetBtn').addEventListener('click', () => {
    updateUI({ type: 'clear', message: 'System reset', timestamp: new Date().toISOString() });
    log('System reset');
});
document.getElementById('enableNotif').addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            log('Desktop notifications enabled');
        } else {
            log('Desktop notifications denied');
        }
    });
});
document.getElementById('viewDocs').addEventListener('click', () => {
    window.open('https://github.com/yourrepo/firebounce', '_blank');
});
