const photoImages = [
  chrome.runtime.getURL("images/1.jpeg"),
  chrome.runtime.getURL("images/2.jpeg"),
  chrome.runtime.getURL("images/3.jpg"),
  chrome.runtime.getURL("images/4.jpg"),
  chrome.runtime.getURL("images/5.jpg"),
  chrome.runtime.getURL("images/6.webp"),
  chrome.runtime.getURL("images/7.jpg"),
  chrome.runtime.getURL("images/8.jpeg"),
  chrome.runtime.getURL("images/10.jpeg"),
  chrome.runtime.getURL("images/11.jpeg"),
  chrome.runtime.getURL("images/12.jpeg"),
  chrome.runtime.getURL("images/13.jpeg"),
  chrome.runtime.getURL("images/14.png"),
  chrome.runtime.getURL("images/15.png"),
  chrome.runtime.getURL("images/16.png"),
  chrome.runtime.getURL("images/17.png"),
  chrome.runtime.getURL("images/18.png"),
  chrome.runtime.getURL("images/19.png"),
  chrome.runtime.getURL("images/20.png"),
  chrome.runtime.getURL("images/21.png"),
  chrome.runtime.getURL("images/22.png"),
  chrome.runtime.getURL("images/23.png"),
  chrome.runtime.getURL("images/24.png"),
  chrome.runtime.getURL("images/25.png"),
  chrome.runtime.getURL("images/26.jpg"),
  chrome.runtime.getURL("images/27.jpeg"),
  chrome.runtime.getURL("images/28.jpeg")
];

function replaceImage(img) {
  const randomPhoto = photoImages[Math.floor(Math.random() * photoImages.length)];
  img.src = randomPhoto;
  img.srcset = "";
}

document.querySelectorAll("img").forEach(replaceImage);
