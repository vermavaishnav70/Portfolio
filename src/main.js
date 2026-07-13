import './style.css'

// --- Terminal Logic ---
const termInput = document.getElementById('term-input');
const termBody = document.getElementById('terminal-body');

const commands = {
  '/about': "Vaishnav Verma is a Full Stack & AI Engineer currently studying B.Tech in AI at Newton School of Technology. He builds multi-agent orchestration systems and loves DSA.",
  '/skills': "Primary Stack: React, Next.js, Node.js, Python, TensorFlow, LangGraph. \nArchitecture: Microservices, Agentic workflows, System Design.",
  '/projects': "Check out the 'Featured Work' section below to see Cosmic Dashboard, Wanderlust Planner, and Hybrid Derma AI.",
  '/github': "Opening GitHub profile... (In a real scenario, this would redirect to https://github.com/vermavaishnav70/)",
  '/secret': "Accessing mainframe... Just kidding. Go watch The Social Network!",
  '/help': "Available commands: /about, /skills, /projects, /github, /secret, /clear"
};

if (termInput) {
  termInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      const val = termInput.value.trim().toLowerCase();
      if (!val) return;
      
      termInput.value = '';
      
      // Echo command
      const echoCmd = document.createElement('p');
      echoCmd.className = 'cmd-echo';
      echoCmd.textContent = val;
      
      const termOutput = document.querySelector('.term-output');
      termOutput.appendChild(echoCmd);
      
      // Handle response
      if (val === '/clear') {
        termOutput.innerHTML = '';
      } else {
        const responseText = commands[val] || `Command not found: ${val}. Type /help for available commands.`;
        const responseLine = document.createElement('p');
        responseLine.textContent = responseText;
        termOutput.appendChild(responseLine);
        
        // Scroll to section or perform action
        const sectionMap = {
          '/about': '#about',
          '/projects': '#projects',
          '/skills': '#skills'
        };

        if (sectionMap[val]) {
          const target = document.querySelector(sectionMap[val]);
          if (target) {
            // Delay scroll slightly to let the terminal finish updating visually
            setTimeout(() => {
              target.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }
        } else if (val === '/github') {
          setTimeout(() => {
            window.open('https://github.com/vermavaishnav70/', '_blank');
          }, 500);
        }
      }
      
      // Auto-scroll to bottom
      termBody.scrollTop = termBody.scrollHeight;
    }
  });
}

// --- Neural Skill Graph Logic ---
const skills = [
  { id: 'ai', label: 'AI/ML', type: 'core', x: 50, y: 50 },
  { id: 'web', label: 'Full Stack', type: 'core', x: 30, y: 30 },
  { id: 'langgraph', label: 'LangGraph', type: 'node', x: 75, y: 35 },
  { id: 'react', label: 'React / Next.js', type: 'node', x: 15, y: 50 },
  { id: 'python', label: 'Python', type: 'node', x: 65, y: 75 },
  { id: 'node', label: 'Node.js', type: 'node', x: 40, y: 80 },
  { id: 'sys', label: 'System Design', type: 'node', x: 80, y: 60 }
];

const canvas = document.getElementById('skills-canvas');
const nodesContainer = document.getElementById('skill-nodes');

if (canvas && nodesContainer) {
  const ctx = canvas.getContext('2d');
  
  function initGraph() {
    // Set canvas size
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Clear containers
    nodesContainer.innerHTML = '';
    
    // Create HTML nodes
    skills.forEach(skill => {
      const el = document.createElement('div');
      el.className = `skill-node glass ${skill.type}`;
      el.textContent = skill.label;
      el.style.left = `${skill.x}%`;
      el.style.top = `${skill.y}%`;
      nodesContainer.appendChild(el);
      skill.element = el;
    });
    
    drawLines();
  }
  
  function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)'; // accent color dim
    ctx.lineWidth = 1;
    
    // Connect cores to nodes based on proximity or arbitrary logic
    // For simplicity, connect everyone to center (50,50) roughly
    const centerX = canvas.width * 0.5;
    const centerY = canvas.height * 0.5;
    
    skills.forEach((skill, i) => {
      const rect1 = skill.element.getBoundingClientRect();
      const parentRect = canvas.parentElement.getBoundingClientRect();
      
      const x1 = rect1.left - parentRect.left + rect1.width / 2;
      const y1 = rect1.top - parentRect.top + rect1.height / 2;
      
      // Connect to next skill (simple web)
      const nextSkill = skills[(i + 1) % skills.length];
      const rect2 = nextSkill.element.getBoundingClientRect();
      
      const x2 = rect2.left - parentRect.left + rect2.width / 2;
      const y2 = rect2.top - parentRect.top + rect2.height / 2;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      
      // Extra connection to center for dense look
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(centerX, centerY);
      ctx.stroke();
    });
  }
  
  // Initialize and handle resize
  window.addEventListener('resize', initGraph);
  // Need a slight delay for initial layout calculation
  setTimeout(initGraph, 100);
}

// Ensure smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Scroll Animations (Intersection Observer) ---
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: stop observing once visible if you only want it to animate once
      // observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

// Add fade-up class and observe relevant elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.hero-content, .hero-terminal-wrapper, .section-header, .project-card, .timeline-item, .personal-section, .skills-container');
  animatedElements.forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
});
