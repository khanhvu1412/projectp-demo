import user_data from "./resource/database/client.json" with {type: "json"};

let userRepo = [...user_data];

function renderUserListDemo(userRepo) {
    let userTable = document.getElementById("userListDemo");
    let content = "";

    for (let i = 0; i < userRepo.length; i++) {
        let currentUser = userRepo[i];
        let currentContent =
            "<tr>\n" +
            "        <td>" + currentUser.id + "</td>\n" +
            "        <td>" + currentUser.name + "</td>\n" +
            "        <td>" + currentUser.birthYear + "</td>\n" +
            "        <td>" + currentUser.province + "</td>\n" +
            "        <td>" + currentUser.city + "</td>\n" +
            "        <td><button onclick='deleteUserById(" + currentUser.id + ")'>Xoá</button></td>\n" +
            "</tr>";
        content += currentContent;
    }
    userTable.innerHTML = content;
}

function deleteUserById(id) {
    for (let i = 0; i < userRepo.length; i++) {
        if (userRepo[i].id == id) {
            userRepo.splice(i, 1); // Xoá đúng vị trí
            break;
        }
    }

    renderUserListDemo(userRepo);
}

function deleteUser() {
    userRepo.pop();
    renderUserListDemo(userRepo);
}

function openForm() {
    let form = document.getElementById("userFormDemo");

    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function addUser() {
    let name = document.getElementById("name").value.trim();
    let birthYear = document.getElementById("birthYear").value.trim();
    let province = document.getElementById("province").value.trim();
    let city = document.getElementById("city").value.trim();

    let id = userRepo.length > 0
        ? userRepo[userRepo.length - 1].id + 1
        : 1;

    userRepo.push(
        {
            "id": id,
            "name": name,
            "birthYear": birthYear,
            "province": province,
            "city": city,
        }
    )
    renderUserListDemo(userRepo);

    document.getElementById("userFormDemo").reset();

    document.getElementById("userFormDemo").style.display = "none";
}

// function removeVietname(str) {
//     return str
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .replace(/đ/g, "d")
//         .replace(/Đ/g, "D")
//         .toLowerCase();
// }

function searchUser() {
    let q = document.getElementById("search").value.toLowerCase().trim();
    let result = [];

    for (let i = 0; i < userRepo.length; i++) {
        let user = userRepo[i];

        // if (
        //     user.name.toLowerCase().includes(q) ||
        //     user.province.toLowerCase().includes(q) ||
        //     user.city.toLowerCase().includes(q)
        // ) {
        //     result.push();
        // }

        for (let key in user) {
            let value = user[key];

            if (value != null && value.toString().toLowerCase().includes(q)) {
                result.push(user);
                break;
            }
        }
    }

    renderUserListDemo(result);
}

window.searchUser = searchUser;
window.deleteUser = deleteUser;
window.deleteUserById = deleteUserById;
window.addUser = addUser;
window.openForm = openForm;
renderUserListDemo(userRepo);