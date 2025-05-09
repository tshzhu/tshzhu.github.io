/* Additional js file for bibtex citation handling */

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cite-toggle').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const bibtexDiv = document.getElementById(targetId);
            
            if (bibtexDiv) {
                const isHidden = window.getComputedStyle(bibtexDiv).display === 'none';
                bibtexDiv.style.display = isHidden ? 'block' : 'none';

                // // 展开时自动复制
                // if (isHidden) {
                //     const preContent = bibtexDiv.querySelector('.blockcontent pre');
                //     if (preContent) {
                //         const textToCopy = preContent.textContent;
                //         navigator.clipboard.writeText(textToCopy.trim())
                //             .catch(err => console.error('Fail to copy:', err));
                //     }
                // }
            }
        });
    });
    
    // 转换所有 pre 元素中的缩进标记
    document.querySelectorAll('.codeblock pre').forEach(pre => {
        pre.innerHTML = pre.innerHTML
            .replace(/\[T4\]/g, '&nbsp;&nbsp;&nbsp;&nbsp;') // 4x space
            .replace(/\[T8\]/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'); // 8x space
    });
});
