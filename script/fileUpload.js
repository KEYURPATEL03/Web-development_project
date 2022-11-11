document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#uploadButton").addEventListener("click", e => {
        let formData = new FormData();
        formData.append("file", fileupload.files[0]);
        await fetch('/upload.php', { method: "POST", body: formData });
        alert("The file has been uploaded successfully.")
    });
});