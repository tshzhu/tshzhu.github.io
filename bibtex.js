document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.toggle-bibtex').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const isHidden = content.style.display === 'none';
      content.style.display = isHidden ? 'block' : 'none';

      if (isHidden) {
        const bibtexText = content.querySelector('pre').textContent;
        navigator.clipboard.writeText(bibtexText)
          .then(() => alert('已复制！'))
          .catch(() => alert('复制失败，请手动复制！'));
      }
    });
  });
});