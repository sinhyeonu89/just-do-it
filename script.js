function drawNames() {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  // Fisher-Yates shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  const selected = numbers.slice(0, 5).sort((a, b) => a - b);

  // SweetAlert2로 결과 표시
  Swal.fire({
    title: '청소당번 뽑기 완료!',
    html: `<strong>${selected.join(', ')}</strong>`,
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#4caf50',
    background: '#f9f9f9',
    backdrop: `
      rgba(0, 123, 255, 0.2)
      left top
      no-repeat
    `
  });

  // 추가로 아래에도 표시
  document.getElementById('result').innerText = '당번 번호: ' + selected.join(', ');
}
