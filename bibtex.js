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
    
    // 向后兼容：将 [T4]/[T8] 缩进标记替换为不换行空格（旧内容仍可正常显示）
    document.querySelectorAll('.codeblock pre').forEach(pre => {
        pre.innerHTML = pre.innerHTML
            .replace(/\[T4\]/g, '\u00A0\u00A0\u00A0\u00A0')
            .replace(/\[T8\]/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
    });
});
