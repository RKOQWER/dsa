/* ============================================================
   quiz.js — shared interactive widgets for DSA lessons
   - Multiple-choice "probe" with immediate feedback
   - Works offline, no dependencies
   Usage: see any lesson's inline <div class="probe"> markup.
   Each .opt button carries data-correct="true|false" and an
   optional data-fb="feedback shown after clicking".
   ============================================================ */
(function () {
  function wire(probe) {
    var opts = probe.querySelectorAll("button.opt");
    var fb = probe.querySelector(".fb");
    opts.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (probe.dataset.answered === "1") return;
        probe.dataset.answered = "1";
        var isCorrect = btn.dataset.correct === "true";
        btn.classList.add(isCorrect ? "correct" : "wrong");
        // reveal the correct option too, if user got it wrong
        if (!isCorrect) {
          opts.forEach(function (o) {
            if (o.dataset.correct === "true") o.classList.add("correct");
          });
        }
        if (fb) {
          var msg = btn.dataset.fb || fb.dataset.default || "";
          if (msg) fb.innerHTML = msg;
          fb.classList.add("show");
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".probe").forEach(wire);
  });
})();
