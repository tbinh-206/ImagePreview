
function upDate(previewPic) {
    console.log("Sự kiện di chuột đã được kích hoạt!");

    // Kiểm tra thông tin ảnh
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Lấy phần tử có id là image
    const imageDiv = document.getElementById("image");

    // Thay đổi nội dung văn bản
    imageDiv.textContent = previewPic.alt;

    // Thay đổi hình nền của khung lớn
    imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
}

function undo() {
    console.log("Đã khôi phục giao diện ban đầu!");

    // Lấy khung hiển thị ảnh lớn
    const imageDiv = document.getElementById("image");

    // Xóa hình nền
    imageDiv.style.backgroundImage = "none";

    // Khôi phục văn bản ban đầu
    imageDiv.textContent =
        "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
