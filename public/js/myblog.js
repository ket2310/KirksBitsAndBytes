const blogUpdateHandler = async (event) => {
    event.preventDefault();

    console.log('you are here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const content = document.querySelector('#content').value.trim();

    const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

const blogDeleteHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete blog');
    }

};


document.querySelector('#update').addEventListener('click', blogUpdateHandler);
document.querySelector('#delete').addEventListener('click', blogDeleteHandler);