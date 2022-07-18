import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInprogressList(inputText);
};

// リストから指定の要素を削除
const deleteFromList = (targetList, targetElement) => {
  document.getElementById(targetList).removeChild(targetElement);
};

// 未完了リストに追加
const createInprogressList = (text) => {
  // liタグの生成
  const li = document.createElement("li");

  // pタグの生成
  const ptag = document.createElement("p");
  ptag.innerText = text;

  //button(完了)タグの生成
  const doneButton = document.createElement("button");
  doneButton.innerText = "完了";
  doneButton.addEventListener("click", () => {
    deleteFromList("inprogress-list", deleteButton.parentNode.parentNode);

    const addTarget = doneButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    // div以下を初期化
    addTarget.childNodes[0].textContent = null;

    // pタグの生成
    const ptag = document.createElement("p");
    ptag.innerText = text;

    // button（戻す）タグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromList("done-list", backButton.parentNode.parentNode);

      const text = backButton.parentNode.firstElementChild.innerText;

      createInprogressList(text);
    });

    // divタグに各要素を追加
    addTarget.childNodes[0].appendChild(ptag);
    addTarget.childNodes[0].appendChild(backButton);
    console.log(addTarget);

    document.getElementById("done-list").appendChild(addTarget);

    // const li = document.createElement("li");
    // const ptag = doneButton.previousElementSibling;
    // const returnButton = document.createElement("button");
    // returnButton.innerText = "戻す";
    // returnButton.addEventListener("click", () => {
    //   alert("戻すよ");
    // });
    // const div = document.createElement("div");
    // div.className = "list-row";
    // div.appendChild(ptag);
    // div.appendChild(returnButton);
    // li.appendChild(div);
    // document.getElementById("done-list").appendChild(li);
    // deleteFromInprogressList(doneButton.parentNode.parentNode);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromList("inprogress-list", deleteButton.parentNode.parentNode);
  });

  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(ptag);
  div.appendChild(doneButton);
  div.appendChild(deleteButton);

  // liタグの中にdivタグを入れる
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("inprogress-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
