import user_data from "./resource/database/client.json" with {type: "json"};
import user_data1 from "./resource/database/client1.json" with {type: "json"};

// let userRepo = [...user_data];
// let userRepo1 = [...user_data1];

// let currentPage = 1;
// let pageSize = 10;
//
// function renderUserListDemo(userRepo) {
//     let userTable = document.getElementById("userListDemo");
//     let content = "";
//
//     let start = (currentPage - 1) * pageSize;
//     let end = start + pageSize;
//
//     let data = userRepo.slice(start, end);
//
//     for (let i = 0; i < data.length; i++) {
//         let currentUser = data[i];
//         let currentContent =
//             "<tr>\n" +
//             "        <td>" + currentUser.id + "</td>\n" +
//             "        <td>" + currentUser.name + "</td>\n" +
//             "        <td>" + currentUser.birthYear + "</td>\n" +
//             "        <td>" + currentUser.province + "</td>\n" +
//             "        <td>" + currentUser.city + "</td>\n" +
//             "        <td><button onclick='deleteUserById(" + currentUser.id + ")'>Xoá</button></td>\n" +
//             "        <td><button onclick='updateUserById(" + currentUser.id + ")'>Sửa</button></td>\n" +
//             "</tr>";
//         content += currentContent;
//     }
//     userTable.innerHTML = content;
//
//     document.getElementById("currentPage").value = currentPage;
// }
//
// function previousPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         renderUserListDemo(userRepo);
//     }
// }
//
// function goToPage() {
//     let page = Number(document.getElementById("currentPage").value);
//     let totalPage = Math.ceil(userRepo.length / pageSize);
//
//     if (page >= 1 && page <= totalPage) {
//         currentPage = page;
//         renderUserListDemo(userRepo);
//     }
// }
//
// function nextPage() {
//     let totalPage = Math.ceil(userRepo.length / pageSize);
//
//     if (currentPage < totalPage) {
//         currentPage++;
//         renderUserListDemo(userRepo);
//     }
// }
//
// function debounce(fn, delay) {
//     let timeout; // biến lưu timer
//
//     return function (...args) {
//         clearTimeout(timeout); // huỷ lần trước
//
//         timeout = setTimeout(() => {
//             fn.apply(this, args); // gọi function gốc
//         }, delay);
//     };
// }
//
// const debounceSearch = debounce((keyword) => {
//     searchUser(keyword);
// }, 500);
//
// // function removeVietnameseTones(str) {
// //     let rs = str
// //         .normalize("NFD")// tách dấu ra khỏi chữ
// //         .replace(/[\u0300-\u036f]/g, "") // xoá dấu toàn bộ
// //         // .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "") chỉ xoá sắc huyền hỏi ngã nặng
// //         .replace(/đ/g, "d")
// //         .replace(/Đ/g, "D")
// //         .toLowerCase();
// //     console.log(rs);
// //     return rs;
// // }
//
// document.getElementById("searchUser")
//     .addEventListener("input", (e) => {
//         debounceSearch(e.target.value);
//     });
//
// function searchUser(keyword) {
//     let matchingUsers = userRepo.filter(
//         user => {
//             return user.name.includes(keyword) || removeVietnameseTones(user.name).includes(keyword) ||
//                 user.province.includes(keyword) || removeVietnameseTones(user.province).includes(keyword) ||
//                 user.city.includes(keyword) || removeVietnameseTones(user.city).includes(keyword)
//         }
//     );
//     console.log(matchingUsers)
//     renderUserListDemo(matchingUsers);
// }
//
// //============ Update(Get id) =========
//
// function updateUserById(id) {
//
//     let user = userRepo.find(u => u.id == id);
//     console.log(user.id);
//
//     if (!user) return;
//
//     document.getElementById("name").value = user.name;
//     document.getElementById("birthYear").value = user.birthYear;
//     document.getElementById("province").value = user.province;
//     document.getElementById("city").value = user.city;
//
//     document.getElementById("userFormDemo").style.display = "block";
// }
//
// function updateUser() {
//     let currentEditId = null;
//     if (currentEditId) {
//         // document.querySelector("#userFormDemo button").innerText = "Update";
//         for (let i = 0; i < userRepo.length; i++) {
//             if (userRepo[i].id == currentEditId) {
//                 userRepo[i].name = name;
//                 userRepo[i].birthYear = birthYear;
//                 userRepo[i].province = province;
//                 userRepo[i].city = city;
//                 break;
//             }
//         }
//         currentEditId = null;
//
//         renderUserListDemo(userRepo);
//
//         document.getElementById("userFormDemo").reset();
//
//         document.getElementById("userFormDemo").style.display = "none";
//     }
// }
//
// // ============ Add ============
// function addUser() {
//     let name = document.getElementById("name").value.trim();
//     let birthYear = document.getElementById("birthYear").value.trim();
//     let province = document.getElementById("province").value.trim();
//     let city = document.getElementById("city").value.trim();
//
//     let id = userRepo.length > 0
//         ? userRepo[userRepo.length - 1].id + 1
//         : 1;
//
//     userRepo.push(
//         {
//             "id": id,
//             "name": name,
//             "birthYear": birthYear,
//             "province": province,
//             "city": city,
//         }
//     )
//
//
//     renderUserListDemo(userRepo);
//
//     document.getElementById("userFormDemo").reset();
//
//     document.getElementById("userFormDemo").style.display = "none";
// }
//
// //=========Delete============
// function deleteUserById(id) {
//     for (let i = 0; i < userRepo.length; i++) {
//         if (userRepo[i].id == id) {
//             userRepo.splice(i, 1); // Xoá đúng vị trí
//             break;
//         }
//     }
//
//     renderUserListDemo(userRepo);
// }
//
// function deleteUser() {
//     userRepo.pop();
//     renderUserListDemo(userRepo);
// }
//
// function openForm() {
//     let form = document.getElementById("userFormDemo");
//
//     if (form.style.display === "none") {
//         form.style.display = "block";
//     } else {
//         form.style.display = "none";
//     }
// }
//
// //================ Tìm kiếm=============
//
// // function removeVietname(str) {
// //     return str
// //         .normalize("NFD")
// //         .replace(/[\u0300-\u036f]/g, "")
// //         .replace(/đ/g, "d")
// //         .replace(/Đ/g, "D")
// //         .toLowerCase();
// // }
//
// // function searchUser() {
// //     let q = document.getElementById("search").value.toLowerCase().trim();
// //     let result = [];
// //
// //     for (let i = 0; i < userRepo.length; i++) {
// //         let user = userRepo[i];
// //
// //         // if (
// //         //     user.name.toLowerCase().includes(q) ||
// //         //     user.province.toLowerCase().includes(q) ||
// //         //     user.city.toLowerCase().includes(q)
// //         // ) {
// //         //     result.push();
// //         // }
// //
// //         for (let key in user) {
// //             let value = user[key];
// //
// //             if (value != null && value.toString().toLowerCase().includes(q)) {
// //                 result.push(user);
// //                 break;
// //             }
// //         }
// //     }
// //
// //     renderUserListDemo(result);
// // }
//
//
// function searchUserBy() {
//     let idKeyword = document.getElementById("searchId").value.trim();
//     let nameKeyword = document.getElementById("searchName").value.trim();
//     let birthYearKeyword = document.getElementById("searchBirthYear").value.trim();
//     let provinceKeyword = document.getElementById("searchProvince").value.trim();
//     let cityKeyword = document.getElementById("searchCity").value.trim();
//
//     let result = [];
//
//     for (let i = 0; i < userRepo.length; i++) {
//         let searchUser = userRepo[i];
//
//         if (!searchUser) continue; // tránh lỗi undefined
//
//         if (
//             (idKeyword === "" || searchUser.id.toString().includes(idKeyword)) &&
//             (nameKeyword === "" || searchUser.name.toLowerCase().includes(nameKeyword.toLowerCase())) &&
//             (birthYearKeyword === "" || searchUser.birthYear.toString().includes(birthYearKeyword)) &&
//             (provinceKeyword === "" || searchUser.province.toLowerCase().includes(provinceKeyword.toLowerCase())) &&
//             (cityKeyword === "" || searchUser.city.toLowerCase().includes(cityKeyword.toLowerCase()))
//         ) {
//             result.push(searchUser);
//         }
//     }
//
//     renderUserListDemo(result);
// }
//
// window.previousPage = previousPage;
// window.goToPage = goToPage;
// window.nextPage = nextPage;
//
// window.searchUser = searchUser;
// window.searchUserBy = searchUserBy;
// window.deleteUser = deleteUser;
// window.deleteUserById = deleteUserById;
// window.updateUser = updateUser;
// window.updateUserById = updateUserById;
// window.addUser = addUser;
// window.openForm = openForm;
// renderUserListDemo(userRepo);


