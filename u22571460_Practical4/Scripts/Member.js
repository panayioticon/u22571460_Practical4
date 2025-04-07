function deleteMember(button) {
    var member = button.parentNode.parentNode;
    member.remove();
}

window.onload = function () {
    const rows = document.querySelectorAll('.groupMemberRow');
    rows.forEach(row => {
        const gName = row.querySelector('.groupMemberName');
        if (gName.textContent.trim().startsWith('P')) {
            row.style.color = 'red';
        }
    });
};
