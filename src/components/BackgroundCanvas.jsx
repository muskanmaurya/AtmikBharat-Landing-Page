import { useEffect, useRef } from 'react';

export default function WarpBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Engine Configurations
    const PARTICLE_COUNT = 120; // Sweetsport density for full screen coverage
    const BASE_SPEED = 4;       // Speed of warp movement
    const stars = [];

    // Initialize stars with 3D positions
    // x and y range from negative to positive relative to screen center
    // z represents depth distance from viewport camera
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        length: Math.random() * 20 + 10 // Dynamic line length modifiers
      });
    }

    const renderLoop = () => {
      // Create a premium light ice blue background environment
      ctx.fillStyle = '#e0f2fe'; // Light Sky Blue matching your image reference
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      stars.forEach((star) => {
        // 1. Move star closer along the depth axis Z
        star.z -= BASE_SPEED;

        // Reset star back to distant horizon if it flies past the camera viewport
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
        }

        // 2. Map 3D coordinates onto 2D screen coordinate pixels using perspective division
        // Formula: screenX = (3D_X / 3D_Z) * focalLength + screenCenter
        const k = 400 / star.z; // Perspective scaling factor
        const px = star.x * k + cx;
        const py = star.y * k + cy;

        // Calculate tail positions to render a continuous motion blur streak line
        const oZ = star.z + star.length;
        const oK = 400 / oZ;
        const ox = star.x * oK + cx;
        const oy = star.y * oK + cy;

        // If coordinates fall within the drawable canvas, render the trace line
        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(ox, oy);

          // Alternating high contrast premium dark blue shades from your reference pallet
          const isNavy = star.length % 2 === 0;
          ctx.strokeStyle = isNavy ? 'rgba(15, 23, 42, 0.4)' : 'rgba(30, 58, 138, 0.5)'; // Dark Slate and Deep Navy Blue paths
          
          // Outer rays grow thicker as they blast closer toward screen borders
          ctx.lineWidth = Math.min((1 - star.z / canvas.width) * 2.5 + 0.5, 3);
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0" 
    />
  );
}