class Render {
    #repo;
    #tableDom;
    #dataRender;

    constructor(tableBodyId, repo) {
        this.#tableDom = document.getElementById(tableBodyId);
        if (repo instanceof UserData) {
            this.#repo = repo;
            this.#dataRender = repo.findAll();
        }
    }

    render() {
        this.#tableDom.innerHTML = this.#dataRender.map(
            user => new RowTable(user).html
        ).join("\n");
    }

    delete() {
        if (this.#repo instanceof UserData) {
            this.#repo.deleteById(id);
        }
    }

}

class RowTable {
    #html

    constructor(user) {
        this.#fromData(user);
    }

    #fromData(user) {
        if (user instanceof User) {
            this.#html =
                "<tr>\n" +
                "        <td>" + user.id + "</td>\n" +
                "        <td>" + user.name + "</td>\n" +
                "        <td>" + user.birthYear + "</td>\n" +
                "        <td>" + user.province + "</td>\n" +
                "        <td>" + user.city + "</td>\n" +
                "        <td><button onclick='deleteUserById(" + user.id + ")'>Xoá</button></td>\n" +
                "        <td><button onclick='updateUserById(" + user.id + ")'>Sửa</button></td>\n" +
                "</tr>";
        } else {
            console.log("Invalid data")
        }
    }

    get html() {
        return this.#html;
    }

}

