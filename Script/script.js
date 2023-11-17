document.addEventListener('DOMContentLoaded', function () {
  const programButtons = document.querySelectorAll('.choices-head')

  // Define an array of sections, each with its own set of properties
  const sections = [
    {
      image: 'Assets/Untitled design (10).png',
      explanation: '// This 9-week course covers fundamental topics in computer science, including data structures, algorithms, and foundational concepts. It is suitable for coding enthusiasts, former computer science students, and beginners who wish to learn Python programming, object-oriented programming, file systems, and more. The course includes online video materials, assignments, and instructor-led sessions.',
      title1: '> FCS:',
      title2: ' Foundations of Computer Science',
      color: '#FFC635'
    },
    
    {
      image: 'Assets/Untitled design (9)-p-500.png',
      explanation: '// Our 14-week bootcamp is designed to equip aspiring developers with the technical and interpersonal skills needed to become software engineers.They will learn essential concepts such as Version Control, OOP, Database Management Systems, MVC Design Patterns, modern Web Frameworks, and AWS. The program also includes a soft-skills curriculum covering Communication & Interpersonal Skills, Professional Writing, Technical Presentations, Negotiation, and Interviewing, will be taught through lectures, weekly projects, tech talks, and a final project to showcase their learning.',
      title1: '> FSW:',
      title2: "Full-Stack Web Development",
      color: '#28EEA7', 
    },
    
    {
      image: 'Assets/s648ae6ab60a6ff58e7f5c83d_fsd.png',
      explanation:'// SE Factorys 12-week Full-Stack Data course offers robust training in data analysis and engineering. Participants learn to handle large data sets with Python and use libraries like Pandas, NumPy, and Matplotlib for data manipulation and visualization. The course also delves into cloud orchestration, distributed computing, relational databases, and SQL basics. Hands-on projects provide real-world data analysis experience. Upon completion, students gain proficiency in Python for analytics, understand data warehousing, and can effectively visualize and present data insights.',
      title1: '> FSD:',
      title2: 'Full-Stack Data',
      color: '#9864DA'
    },
    {
      image: 'Assets/a648ae6ac6c902afee33f9630_uix.png',
      explanation: '// SE Factorys 6-week UI/UX course offers immersive learning in UI/UX design. It encompasses the essentials of UI/UX, from mastering Figma, color psychology, typography to UX heuristics, prototyping and WCAG guidelines. Learners work on projects, transforming wireframes into mockups, and creating responsive interfaces. The course culminates in a final project, enabling students to conduct a thorough UX audit, revamp a website, and create a well-documented case study. Graduates leave equipped with a polished portfolio and market-ready skills in UI/UX design.',
      title1: '> UIX:',
      title2: 'UI/UX Design Bootcamp',
      color: '#fb508e'
    }
  ]

 
  programButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      
      programButtons.forEach(function (btn) {  // Remove 'clicked-head' class from all buttons
        btn.classList.remove('clicked-head')
        btn.style.color = ''
      })

      // Add 'clicked-head' class to the clicked button
      button.classList.add('clicked-head')
      button.style.color = sections[index].color
      
      // Update image source according to the button clicked
      const programImage = document.querySelector('.program-img')
      programImage.innerHTML = `<img src="${sections[index].image}"  alt="design-10" class="program-image-decoration">`

      // Update program explanation text
      const programExplanation = document.querySelector('.program-explanation')
      programExplanation.textContent = sections[index].explanation

      // Update program explanation title
      const titleAbbr = document.querySelector('#title-1')
      titleAbbr.textContent = sections[index].title1

       const titleExplanation = document.querySelector('#title-2')
       titleExplanation.textContent = sections[index].title2
      
       //change the color for all elements with the class "different-color"
       const differentColorSpans = document.querySelectorAll('.different-color')
       differentColorSpans.forEach(function(span) {
         span.style.color = sections[index].color
       })
      
      // Update color of the background
      const sectionColor = document.querySelector('.section-4')
      sectionColor.style.backgroundColor = sections[index].color
        
    })
  
  })
})
