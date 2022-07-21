const span = document.querySelector("span"),
      text = window.location.href.split("html?")?.at(1)

span.innerHTML = decodeURI(text)