class User {
    #id;
    #name;
    #birthYear;
    province;
    city;

    constructor(id, name, birthYear, province, city) {
        this.#id = id;
        this.#name = name;
        this.#birthYear = birthYear;
        this.province = province;
        this.city = city;
    }


    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get birthYear() {
        return this.#birthYear;
    }
}

class UserData {
    #repo = [];

    constructor(repo) {
        this.#repo = repo.map(data => new User(data.id, data.name, data.birthYear, data.province, data.city));
    }

    deleteById(id) {
        let index = this.#repo.map(user => user.is).indexOf(id)
        this.#repo.splice(index, 1);
        return this.#repo
    }

    updateUser(user) {
        if (user.id === undefined) {
            console.log(`User id must be an positive integer`);
            return;
        }
        let userData = this.findById(user.id);
        if (!userData) {
            console.log(`User id ${user.id} not found.`);
            return;
        }

        userData.province = user.province;
        userData.city = user.city;
    }

    addUser(user) {
        if (!this.#checkExitstedId(user.id)) {
            this.#repo.push(user);
        } else {
            console.log("ID existed");
        }
        return this.#repo;
    }

    #checkExitstedId(id) {
        return this.#repo.some(user => user.id === id)
    }

    findUserByName(name) {
        return this.#repo.find(user => user.name().contain(name));
    }

    findById(id) {
        return this.#repo.find(user => user.id === id);
    }

    findAll() {
        return [...this.#repo];
    }
}

let repo = new UserData(user_data);
// let repo1 = new UserData(userRepo1);
let render = new Render("userListDemo", repo);
// let render1 = new Render("userListDemo1", repo1);


render.render();
// render1.render();
