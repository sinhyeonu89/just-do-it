function convertUnit() {
  const type = document.getElementById("conversionType").value;
  const input = parseFloat(document.getElementById("inputValue").value);
  const resultEl = document.getElementById("result");
  const noteEl = document.getElementById("note");

  let result = 0;
  let note = "";

  if (isNaN(input)) {
    resultEl.innerText = "숫자를 입력해주세요.";
    noteEl.innerText = "";
    return;
  }

  switch (type) {
    case "pyToM2":
      result = input * 3.3058;
      note = "1평 ≈ 3.3058 m²";
      break;
    case "m2ToPy":
      result = input / 3.3058;
      note = "1 m² ≈ 0.3025평";
      break;
    case "kgToN":
      result = input * 9.80665;
      note = "1kg의 중량은 약 9.80665N (중력 가속도 기준)";
      break;
    case "nToKg":
      result = input / 9.80665;
      note = "1N은 약 0.10197kg의 질량에 해당";
      break;
    case "mmToInch":
      result = input / 25.4;
      note = "1 inch = 25.4 mm";
      break;
    case "inchToMm":
      result = input * 25.4;
      note = "1 inch = 25.4 mm";
      break;
    default:
      result = 0;
      note = "";
  }

  resultEl.innerText = `결과: ${result.toFixed(4)}`;
  noteEl.innerText = note;
}
