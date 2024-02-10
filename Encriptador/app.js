const keysEncrypt = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encrypt(text) {
  let arrayText = text.split("");
  arrayText.map((item, index) => {
    arrayText[index] = keysEncrypt[item] || arrayText[index];
  });
  arrayText = arrayText.join("");
  console.log(arrayText);
  return arrayText;
}

function uncrypt(text) {
  let response = text;
  for (let key in keysEncrypt) {
    response = response.replaceAll(keysEncrypt[key], key);
  }
  return response;
}

function onClickEncrypt() {
  let userText = document.getElementById("inp_text_to_encrypt");
  console.log(userText);
  const textEncrypt = encrypt(userText.value.toString());
  document.getElementById("response").innerHTML = textEncrypt;
  userText.value = "";
}

function onClickUncrypt() {
  let userText = document.getElementById("inp_text_to_encrypt");
  console.log(userText);
  const encrypt = uncrypt(userText.value.toString());
  document.getElementById("response").innerHTML = encrypt;
  userText.value = "";
}

function onChangeInputText() {
  let response = document.getElementById("area_response");
  let noTextMessage = document.getElementById("no_text_message");
  let userText = document.getElementById("inp_text_to_encrypt");
  if (userText.value !== "") {
    response.style.display = "block";
    noTextMessage.style.display = "none";
  } else {
    noTextMessage.style.display = "block";
    response.style.display = "none";
  }
}

async function onClickCopy() {
  const responseText = document.getElementById("response").innerHTML;
  console.log(responseText);
  try {
    await navigator.clipboard.writeText(responseText);
    alert("Contenido copiado al portapapeles");
  } catch (error) {
    console.error("Error al copiar: ", error);
  }
}
