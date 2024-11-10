let participantCount = 1;

document.getElementById('add').addEventListener('click', () => {
    participantCount++;
    addParticipantSection(participantCount);
});

function addParticipantSection(count) {
    const template = `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" required />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" required />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date<span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" required />
            </div>
            <div class="item">
                <p>Grade</p>
                <select name="grade${count}" required>
                    <option value="" disabled selected>Select grade</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <!-- Additional grade options here -->
                </select>
            </div>
        </section>`;
    document.getElementById('add').insertAdjacentHTML('beforebegin', template);
}

document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const feeTotal = totalFees();
    const adultName = document.getElementById('adult_name').value;
    const summaryMessage = successTemplate({
        name: adultName,
        participantCount,
        feeTotal,
    });
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('summary').innerHTML = summaryMessage;
    document.getElementById('summary').classList.remove('hide');
});

function totalFees() {
    let feeElements = [...document.querySelectorAll("[id^=fee]")];
    return feeElements.reduce((sum, element) => sum + Number(element.value || 0), 0);
}

function successTemplate({ name, participantCount, feeTotal }) {
    return `<p>Thank you ${name} for registering. You have registered ${participantCount} participants and owe $${feeTotal} in fees.</p>`;
}