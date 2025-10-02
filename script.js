function downloadResume() {
  // Simulate downloading a resume PDF (you must replace the URL with your real file)
  const link = document.createElement('a');
  link.href = 'your-resume.pdf'; // Replace with actual file
  link.download = 'John-Doe-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
