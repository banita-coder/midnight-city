let level = localStorage.getItem("level") || 1;

const data = {
  1: { story: "Tune the radio. City is listening.", ans: "91.7" },
  2: { story: "Match the store bill code.", ans: "204" },
  3: { story: "Patient ID?", ans: "3021" },
  4: { story: "Metro time sync.", ans: "12:00" },
  5: { story: "Who are you?", ans: "investigator" }
};

document.getElementById("story").innerText = data[level].story;

function submit() {
  let a = document.getElementById("answer").value.toLowerCase();
  if (a == data[level].ans) {
    level++;
    if (level > 5) {
      document.getElementById("msg").innerText = "Truth revealed. You were never alive.";
      localStorage.clear();
    } else {
      localStorage.setItem("level", level);
      location.reload();
    }
  } else {
    document.getElementById("msg").innerText = "Wrong... the city is watching.";
  }
}
