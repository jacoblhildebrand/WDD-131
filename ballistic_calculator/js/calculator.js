// constants
const GRAVITY_FPS = 32.174;

// calculate Bullet Drop
function calculateBulletDropImperial(muzzleVelocity, distance) {
    // time
    const time = distance / muzzleVelocity;
    // drop
    const drop = 0.5 * GRAVITY_FPS * Math.pow(time, 2) * 12;
    return drop;
}

// calculate Impact Energy
function calculateImpactEnergyImperial(bulletWeightGrains, bulletVelocity) {
    const energy = (bulletWeightGrains * Math.pow(bulletVelocity, 2)) / 450436.686;
    return energy;
}

// calculate Wind Drift
function calculateWindDriftImperial(windSpeed, distance, bulletVelocity, ballisticCoefficient) {
    const drift = (windSpeed * distance / bulletVelocity) * ballisticCoefficient;
    return drift * 12;
}

// calculate Stability Factor
function calculateStabilityFactor(barrelTwistRate, bulletWeightGrains, bulletLength, bulletDiameter) {
    const stabilityFactor = (30 * bulletWeightGrains) / (
        Math.pow((barrelTwistRate / bulletDiameter), 2) *
        Math.pow(bulletDiameter, 3) *
        (bulletLength / bulletDiameter) *
        (1 + Math.pow((bulletLength / bulletDiameter), 2))
    );
    return stabilityFactor;
}

// event listener for form submission
document.getElementById('ballistics-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent refreshing page

    // get inputs
    const muzzleVelocity = parseFloat(document.getElementById('muzzle-velocity').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const bulletWeightGrains = parseFloat(document.getElementById('bullet-weight').value);
    const ballisticCoefficient = parseFloat(document.getElementById('ballistic-coefficient').value);
    const windSpeed = parseFloat(document.getElementById('wind-speed').value);
    const barrelTwistRate = parseFloat(document.getElementById('barrel-twist-rate').value);
    const bulletLength = parseFloat(document.getElementById('bullet-length').value);
    const bulletDiameter = parseFloat(document.getElementById('bullet-diameter').value);

    // calculations
    const drop = calculateBulletDropImperial(muzzleVelocity, distance);
    const energy = calculateImpactEnergyImperial(bulletWeightGrains, muzzleVelocity);
    const drift = calculateWindDriftImperial(windSpeed, distance, muzzleVelocity, ballisticCoefficient);
    const stability = calculateStabilityFactor(barrelTwistRate, bulletWeightGrains, bulletLength, bulletDiameter);

    // results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Calculation Results</h3>
        <p>Bullet Drop at ${distance} yards: ${drop.toFixed(2)} inches</p>
        <p>Impact Energy: ${energy.toFixed(2)} foot-pounds</p>
        <p>Wind Drift at ${distance} yards: ${drift.toFixed(2)} inches</p>
        <p>Stability Factor: ${stability.toFixed(2)}</p>
    `;
});
