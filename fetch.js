if (document.getElementById("pdf-viewer") != null) {
    let src = decodeURIComponent(document.getElementById("pdf-viewer").src.split("?file=")[1].split("&upload_id")[0]);
    let filename = `${document.querySelector(".title span").innerText}.pdf`;
    filename = filename.replace(/[/<>:"\\|?*]/g, '_');
    browser.runtime.sendMessage({ src: src, filename: filename });
} else if (document.getElementsByTagName("video").length > 0) {
    let src = document.getElementsByTagName("video")[0].src;
    let filename = `${document.querySelector("span.title").innerText}.mp4`;
    filename = filename.replace(/[/<>:"\\|?*]/g, '_');
    browser.runtime.sendMessage({ src: src, filename: filename });
} else if (document.querySelector(".course-header-container") || document.querySelector(".activity-title-wrapper")) {
    alert("請先開啟教材!");
}