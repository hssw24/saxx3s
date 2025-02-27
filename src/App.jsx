function checkAnswer() {
    let correctCarry = ["", "", "", ""];
    let carryOver = 0;
  
    for (let i = num1Digits.length - 1; i >= 0; i--) {
      let sum = (num1Digits[i] || 0) + (num2Digits[i] || 0) + (num3Digits[i] || 0) + carryOver;
  
      if (sum >= 10) {
        carryOver = Math.floor(sum / 10);
        if (i > 0) correctCarry[i - 1] = carryOver.toString();
      } else {
        carryOver = 0;
      }
    }
  
    // **Hier wird jetzt jeder mögliche Übertrag (1, 2, 3...) korrekt überprüft**
    const carryCorrect = carry.every((c, i) => c === correctCarry[i] || (c === "" && correctCarry[i] === "0"));
  
    const userResult = result.join("").replace(/^0+/, "");
    const correctResult = correctDigits.join("").replace(/^0+/, "");
    const resultCorrect = userResult === correctResult;
  
    if (carryCorrect && resultCorrect) {
      setMessage("✅ Richtig!");
      setTaskCompleted(true);
    } else {
      setMessage("❌ Leider falsch. Versuche es nochmal!");
    }
  }
  