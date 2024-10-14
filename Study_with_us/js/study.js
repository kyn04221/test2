document.getElementById('add-button').addEventListener('click', function() {
    const title = document.getElementById('entry-title').value.trim();
    const content = document.getElementById('entry-content').value.trim();

    if (title !== "" && content !== "") {
        const studyList = document.getElementById('study-list');

        const newItem = document.createElement('div');
        newItem.className = 'study-item';

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = title;

        const itemContent = document.createElement('p');
        itemContent.textContent = content;

        newItem.appendChild(itemTitle);
        newItem.appendChild(itemContent);
        studyList.appendChild(newItem);

        // 입력란 초기화
        document.getElementById('entry-title').value = "";
        document.getElementById('entry-content').value = "";
    }
});
