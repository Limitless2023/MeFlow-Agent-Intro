// Particle Animation with Mouse Interaction
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = {
            x: null,
            y: null,
            radius: 150
        };
        this.primaryColor = '#2ad2c9';
        this.particleCount = 120;
        
        this.init();
        this.animate();
        this.addEventListeners();
    }
    
    init() {
        this.resize();
        this.createParticles();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas, this.primaryColor));
        }
    }
    
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }
    
    connectParticles() {
        const maxDistance = 120;
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.5;
                    this.ctx.strokeStyle = `rgba(42, 210, 201, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        for (let particle of this.particles) {
            particle.update(this.mouse, this.canvas);
            particle.draw(this.ctx);
        }
        
        // Connect nearby particles
        this.connectParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

class Particle {
    constructor(canvas, primaryColor) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.primaryColor = primaryColor;
        
        // Random color variations around the primary color
        const colorVariation = Math.random();
        if (colorVariation < 0.6) {
            this.color = 'rgba(42, 210, 201, '; // Primary teal
        } else if (colorVariation < 0.8) {
            this.color = 'rgba(31, 189, 181, '; // Darker teal
        } else {
            this.color = 'rgba(94, 224, 217, '; // Lighter teal
        }
        
        this.opacity = Math.random() * 0.5 + 0.3;
        this.baseOpacity = this.opacity;
    }
    
    update(mouse, canvas) {
        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
        
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                // Push particles away from mouse
                const force = (mouse.radius - distance) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                
                this.x -= Math.cos(angle) * force * 3;
                this.y -= Math.sin(angle) * force * 3;
                
                // Increase size and opacity near mouse
                this.size = this.baseSize + force * 3;
                this.opacity = Math.min(1, this.baseOpacity + force * 0.5);
            } else {
                // Return to base values
                this.size += (this.baseSize - this.size) * 0.1;
                this.opacity += (this.baseOpacity - this.opacity) * 0.1;
            }
        } else {
            this.size += (this.baseSize - this.size) * 0.1;
            this.opacity += (this.baseOpacity - this.opacity) * 0.1;
        }
        
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;
    }
    
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.primaryColor;
    }
}

// Initialize particle system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
});
