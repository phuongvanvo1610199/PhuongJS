let studentData = [];
var cou = 1;
let structureObj = {
  stt: "",
  fullName: "",
  date: "",
  gender: "",
  email: "",
  address: "",
  grade: "",
};
/**
 * Handle Button SUBMIT
 * - add eventlistener
 */

let buttonSubmitDOM = document.getElementById("btn-submit");
buttonSubmitDOM.addEventListener("click", (e) => {
  e.preventDefault();

  //get value form from after submits
  var fullNameDOM = document.getElementById("inputFullName").value;
  var dobDOM = document.getElementById("inputDob").value;
  var genderDOM = getValueGender();
  var emailDOM = document.getElementById("inputEmail").value;
  var addressDOM = document.getElementById("inputAddress").value;
  var gradeDOM = getValueGrade();

  // create obj stud
  var obj = {
    ...structureObj,
    stt: cou,
    fullName: fullNameDOM,
    date: dobDOM,
    gender: genderDOM,
    email: emailDOM,
    address: addressDOM,
    grade: gradeDOM,
  };
  /**
   * handle validate input
   */
  var dateToday = new Date();
  var dateSubmit = new Date(obj.date);
  if (obj.fullName == "") {
    alert("Vui lòng nhập tên");
  } else if (obj.date == "") {
    alert("Vui lòng chọn ngày tháng năm sinh");
  } else if (dateToday < dateSubmit) {
    alert("Vui lòng chọn ngày nhỏ hơn ngày hiện tại");
  } else if (obj.email.length < 8) {
    alert("Vui lòng nhập email lớn hơn 8 ký tự");
  } else if (obj.address == "") {
    alert("Vui lòng nhập nơi ở ");
  } else if (obj.grade == "") {
    alert("Vui lòng chọn lớp");
  } else {
    cou++;
    studentData.push(obj);
    var tbodyDOM = document.getElementsByTagName("tbody")[0];
    var taskItemStudent =
      document.getElementsByClassName("task-item-student")[0];
    var cloneTaskItemStudent = taskItemStudent.cloneNode(true);
    var itemInfoTh = cloneTaskItemStudent.getElementsByTagName("th")[0];
    var listItemTd = cloneTaskItemStudent.getElementsByTagName("td");

    itemInfoTh.innerHTML = obj.stt;
    listItemTd[0].innerHTML = obj.fullName;
    listItemTd[1].innerHTML = obj.date;
    listItemTd[2].innerHTML = obj.gender;
    listItemTd[3].innerHTML = obj.email;
    listItemTd[4].innerHTML = obj.address;
    listItemTd[5].innerHTML = obj.grade;

    tbodyDOM.insertBefore(cloneTaskItemStudent, taskItemStudent);
    cloneTaskItemStudent.style.visibility = "initial";

    var itemButtonDOM = cloneTaskItemStudent.getElementsByTagName("button")[0];

    var infoStudentCheckedDOM = document.getElementsByClassName(
      "info-student-checked"
    )[0];

    var tableInfoStudentDOM =
      infoStudentCheckedDOM.getElementsByClassName("table-info-student")[0];
    itemButtonDOM.addEventListener("click", (e) => {
      e.preventDefault();
      var listSpan = tableInfoStudentDOM.getElementsByTagName("td");
      for (var i = 0; i < listSpan.length; i++) {
        listSpan[0].innerHTML = obj.stt;
        listSpan[1].innerHTML = obj.fullName;
        listSpan[2].innerHTML = obj.date;
        listSpan[3].innerHTML = obj.gender;
        listSpan[4].innerHTML = obj.email;
        listSpan[5].innerHTML = obj.address;
        listSpan[6].innerHTML = obj.grade;
      }
    });
  }

  /**
   * handle button in item list studen and show info into 'Thông tin sinh viên'
   */

  let showInfoStudent = (element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      /**
       * show info student check button
       */
      var infoStudentCheckedDOM = document.getElementsByClassName(
        "info-student-checked"
      )[0];
      var tableInfoStudentDOM =
        infoStudentCheckedDOM.getElementById("table-info-student");
    });
  };

  /**
   * Show data after submit from 'Thêm' to 'Danh sách'
   */
});
function getValueGender() {
  var result = "";
  var ele = document.getElementsByName("gender");
  for (var item of ele) {
    if (item.checked) {
      result = item.value;
    }
  }
  return result;
}
function getValueGrade() {
  var result = "";
  var select = document.getElementById("inputGrade");
  result = select.options[select.selectedIndex].value;
  return result;
}
