'use client'
import React, { useEffect, useRef } from 'react';

const CosmosCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    function resizeCanvas() {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];
    const numParticles = 100;

    class Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;

      constructor(x: number, y: number, radius: number, speed: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Bounce off edges
        if (this.x < 0 || this.x > (canvas?.width || 0)) this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > (canvas?.height || 0)) this.angle = -this.angle;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * (canvas?.width || 0),
          Math.random() * (canvas?.height || 0),
          Math.random() * 4 + 1,
          Math.random() * 0.5 + 0.2
        )
      );
    }

    // Connect particles
    function connectParticles() {
      if (ctx) {
        for (let a = 0; a < particles.length; a++) {
          for (let b = a + 1; b < particles.length; b++) {
            const dist = Math.hypot(
              particles[a].x - particles[b].x,
              particles[a].y - particles[b].y
            );

            if (dist < 120) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
              ctx.lineWidth = 0.7;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
      }
    }

    // Start Animation
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />;
};

export default CosmosCanvas;