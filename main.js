document.querySelectorAll('a[href="index.html"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'home.html';
  });
});

// === Function to show modal from template ===
function showModal(templateId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const template = document.getElementById(templateId);

  if (template) {
    modalBody.innerHTML = template.innerHTML;

    // Show modal smoothly
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10); // small delay to trigger CSS transition
  }
}

// === Handle About link ===
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    if (link.textContent.trim() === "About") {
      showModal('tmpl-about');
    }
  });
});

// === Handle Home link ===
document.getElementById('home-link').addEventListener('click', function (e) {
  e.preventDefault();
  showModal('tmpl-home');
});

// === Close modal function ===
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// === Close button ===
document.getElementById('modal-close').onclick = closeModal;

// === Close modal when clicking outside content ===
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};

// === Fade-out page transition ===
document.querySelectorAll('a[data-transition]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});
