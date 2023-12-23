const root = document.querySelector('#root');
const btnAdd = document.querySelector('.btn-add');
const showSum = document.querySelector(".show-sum");
let totalCount = 0;

function Counter() {
    let count = 0;
    let getNum = 1;

    const makeElement = (tag, attr_n, attr_v, content) => {
        let output = document.createElement(tag);
        output.setAttribute(attr_n, attr_v);
        output.textContent = content;
        return output;
    };

    const updateStepText = () => {
        Step.textContent = `Step: ${getNum}`;
    };

    const updateCounter = (n) => {
        if (count + n < 0) {
            return;
        }
        totalCount = totalCount - count + count + n;
        count += n;
        number.textContent = count;
        showSum.textContent = `Sum: ${totalCount}`;
    };

    const delCounter = (e) => {
        e.target.closest(".oz").remove(); // Corrected the class name
        totalCount -= count;
        showSum.textContent = `Sum: ${totalCount}`;
    };

    const updateStepValue = () => {
        const stepInput = document.querySelector("#get-num");
        getNum = stepInput.value ? parseInt(stepInput.value) : 1;
        updateStepText();
    };

    const counter = makeElement("div", "class", "oz", ""); // Corrected the class name
    const number = makeElement("h3", "class", "number", "0");
    const btnDec = makeElement("button", "class", "btn2", "-"); // Corrected the class name
    const btnInc = makeElement("button", "class", "btn3", "+"); // Corrected the class name
    const btnClr = makeElement("button", "class", "btn4", "C"); // Corrected the class name
    const btnDel = makeElement("button", "class", "btn5", "X"); // Corrected the class name
    const Step = makeElement("span", "class", "step", `Step: ${getNum}`);

    counter.append(btnInc, number, btnDec, btnClr, btnDel, Step);
    btnInc.addEventListener("click", () => {
        updateStepValue();
        updateCounter(getNum);
    });
    btnDec.addEventListener("click", () => {
        updateStepValue();
        updateCounter(-getNum);
    });
    btnClr.addEventListener("click", () => {
        updateStepValue();
        updateCounter(-count);
    });
    btnDel.addEventListener("click", delCounter);

    return counter;
}

const addCounter = () => {
    root.append(Counter());
};

btnAdd.addEventListener("click", addCounter);



document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || e.keyCode === 123) {
      e.preventDefault();
  }
});