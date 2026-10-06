
const brandTrack = document.getElementById('brandTrack');
const prevBtn = document.getElementById('brandPrevBtn');
const nextBtn = document.getElementById('brandNextBtn');

if (brandTrack && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        brandTrack.scrollBy({ left: -260, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        brandTrack.scrollBy({ left: 260, behavior: 'smooth' });
    });
}
